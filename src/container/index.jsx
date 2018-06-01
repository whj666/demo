import './style';
import React from 'react';
import Nav from './nav/index';
import {Switch, Route, withRouter} from "react-router-dom";
import Demo from "./body/demo";

//引入redux
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as ActionAll from './actions/actionAll';

class Box extends React.Component{
    constructor(props){
        super();

        this.state = {
            error:false,
            loading:true
        }
    }

    componentWillReceiveProps(nextProps){
        if(JSON.stringify(nextProps.stateAll.common.render) !== JSON.stringify(this.props.stateAll.common.render)){
            this.setState({
                loading:nextProps.stateAll.common.render.loading
            })
        }
    }

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

        if(hash.indexOf("make") !== -1){
            let num = hash.indexOf("make");
            hash = hash.substr(0, num + 4);
        };

        return(
        	<div className="box">
                <div className="bottom">
                    <div className="nav">
                        <Nav hash={[hash]} openKeys={[openKeys]} />
                    </div>

                    <div className="container">
                        <div className="containerChildren">
                        	<Switch>
					            <Route path="/demo" component={Demo} />
				          	</Switch>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

// -------------------redux react 绑定--------------------

//获取redux里面的值
function mapStateToProps(state) {
    return {
        stateAll: state
    }
}

//设置redux里面的值
function mapDispatchToProps(dispatch) {
    return {
        actionAll: bindActionCreators(ActionAll, dispatch)
    }
}
export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Box))

