import React from 'react';
import { Form, Input, Button, Select, Col, Row } from 'antd';
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
            labelCol: {
                xs: { span: 24 },
                sm: { span: 4 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 20 },
            },
        };

        return (
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>

                <Row>
                    <Col span={8}>
                        <Form.Item label={'Name'} >
                            {getFieldDecorator('searchName', {
                                rules: [],
                            })(<Input placeholder='Enter Search Name' />)}
                        </Form.Item>
                    </Col>

                    <Col span={8}>
                        <Form.Item label={'Room'} >
                            {getFieldDecorator('searchRoomNumber', {
                                rules: [],
                            })(<Input placeholder='Enter Room Number' />)}
                        </Form.Item>
                    </Col>

                    <Col span={8}>
                        <Form.Item label='Checked Out'>
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
                    </Col>
                </Row>

                <Row>
                    <Form.Item {...formItemLayout}>
                        <Button type='secondary' onClick={this.handleClear}>
                            Clear
                        </Button>
                        <Button type="primary" htmlType="submit">
                            Search
                        </Button>
                    </Form.Item>
                </Row>
            </Form>
        );
    }
}

export const SearchResidents = Form.create({ name: 'searchResidents' })(SearchForm);
