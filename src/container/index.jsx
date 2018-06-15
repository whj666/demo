import './style';
import React from 'react';
import {Spin} from 'antd';
import Nav from './nav';
import Top from './top';
import {Switch, Route} from "react-router-dom";
import NotFound from "./error";
import Demo from "./body/demo";
import routerNav from "./nav/active";
import Curd from "./body/funModule/curd";
import UserInfo from "./body/usercenter/userInfo";
import SecuritySet from "./body/usercenter/securitySet";

class Box extends React.Component{
    render(){
        let hash = location.hash.substr(2).split("/");
        return(
            <React.Fragment>
                <div className="box">
                    <div className="nav">
                        <Nav hash={routerNav()[0]} openKeys={routerNav()[1]} />
                    </div>

                    <div className="box-right">
                        <div className="top">
                            <Top hash={hash} />
                        </div>

                        <div className="container" id="container">
                            <div className="container-box">
                                <Switch>
                                    <Route path="/demo" component={Demo} />
                                    <Route path="/funModule/curd" component={Curd} />
                                    <Route path="/usercenter/userInfo" component={UserInfo} />
                                    <Route path="/usercenter/securitySet" component={SecuritySet} />
                                    <Route component={NotFound} />
                                </Switch>
                            </div>
                            
                            <Spin spinning={false}></Spin>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Box
