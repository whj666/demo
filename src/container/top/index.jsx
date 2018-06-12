import React from 'react';
import './style.less';
import {Icon, Breadcrumb} from 'antd';
import navData from "../nav/menuList"

//引入redux
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionAll from 'actionAll';

class Top extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            flag: Boolean(Number(localStorage.collapsed)),
            titleName: navData.titleToName[props.hash[0]],
            itemName: navData.itemToName[props.hash[1]]
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            titleName: navData.titleToName[nextProps.hash[0]],
            itemName: navData.itemToName[nextProps.hash[1]]
        })
    }

    //菜单收起展开
    collapsed(){
        this.props.actionAll.collapsed({
            collapsed: !this.state.flag
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

                    <div className="fr userName f16">{localStorage.userName}</div>
                </div>

                <div className="bread">
                    <Breadcrumb>
                        <Breadcrumb.Item>{this.state.titleName}</Breadcrumb.Item>
                        <Breadcrumb.Item>{this.state.itemName}</Breadcrumb.Item>
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