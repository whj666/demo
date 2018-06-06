import React from 'react';
import './style.less';
import {Button, Icon, Form, Input, Message} from 'antd';
import {urls} from "urls";
import {postApi} from "api";
const FormItem = Form.Item;

class Register extends React.Component{
    handleRegister(e){
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let options = {
                    newUserName: values.newUserName,
                    newPassword: values.newPassword
                }

                postApi(options, urls.register, (res) => {
                    if(res.flag){
                        Message.success("注册成功！")
                    }
                })
            };
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form className="form" onSubmit={this.handleRegister.bind(this)}>
                <FormItem>
                    {getFieldDecorator('newUserName', {
                        rules: [{ required: true, message: '请设置账号！' }],
                    })(
                        <Input
                            type="text"
                            placeholder="账号"
                            autoComplete="off"
                            className="form-input-one"
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)',fontSize: '14px' }} />}
                        />
                    )}
                </FormItem>
                
                <FormItem>
                    {getFieldDecorator('newPassword', {
                        rules: [{ required: true, message: '请设置密码！' }],
                    })(
                        <Input
                            type="password"
                            placeholder="密码"
                            autoComplete="off"
                            className="form-input-one"
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)',fontSize: '14px' }} />}
                        />
                    )}
                </FormItem>

                <Button type="primary" htmlType="submit">注册</Button>
            </Form>
        );
    }
}

const WrappedNormalRegisterForm = Form.create()(Register);
export default WrappedNormalRegisterForm;