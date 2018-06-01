import React from 'react'
import './style'

//引入redux
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as ActionAll from '../actions/actionAll';

class NotFound extends React.Component{
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.actionAll.render({
			loading:false
		});
    }
    
    render() {
        return (
            <div className="error">
            	<div className="errorContent">
            		<div className="errorText">
            			<h1>ERROR</h1>
            			<p>可能存在原因：页面不存在、服务器错误！</p>
            		</div>
            	</div>
			</div>
        )
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
  )(NotFound);