import React from 'react';
import './style.less';
import {setCookie} from "public";
import {Button, Icon, Form,Input,Checkbox,Spin,message} from 'antd';
import {urls} from "urls";
import {postApi} from "api";
const FormItem = Form.Item;

class Login extends React.Component{
    constructor(props){
        super(props);

        this.state={
            loading: true,
            checkeOne: (localStorage.checkeOne !== undefined ? Boolean(localStorage.checkeOne) : false)
        }
    }

    componentDidMount(){
        this.props.form.setFieldsValue({
            userName: localStorage.userName
        });
        this.setState({
            loading: false
        })
    }

    //记录checkbox值
    checkChange(e){
        this.setState({
            checkeOne: !this.state.checkeOne
        },() => {
            if(this.state.checkeOne){
                localStorage.checkeOne = "1";
            }else{
                localStorage.checkeOne = "";
            };
        })
    }

    //登陆提交
    handleSubmit(e){
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let options = {
                    userName: values.userName,
                    password: values.password
                }

                postApi(options, urls.login, (res) => {
                    sessionStorage.login="true";
                    if(this.state.checkeOne){
                        localStorage.userName=values.userName;
                    }else{
                        localStorage.removeItem("userName");
                    }

                    this.props.history.push("/demo");
                })
            };
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Spin wrapperClassName="spinClass" spinning={this.state.loading} size="large" tip="加载中...">
                <Form className="loginBox login-form" onSubmit={this.handleSubmit.bind(this)}>
                    <div className="bg">
                        <div className="title">密码登陆</div>
                        <div className="form">
                            <FormItem>
                                {getFieldDecorator('userName', {
                                    rules: [{ required: true, message: '请输入账号！' }],
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

                            <div className="radio">
                                <Checkbox name="checkeOne" checked={this.state.checkeOne} onChange={this.checkChange.bind(this)}>记住账号</Checkbox>
                            </div>

                            <Button type="primary" htmlType="submit">登录</Button>

                            <p className="copyright">Copyright <i className="anticon anticon-copyright"></i> 2018 JIN</p>
                        </div>
                    </div>
                </Form>
            </Spin>
        )
    }
}

const WrappedNormalLoginForm = Form.create()(Login);
module.exports = WrappedNormalLoginForm