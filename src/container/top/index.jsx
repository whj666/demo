import React from 'react';
import './style.less';
import {Icon, Breadcrumb} from 'antd';

//引入redux
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionAll from 'actionAll';

class Top extends React.Component{
    constructor(props){
        super();

        this.state = {
            flag: false
        }
    }

    //菜单收起展开
    collapsed(){
        this.props.actionAll.collapsed({
            collapsed: !this.props.stateAll.common.collapsed
        })

        this.setState({
            flag: !this.state.flag
        })
    }

    //登出
    signOut(){
        location.hash = "#/login";
    }

    render(){
        return(
        	<div className="topBox">
                <div className="topBox-nav cb">
                    <div className="icon fl">
                        <Icon onClick={this.collapsed.bind(this)} type={this.state.flag ? "menu-unfold" : "menu-fold"} />
                    </div>

                    <div className="fl f16 systemName">CMS SYSTEM</div>

                    <div className="fr">
                        <Icon onClick={this.signOut.bind(this)} type="logout" />
                    </div>

                    <div className="fr userName f16">admin</div>
                </div>

                <div className="bread">
                    <Breadcrumb>
                        <Breadcrumb.Item>水库调度</Breadcrumb.Item>
                        <Breadcrumb.Item>方案制作</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
        	</div>
        )
    }
}

function mapStateToProps(state){
    return {
        stateAll: state
    };
}

function mapDispatchToProps(dispatch){
    return {
        actionAll: bindActionCreators(actionAll, dispatch),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Top)