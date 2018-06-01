import React from "react";
import {Button} from 'antd';

class Child extends React.Component{
  constructor(){
    super();
    this.state = {
    	child:"儿子"
    }
  }
  
  action(){
  	//调用父级的方法
  	this.props.father.change();
  }
  
  change(){
  	//改变子组件state
    this.setState({
    	child:"假儿子"
    })
  }

  render() {
    return (
      <div>
      		<Button onClick={this.action.bind(this)}>调用父级的方法</Button>
      		<br />
          {this.state.child}
      </div>
    );
  }
}

export default Child;