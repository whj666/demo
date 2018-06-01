import React from "react";
import {Button} from 'antd';
import CollectionCreateForm from "./modal";
import Father from "./father";
import {testApi} from "api";

//引入redux
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as ActionAll from '../actions/actionAll';

class Demo extends React.Component {
  constructor(){
    super();

    this.test = <h1>hello world</h1>;
    this.state={
      visible: false,
      dataObj: {
        name:"王红金",
        code:"321323199105113317",
        sex:"男",
        hobby:""
      }
    }
  }

  showModal(){
    this.setState({ visible: true });
  }

  handleCancel() {
    this.setState({ visible: false });
  }

  handleCreate() {
    const form = this.formRef.props.form;
    form.validateFields((err, options) => {
      if(err){
        return;
      }

      testApi(options, (res) => {
      	console.log(res);
      });
      
//    form.resetFields();
//    this.setState({ 
//      visible: false,
//      dataObj: Object.assign(this.state.dataObj, values)
//    });
    });
  }

  saveFormRef(_this){
    this.formRef = _this;
  }

  componentDidMount(){
    this.props.actionAll.render({
      loading:false
    });
  }
  
  render() {
    return (
      <div>
        {this.test}
        <Button type="primary" onClick={this.showModal.bind(this)}>New Collection</Button>

        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef.bind(this)}
          dataObj={this.state.dataObj}
          visible={this.state.visible}
          onCancel={this.handleCancel.bind(this)}
          onCreate={this.handleCreate.bind(this)}
        />

        <Father />
      </div>
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