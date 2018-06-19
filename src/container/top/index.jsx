import React from 'react';
import './style.less';
import {Icon, Breadcrumb, Dropdown, Menu} from 'antd';
import navData from "../nav/menuList"

//引入redux
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionAll from 'actionAll';

const menu = (
    <Menu>
        <Menu.Item>
            <a href="#/usercenter/userInfo"><Icon type="user" /> 个人中心</a>
        </Menu.Item>
        <Menu.Item>
            <a href="javascript:void(0);"><Icon type="setting" /> 修改密码</a>
        </Menu.Item>
        <Menu.Item>
            <a href="#/login"><Icon type="logout" /> 注销</a>
        </Menu.Item>
    </Menu>
);

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

    render(){
        return(
        	<div className="topBox">
                <div className="topBox-nav cb">
                    <div className="icon fl">
                        <Icon onClick={this.collapsed.bind(this)} type={this.state.flag ? "menu-unfold" : "menu-fold"} />
                    </div>

                    <div className="fl f16 systemName">CMS SYSTEM</div>

                    <Dropdown overlay={menu} placement="bottomRight">
                        <a className="ant-dropdown-link fr mr20" href="javascript:void(0);">
                            <div className="top-rightBox cp">
                                <img className="userImg fl dib mr10" src="http://localhost:8080/resources/images/34560006.png" />
                                <div className="fl userName f16">
                                    {localStorage.userName}
                                    <Icon type="down" />
                                </div>
                            </div>
                        </a>
                    </Dropdown>
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