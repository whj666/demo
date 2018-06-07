import React from 'react'
import './style.less'
import {Icon, Breadcrumb} from 'antd'

class Top extends React.Component{
    constructor(props){
        super();
    }

    render(){
        return(
        	<div className="topBox">
                <div className="topBox-nav cb">
                    <div className="icon fl">
                        <Icon type="menu-fold" />
                    </div>

                    <div className="fl f16 systemName">CMS SYSTEM</div>

                    <div className="fr">
                        <Icon type="logout" />
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

export default Top