import React from 'react';
import { Form, Input, Button, Select, DatePicker }
    from 'antd';
const { Option } = Select;


class LockoutForm extends React.Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) this.props.onSubmit(values);
        });
    };

    handleConfirmBlur = e => {
        const { value } = e.target;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    render() {
        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };

        const prefixSelector = getFieldDecorator('checkoutItemPrefix', {
            initialValue: 'CARD',
        })(
            <Select>
                <Option value='CARD'>CARD</Option>
                <Option value='KEY'>KEY</Option>
            </Select>,
        );

        const config = {
            rules: [{ type: 'object', required: true, message: 'Please select time!' }],
        };

        return (
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>

                <Form.Item label='Type'>
                    {getFieldDecorator('checkoutType', {
                        rules: [{ required: true, message: 'Please select a checkout type' }],
                    })(
                        <Select placeholder='Please select a checkout type'>
                            <Option value='mavx'>mavx</Option>
                            <Option value='free'>free</Option>
                            <Option value='$5'>$5</Option>
                            <Option value='$10'>$10</Option>
                            <Option value='$15'>$15</Option>
                            <Option value='$20'>$20</Option>
                            <Option value='$25'>$25</Option>
                        </Select>,
                    )}
                </Form.Item>

                <Form.Item label='Checkout Item'>
                    {getFieldDecorator('checkoutItemCode', {
                        rules: [{ required: true, message: 'Please select Item being checked out' }],
                    })(<Input 
                          placeholder='Item number' 
                          addonBefore={prefixSelector} />)}
                </Form.Item>

                <Form.Item label='Checkout Time'>
                    {getFieldDecorator('checkoutTime', config)(
                        <DatePicker showTime format='HH:mm MM/DD/YY' />,
                    )}
                </Form.Item>

                <Form.Item label={'Checked Out By'} >
                    {getFieldDecorator('checkoutBy', {
                        rules: [{ required: true, message: 'Please enter who is checking this out', whitespace: true }],
                    })(<Input />)}
                </Form.Item>

                <Form.Item {...formItemLayout}>
                    <Button type='secondary' onClick={this.props.onCancel}>
                        Close
                    </Button>
                    <Button type='primary' htmlType='submit'>
                        Checkout Card
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

export const CreateLockout = Form.create({ name: 'register' })(LockoutForm);
