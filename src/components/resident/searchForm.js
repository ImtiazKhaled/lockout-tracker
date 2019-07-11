import React from 'react';
import { Form, Input, Button, Select } from 'antd';
const { Option } = Select;


const clearFilter = {
    searchName: '',
    searchRoomNumber: '',
    searchCheckout: 'both',
}

class SearchForm extends React.Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) this.props.onSearch(values);
        });
    };

    handleConfirmBlur = e => {
        const { value } = e.target;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    handleClear = e => {
        this.props.form.resetFields();
        this.props.onSearch(clearFilter);
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            layout: 'vertical',
        };

        return (
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                <Form.Item style={this.props.responsive.FilterFields}>
                    {getFieldDecorator('searchName', {
                        rules: [],
                    })(<Input placeholder='Enter Search Name' />)}
                </Form.Item>
                <Form.Item style={this.props.responsive.FilterFields}>
                    {getFieldDecorator('searchRoomNumber', {
                        rules: [],
                    })(<Input placeholder='Enter Room Number' />)}
                </Form.Item>
                <Form.Item style={this.props.responsive.FilterFields}>
                    {getFieldDecorator('searchCheckout', {
                        rules: [],
                    })(
                        <Select placeholder='Please select a checkout type'>
                            <Option value='both'>Both</Option>
                            <Option value='checkedout'>Checked Out</Option>
                            <Option value='instock'>In Stock</Option>
                        </Select>,
                    )}
                </Form.Item>
                <Form.Item style={this.props.responsive.FilterButtons} {...formItemLayout}>
                    <Button style={this.props.responsive.AddButton} type='secondary' onClick={this.handleClear}>
                        Clear
                        </Button>
                    <Button style={this.props.responsive.AddButton} type="primary" htmlType="submit">
                        Search
                        </Button>
                </Form.Item>
            </Form>
        );
    }
}

export const SearchResidents = Form.create({ name: 'searchResidents' })(SearchForm);
