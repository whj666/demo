import React from "react";
import {Form, Button, Input, Select} from 'antd';
import {postApi} from "api";
import {urls} from "urls";
import "./style"

const FormItem = Form.Item;
const Option = Select.Option;

class SearchBar extends React.Component{
    constructor(props){
        super(props);

        this.state = {

        }
    }

    componentDidMount(){
    
    }

    //查询
    handleSubmit(e){
        e.preventDefault();

        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log(values);
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
                <Form className="fl" layout="inline" onSubmit={this.handleSubmit.bind(this)}>
                    <FormItem label='姓名' >
                        {this.props.form.getFieldDecorator('name', {
                            initialValue: ""
                        })(
                            <Input placeholder="请输入" />
                        )}
                    </FormItem>

                    <FormItem label='人设' >
                        {this.props.form.getFieldDecorator('type', {
                            initialValue: []
                        })(
                            <Select placeholder="请输入" style={{ width: 174 }}>
                                <Option value="高富帅">高富帅</Option>
                                <Option value="白富美">白富美</Option>
                                <Option value="臭屌丝">臭屌丝</Option>
                            </Select>
                        )}
                    </FormItem>

                    <FormItem>
                        <Button type="primary" htmlType="submit">查询</Button>
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