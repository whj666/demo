import React from 'react';
import './style.less';
import {Tabs, Spin} from 'antd';
import WrappedNormalLoginForm from './login';
import WrappedNormalRegisterForm from './register';
const TabPane = Tabs.TabPane;

class Login extends React.Component{
    constructor(props){
        super(props);

        this.state={
            loading: true
        }
    }

    componentDidMount(){
        this.setState({
            loading: false
        })
    }

    render(){
        return(
            <div className="container" id="login">
                <Spin spinning={this.state.loading}></Spin>

                <div className="loginBox login-form">
                    <div className="bg">

                        <Tabs defaultActiveKey="1">
                            <TabPane tab="登录" key="1">
                                <WrappedNormalLoginForm history={this.props.history} />
                            </TabPane>

                            <TabPane tab="注册" key="2">
                                <WrappedNormalRegisterForm history={this.props.history} />
                            </TabPane>
                        </Tabs>

                        <p className="copyright">Copyright <i className="anticon anticon-copyright"></i> 2018 JIN</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login