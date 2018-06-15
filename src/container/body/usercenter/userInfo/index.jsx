import React from "react";
import {Form, Input, Radio, DatePicker, Cascader, AutoComplete, Switch} from 'antd';
import moment from 'moment';
import {postApi} from "api";
import {urls} from "urls";
import "./style.less";

const {TextArea} = Input;
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;
const Option = AutoComplete.Option;

const options = [{
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }]
}];

class UserInfo extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            result: []
        }
    }

    componentDidMount(){
        
    }

    //生日不可选择的日期
    disabledDate = (current) => {
        return current && current > moment().endOf('day');
    }

    //邮箱自动补全
    handleSearch = value => {
        let result;
        if (!value || value.indexOf('@') >= 0) {
          result = [];
        } else {
          result = ['gmail.com', '163.com', 'qq.com'].map(domain => `${value}@${domain}`);
        }
        this.setState({ result });
    }

    render(){
        const { result } = this.state;
        const children = result.map((email) => {
            return <Option key={email}>{email}</Option>;
        });

        const formItemLayout = {
            labelCol: {
                xs: { span: 3 },
                sm: { span: 3 },
            },
            wrapperCol: {
                xs: { span: 18 },
                sm: { span: 18 },
            }
        };

        return(
            <div className="userInfo">
                <Form className="form">
                    <FormItem label='昵称' {...formItemLayout} >
                        {this.props.form.getFieldDecorator('name', {
                            initialValue: ""
                        })(
                            <Input placeholder="请输入" />
                        )}
                    </FormItem>

                    <FormItem label='性别' {...formItemLayout} >
                        {this.props.form.getFieldDecorator('sex', {
                            initialValue: ""
                        })(
                            <RadioGroup>
                                <Radio value="男">男</Radio>
                                <Radio value="女">女</Radio>
                                <Radio value="保密">保密</Radio>
                            </RadioGroup>
                        )}
                    </FormItem>

                    <FormItem label='出生日期' {...formItemLayout} >
                        {this.props.form.getFieldDecorator('birthday', {
                            initialValue: null
                        })(
                            <DatePicker showToday={false} disabledDate={this.disabledDate} />
                        )}
                    </FormItem>

                    <FormItem label='公开年龄' {...formItemLayout} >
                        {this.props.form.getFieldDecorator('showAge', {
                            valuePropName: 'checked',
                            initialValue: true
                        })(
                            <Switch checkedChildren="开" unCheckedChildren="关" />
                        )}
                    </FormItem>

                    <FormItem label='婚姻' {...formItemLayout} >
                        {this.props.form.getFieldDecorator('marriage', {
                            initialValue: ""
                        })(
                            <RadioGroup>
                                <RadioButton value="未婚">未婚</RadioButton>
                                <RadioButton value="已婚">已婚</RadioButton>
                                <RadioButton value="离异">离异</RadioButton>
                                <RadioButton value="丧偶">丧偶</RadioButton>
                            </RadioGroup>
                        )}
                    </FormItem>

                    <FormItem label='家乡' {...formItemLayout} >
                        {this.props.form.getFieldDecorator('Hometown', {
                            initialValue: []
                        })(
                            <Cascader options={options} placeholder="请选择" />
                        )}
                    </FormItem>

                    <FormItem {...formItemLayout} label='邮箱' >
                        {this.props.form.getFieldDecorator('email', {
                            initialValue: "",
                            rules: [{ required: true, message: "不能为空！" }]
                        })(
                            <AutoComplete
                                className="w100"
                                onSearch={this.handleSearch}
                                placeholder="请输入"
                            >
                                {children}
                            </AutoComplete>
                        )}
                    </FormItem>

                    <FormItem {...formItemLayout} label='个性签名' >
                        {this.props.form.getFieldDecorator('personalitySignature', {
                            initialValue: ""
                        })(
                            <TextArea rows={4} placeholder="请输入" />
                        )}
                    </FormItem>
                </Form>
            </div>
        );
    }
}

export default Form.create()(UserInfo)