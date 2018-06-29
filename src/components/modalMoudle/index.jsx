import React from "react";
import {Modal, Form} from 'antd';
import "./style.less";
import $ from "jquery";

class ModalMoudle extends React.Component{
    constructor(props){
        super(props);

        this.x = 0;
        this.y = 0;
        this.l = 0;
        this.t = 0;
        this.isDown = false;
    }

    componentDidMount(){
        window.addEventListener('mouseup', this.checkRandom);
    }

    componentWillUnmount(){
        window.onmousemove = undefined;
        window.removeEventListener('mouseup', this.checkRandom);
    }

    //判断是否超出屏幕
    checkRandom = (e) => {
        if(e.clientX > window.innerWidth || e.clientX < 0 || e.clientY < 0 || e.clientY > window.innerHeight){
            this.onMouseUp();
        }
    }

    //鼠标按下事件
    onMouseDown = e => {
        this.move = e.target;
        this.movebg = $(this.move).next();
        this.node = $(this.move).closest('.modalMoudle');
        this.movebg.removeClass("none");
        window.onmousemove = this.handleMousemove;

        //获取x坐标和y坐标
        this.x = e.clientX;
        this.y = e.clientY;

        //获取左部和顶部的偏移量
        this.l = this.node.offset().left;
        this.t = this.node.offset().top;

        //开关打开
        this.isDown = true;
    }

    //鼠标抬起事件
    onMouseUp = () => {
        //开关关闭
        this.movebg.addClass("none");
        this.isDown = false;
        window.onmousemove = undefined;
    }

    //鼠标移动事件
    handleMousemove = (e) => {
        if(!this.isDown){
            return false;
        };

        //获取x和y
        var nx = e.clientX;
        var ny = e.clientY;
        
        //计算移动后的左偏移量和顶部的偏移量
        var {x, y, l, t} = this;
        var minWidth = 100 - this.move.clientWidth;

        var nl = nx - (x - l) > minWidth ? nx - (x - l) : minWidth;
        var nt = ny - (y - t) > 0 ? ny - (y - t) : 0;
        nl = nl > window.innerWidth - 100 ? window.innerWidth - 100 : nl;
        nt = nt > window.innerHeight - 49 ? window.innerHeight - 49 : nt;

        this.node.css({left: 100*nl/window.innerWidth + "%"});
        this.node.css({top: 100*nt/window.innerHeight + "%"});
    }

    render(){
        const {visible, title, onCancel, onOk, content, width, height} = this.props;
        
        return(
            <Modal 
                className={`modalMoudle ${width} ${height}`} 
                visible={visible} 
                title={title} 
                onCancel={onCancel} 
                onOk={onOk}
                destroyOnClose={true}
                mask={false}
            >
                <div 
                    className="move w100 pa" 
                    onMouseDown = {this.onMouseDown}
                />

                <div 
                    className="movebg none pf w100 h100" 
                    onMouseUp = {this.onMouseUp} 
                />
                {content}
            </Modal>
        );
    }
}

export default ModalMoudle;