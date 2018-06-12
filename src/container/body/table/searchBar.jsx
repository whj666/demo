import React from "react";
import {Form, Button, Input, InputNumber} from 'antd';
import {postApi} from "api";
import {urls} from "urls";
import "./style"

const FormItem = Form.Item;

class SearchBar extends React.Component{
    constructor(props){
        super(props);

        this.state = {

        }
    }

    componentDidMount(){
    
    }

    //查询
    handleSubmit = () => {
        this.props.form.validateFieldsAndScroll((err, values) => {
            if(!err) {
                this.props.getTableData(Object.assign({}, {userName:localStorage.userName}, values));
            }
        });
    }

    //重置
    reset(){
        this.props.form.resetFields();
    }

    //新建
    new(){
        this.props.this.visibleHandle();
    }
  
    render(){
        return(
            <div className="searchBar oh">
                <Form className="fl" layout="inline">
                    <FormItem label='姓名' >
                        {this.props.form.getFieldDecorator('name', {
                            initialValue: ""
                        })(
                            <Input placeholder="请输入" />
                        )}
                    </FormItem>

                    <FormItem label='最小年龄' >
                        {this.props.form.getFieldDecorator('minAge', {
                            initialValue: ""
                        })(
                            <InputNumber placeholder="请输入" />
                        )}
                    </FormItem>

                    <FormItem label='最大年龄' >
                        {this.props.form.getFieldDecorator('maxAge', {
                            initialValue: ""
                        })(
                            <InputNumber placeholder="请输入" />
                        )}
                    </FormItem>

                    <FormItem>
                        <Button type="primary" onClick={this.handleSubmit}>查询</Button>
                        <Button className="ml10" onClick={this.reset.bind(this)}>重置</Button>
                    </FormItem>
                </Form>

                <Button className="fr" type="primary" onClick={this.new.bind(this)}>新建</Button>
            </div>
        );
    }
}

const _SearchBar = Form.create()(SearchBar);
export default _SearchBar