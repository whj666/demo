import React from "react";
import {Form, Button, Input, Select, InputNumber, AutoComplete} from 'antd';
import RightModal from "rightModal";

const FormItem = Form.Item;
const Option = Select.Option;

class NewTable extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            data: props.data,
            result: []
        }
    }

    componentDidMount(){
        
    }

    //确定保存
    handleOk(e){
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log(values);
            }
        })
    }

    //邮箱自动补全
    handleSearch(value){
        let result;
        if (!value || value.indexOf('@') >= 0) {
          result = [];
        } else {
          result = ['gmail.com', '163.com', 'qq.com'].map(domain => `${value}@${domain}`);
        }
        this.setState({ result });
    }
  
    render(){
        const formItemLayout = {
            labelCol: {
                xs: { span: 8 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 12 },
                sm: { span: 12 },
            }
        };

        const { result } = this.state;
        const children = result.map((email) => {
            return <Option key={email}>{email}</Option>;
        });

        return(
            <RightModal
                title="新建"
                width='40%'
                rightModalHandle={this.props.rightModalHandle}

                content={
                    <Form>
                        <FormItem
                            {...formItemLayout}
                            label='姓名'
                        >
                            {this.props.form.getFieldDecorator('name', {
                                initialValue: this.state.data.name || "",
                                rules: [{ required: true, message: "不能为空！" }]
                            })(
                                <Input placeholder="请输入" />
                            )}
                        </FormItem>

                        <FormItem
                            {...formItemLayout}
                            label='年龄'
                        >
                            {this.props.form.getFieldDecorator('age', {
                                initialValue:this.state.data.age || "",
                                rules: [{ required: true, message: "不能为空！" }]
                            })(
                                <InputNumber className="w100" placeholder="请输入" />
                            )}
                        </FormItem>

                        <FormItem
                            {...formItemLayout}
                            label='人设'
                        >
                            {this.props.form.getFieldDecorator('type', {
                                initialValue:this.state.data.type || [],
                                rules: [{ required: true, message: "不能为空！" }]
                            })(
                                <Select 
                                    showSearch
                                    placeholder="请输入"
                                    optionFilterProp="children"
                                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                >   
                                    <Option value="gfs">高富帅</Option>
                                    <Option value="bfm">白富美</Option>
                                    <Option value="cds">臭屌丝</Option>
                                </Select>
                            )}
                        </FormItem>

                        <FormItem
                            {...formItemLayout}
                            label='邮箱'
                        >
                            {this.props.form.getFieldDecorator('email', {
                                initialValue: this.state.data.email || "",
                                rules: [{ required: true, message: "不能为空！" }]
                            })(
                                <AutoComplete
                                    className="w100"
                                    onSearch={this.handleSearch.bind(this)}
                                    placeholder="请输入"
                                >
                                    {children}
                                </AutoComplete>
                            )}
                        </FormItem>
                    </Form>
                }

                footer={
                    <div className="fr di">
                        <Button className="mr10" type="primary" onClick={this.handleOk.bind(this)}>保存</Button>
                    </div>
                }
            />
        );
    }
}

const _NewTable = Form.create()(NewTable);
export default _NewTable