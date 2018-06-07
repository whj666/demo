import './style';
import React from 'react';
import {Spin} from 'antd';
import Nav from './nav';
import {Switch, Route, withRouter} from "react-router-dom";
import NotFound from "./error";
import Demo from "./body/demo";
import {hash, openKeys} from "./nav/active";

class Box extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="box">
                    <div className="nav">
                        <Nav hash={hash} openKeys={openKeys} />
                    </div>

                    <div className="container" id="container">
                        <Switch>
                            <Route path="/demo" component={Demo} />
                            <Route component={NotFound} />
                        </Switch>
                        <Spin spinning={false}></Spin>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Box
