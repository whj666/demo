import React from 'react';
import {NavLink} from 'react-router-dom';
import {Menu, Icon} from 'antd';
import './style';

//引入redux
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionAll from 'actionAll';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openKeys: props.openKeys,
            selectedKeys: props.hash
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            openKeys: nextProps.openKeys,
            selectedKeys: nextProps.hash
        });
    }

    onSelect(item) {
        this.setState({
            selectedKeys: [item.key]
        });
    }

    onOpenChange(openKeys) {
        let newKeys = openKeys[openKeys.length - 1];
        this.setState({
            openKeys: [newKeys]
        });
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
                    <Menu.SubMenu key="dispatch" title={<span><Icon type="logout" /><span>水库调度</span></span>}>
                        <Menu.Item key="/dispatch/make"><NavLink to="/dispatch/make">方案制作</NavLink></Menu.Item>
                        <Menu.Item key="/dispatch/administration"><NavLink to="/dispatch/administration">方案管理</NavLink></Menu.Item>
                        <Menu.Item key="/dispatch/contrast"><NavLink to="/dispatch/contrast">方案对比</NavLink></Menu.Item>
                        <Menu.Item key="/dispatch/config"><NavLink to="/dispatch/config">自动调度配置</NavLink></Menu.Item>
                    </Menu.SubMenu>

                    <Menu.SubMenu key="prediction" title={<span><Icon type="line-chart" /><span>洪水预报</span></span>}>
                        <Menu.Item key="/prediction/programManagement"><NavLink to="/prediction/programManagement">模型方案管理</NavLink></Menu.Item>
                        <Menu.Item key="/prediction/jobForecast"><NavLink to="/prediction/jobForecast">实时作业预报</NavLink></Menu.Item>
                        <Menu.Item key="/prediction/resultManagement"><NavLink to="/prediction/resultManagement">预报结果管理</NavLink></Menu.Item>
                        <Menu.Item key="/prediction/forecastConfiguration"><NavLink to="/prediction/forecastConfiguration">自动预报配置</NavLink></Menu.Item>
                    </Menu.SubMenu>

                    <Menu.SubMenu key="settinglist" title={<span><Icon type="line-chart" /><span>配置列表</span></span>}>
                        <Menu.Item key="/settinglist/objectSetting/object"><NavLink to="/settinglist/objectSetting/object">对象配置</NavLink></Menu.Item>
                        <Menu.Item key="/settinglist/moduleSetting/func"><NavLink to="/settinglist/moduleSetting/func">模块配置</NavLink></Menu.Item>
                        <Menu.Item key="/settinglist/modelSetting/model"><NavLink to="/settinglist/modelSetting/model">模型配置</NavLink></Menu.Item>
                    </Menu.SubMenu>
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