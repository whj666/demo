import React from "react";
import {Button} from 'antd';
import CollectionCreateForm from "./modal";
import Father from "./father";
import {postApi, getApi} from "api";
import {urls} from "urls";

//引入redux
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as ActionAll from '../actions/actionAll';

class Demo extends React.Component{
    constructor(){
        super();

        this.state = {
            visible: false,
            dataObj: {
                name:"王红金",
                code:"321323199105113317",
                sex:"男",
                hobby:""
            }
        };
    }

    componentDidMount(){
        this.props.actionAll.render({
            loading:false
        });
    }

    //对话框显示隐藏的控制代码
    showModal(){
        this.setState({visible: true});
    }

    //对话框-取消
    handleCancel(){
        this.setState({visible: false});
    }

    //对话框-提交
    handleCreate(){
        const form = this.formRef.props.form;
        form.validateFields((err, options) => {
            if(!err){
                //post接口
                postApi(options, urls.postApi, (res) => {
                    console.log(res);
                });
                
                //get接口
                getApi(options, urls.getApi, (res) => {
                    console.log(res);
                });
                
                //对话框初始化
                form.resetFields();

                this.setState({ 
                    visible: false,
                    dataObj: Object.assign(this.state.dataObj, options)
                });
            };
        });
    }

    //把对话框里面form对象挂在到this下面
    saveFormRef(_this){
        this.formRef = _this;
    }
  
    render(){
        return(
            <React.Fragment>
                <Button type="primary" onClick={this.showModal.bind(this)}>打开对话框</Button>

                <CollectionCreateForm
                    wrappedComponentRef={this.saveFormRef.bind(this)}
                    dataObj={this.state.dataObj}
                    visible={this.state.visible}
                    onCancel={this.handleCancel.bind(this)}
                    onCreate={this.handleCreate.bind(this)}
                />

                <Father />
            </React.Fragment>
        );
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
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Demo)