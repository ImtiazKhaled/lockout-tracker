import React from 'react';
import { Form, Input, Button, DatePicker } from 'antd';


class ReturnForm extends React.Component {
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

        const config = {
            rules: [{ type: 'object', required: true, message: 'Please select time!' }],
        };

        return (
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>

                <Form.Item label='Checkin Time'>
                    {getFieldDecorator('checkinTime', config)(
                        <DatePicker showTime format='HH:mm MM/DD/YY' />,
                    )}
                </Form.Item>

                <Form.Item label={'Checked In By'} >
                    {getFieldDecorator('checkinBy', {
                        rules: [{ required: true, message: 'Please enter who is checking this in', whitespace: true }],
                    })(<Input />)}
                </Form.Item>

                <Form.Item {...formItemLayout}>
                    <Button type='secondary' onClick={this.props.onCancel}>
                        Close
                    </Button>
                    <Button type='primary' htmlType='submit'>
                        Checkin Card
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

export const CreateReturn = Form.create({ name: 'createReturn' })(ReturnForm);
