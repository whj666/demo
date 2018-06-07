import React from 'react'
import './style'

class NotFound extends React.Component{
    constructor(props) {
        super(props);
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

export default NotFound;