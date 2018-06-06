import './style';
import React from 'react';
import {Spin} from 'antd';
import Nav from './nav/index';
import {Switch, Route, withRouter} from "react-router-dom";
import Demo from "./body/demo";

class Box extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="box">
                    <div className="nav">
                        <Nav />
                    </div>

                    <div className="container" id="container">
                        <Switch>
                            <Route path="/demo" component={Demo} />
                        </Switch>
                        <Spin spinning={false}></Spin>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Box
