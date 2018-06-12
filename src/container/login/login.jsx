import React from 'react';
import './style.less';
import {Button, Icon, Form, Input} from 'antd';
import {urls} from "urls";
import {postApi} from "api";
const FormItem = Form.Item;

class LoginIndex extends React.Component{
    handleSubmit(e){
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let options = {
                    userName: values.userName,
                    password: values.password
                }

                postApi(options, urls.login, res => {
                    localStorage.userName = values.userName;
                    this.props.history.push("/table/curd");
                })
            };
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form className="form" onSubmit={this.handleSubmit.bind(this)}>
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: '请输入账号！' }],
                        initialValue: localStorage.userName || ""
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
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请输入密码！' }],
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

                <Button type="primary" htmlType="submit">登录</Button>
            </Form>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(LoginIndex);
export default WrappedNormalLoginForm;