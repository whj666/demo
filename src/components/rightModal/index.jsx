import React from 'react';
import {createPortal} from 'react-dom';
import {Icon} from 'antd';
import "./style.less"

class RightModal extends React.Component {
    constructor(props) {
        super(props);
    }

    // 关闭窗口
    closeHandle(){
        this.props.rightModalHandle();
    }

    render(){
        const { title, content, footer } = this.props;
        const style = { width: this.props.width, zIndex: 999 }

        return createPortal(
            <div className="rightModal">
                <div className="right-modal-content" style={style}>
                    <div className="AddTop">
                        <h3>{title}</h3>
                        <Icon type="close" className="icon" onClick={this.closeHandle.bind(this)}></Icon>
                    </div>
                    <div className="AddContent" style={{ height: "calc(100% - 49px - 56px)"}}>
                        {content}
                    </div>
                    <div className="AddFooter">
                        {footer}
                    </div>
                </div>
            </div>,
            document.getElementById("root")
        )
    }
}

export default RightModal;