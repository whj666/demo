import React from "react";
import {Modal, Form} from 'antd';
import "./style.less";

class ModalMoudle extends React.Component{
    render(){
        const {visible, title, onCancel, onCreate, content, width, height} = this.props;
        return(
            <Modal 
                className={`modalMoudle ${width} ${height}`} 
                wrapClassName="vertical-center-modal"
                visible={visible} 
                title={title} 
                onCancel={onCancel} 
                onOk={onCreate}
            >
                {content}
            </Modal>
        );
    }
}

export default ModalMoudle;