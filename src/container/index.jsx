import './style';
import React from 'react';
import {Spin} from 'antd';
import Nav from './nav';
import Top from './top'
import {Switch, Route, withRouter} from "react-router-dom";
import NotFound from "./error";
import Demo from "./body/demo";
import routerNav from "./nav/active";

class Box extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="box">
                    <div className="nav">
                        <Nav hash={routerNav()[0]} openKeys={routerNav()[1]} />
                    </div>

                    <div className="box-right">
                        <div className="top">
                            <Top />
                        </div>

                        <div className="container" id="container">
                            <div className="container-box">
                                <Switch>
                                    <Route path="/demo" component={Demo} />
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
