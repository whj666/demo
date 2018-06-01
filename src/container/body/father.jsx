import React from "react";
import Child from "./child";
import {Button} from 'antd';

class Father extends React.Component{
  constructor(){
    super();
    this.state={
    	father:"爸爸"
    }
  }

  action(){
  	//调用子级的方法
    this.ref.change();
  }
  
  change(){
  	//改变父组件state
    this.setState({
    	father:"喜当爹"
    })
  }

  render() {
    return (
      <div>
          <Button onClick={this.action.bind(this)}>调用子级的方法</Button>
          <br />
          {this.state.father}
          <Child father={this} ref={ref => {this.ref = ref}} />
      </div>
    );
  }
}

export default Father;