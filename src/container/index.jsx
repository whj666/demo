import './style';
import React from 'react';
import {Spin} from 'antd';
import Nav from './nav';
import {Switch, Route, withRouter} from "react-router-dom";
import NotFound from "./error";
import Demo from "./body/demo";

class Box extends React.Component{
    render(){
        let hash = location.hash;
        let openKeys=null;
        hash = hash.substr(1);

        if(hash.indexOf("dispatch") !== -1){
            openKeys="dispatch";
        }else if(hash.indexOf("prediction") !== -1){
            openKeys="prediction";
        }else if(hash.indexOf("settinglist") !== -1){
            openKeys="settinglist";
        };

        return(
            <React.Fragment>
                <div className="box">
                    <div className="nav">
                        <Nav hash={[hash]} openKeys={[openKeys]} />
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
