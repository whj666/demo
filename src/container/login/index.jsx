import React from 'react'
import './style.less'
import { Button, Icon, Form,Input,Checkbox,Spin,message } from 'antd'

const FormItem = Form.Item;

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            loading:true
        }
    }

    componentDidMount(){
        this.props.form.setFieldsValue({
            userName: localStorage.userName
        });
        this.setState({
            loading:false
        })
    }

    //登陆提交
    handleSubmit(e){
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                
            }
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

                            <input type="text" value="admin" style={{position: "absolute",zIndex: "-1"}} disabled autoComplete = "off"/> 
                            <input type="password"  value=" " style={{position: "absolute",zIndex: "-1"}} disabled autoComplete = "off"/> 

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

                            <Button type="primary" htmlType="submit">登录</Button>
                            <Button style={{marginTop: 24, marginBottom: 24}}>注册</Button>
                            <p className="copyright"></p>
                        </div>
                    </div>
                </Form>
            </Spin>
        )
    }
}

const WrappedNormalLoginForm = Form.create()(Login);
module.exports = WrappedNormalLoginForm