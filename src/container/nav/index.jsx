import React from 'react';
import {NavLink} from 'react-router-dom';
import {Menu, Icon} from 'antd';
import './style';
import menuList from './menuList'

//引入redux
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionAll from 'actionAll';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openKeys: [props.openKeys],
            selectedKeys: [props.hash]
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            openKeys: [nextProps.openKeys],
            selectedKeys: [nextProps.hash]
        });
    }

    //点击菜单
    onSelect(item) {
        this.setState({
            selectedKeys: [item.key]
        });
    }

    //点开菜单标题
    onOpenChange(openKeys) {
        let newKeys = openKeys[openKeys.length - 1];
        this.setState({
            openKeys: [newKeys]
        });
    }

    //处理菜单列表
    handleMenuList(menuList){
        return menuList.list.map((item, index) => {
            return(
                <Menu.SubMenu key={item.key} title={<span><Icon type={item.icon} /><span>{item.title}</span></span>}>
                    {this.handleChildrenMenu(item.children)}
                </Menu.SubMenu>
            )
        })
    }

    //处理子菜单
    handleChildrenMenu(list){
        return list.map((item, index) => {
            return <Menu.Item key={item.key}><NavLink to={item.key}>{item.name}</NavLink></Menu.Item>
        })
    }

    render() {
        return (
            <div className="side-nav">
                <Menu
                    mode="inline"
                    openKeys={this.state.openKeys}
                    selectedKeys={this.state.selectedKeys}
                    onOpenChange={this.onOpenChange.bind(this)}
                    onSelect={this.onSelect.bind(this)}
                >
                    {this.handleMenuList(menuList)}
                </Menu>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        ActionAll: bindActionCreators(actionAll, dispatch),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Nav);