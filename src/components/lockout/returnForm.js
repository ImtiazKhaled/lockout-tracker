import React from 'react';
import {
    Form,
    Input,
    Button,
} from 'antd';

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

        return (
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>

                <Form.Item label={'Name'} >
                    {getFieldDecorator('name', {
                        rules: [{ required: true, message: 'Please input residents name!', whitespace: true }],
                    })(<Input />)}
                </Form.Item>

                <Form.Item label={'Room Number'} >
                    {getFieldDecorator('roomNumber', {
                        rules: [{ required: true, message: 'Please input residents roomnumber!', whitespace: true }],
                    })(<Input />)}
                </Form.Item>


                <Form.Item label="Email" >
                    {getFieldDecorator('email', {
                        rules: [
                            {
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                            },
                            {
                                required: true,
                                message: 'Please input your E-mail!',
                            },
                        ],
                    })(<Input />)}
                </Form.Item>

                <Form.Item {...formItemLayout}>
                    <Button type='secondary' onClick={this.props.onCancel}>
                        Close
                    </Button>
                    <Button type="primary" htmlType="submit">
                        Add Resident
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

export const CreateReturn = Form.create({ name: 'register' })(ReturnForm);
