import React from 'react';
import { Form, Input, Button, DatePicker } from 'antd';

class CheckinForm extends React.Component {
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
                sm: { span: 24 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 24 },
            },
            labelAlign: 'left'
        };

        return (
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>

                <Form.Item label={'Name'} >
                    {getFieldDecorator('title', {
                        rules: [{ required: true, message: 'Please input title of Event!', whitespace: true }],
                    })(<Input />)}
                </Form.Item>

                <Form.Item label={'Room Number'} >
                    {getFieldDecorator('roomNumber', {
                        rules: [{ required: true, message: 'Please input your Name!', whitespace: true }],
                    })(<Input />)}
                </Form.Item>

                <Form.Item {...formItemLayout}>
                    <Button style={{ margin: '10px' }} type='secondary' onClick={this.props.onCancel}>
                        Close
                    </Button>
                    <Button type="primary" htmlType="submit">
                        CheckIn
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

export const CreateCheckin = Form.create({ name: 'createCheckin' })(CheckinForm);
