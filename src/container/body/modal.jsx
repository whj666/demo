import React from "react";
import {Modal, Form, Input, InputNumber, Radio, Select} from 'antd';
const Option = Select.Option;

const CollectionCreateForm = Form.create()(
    class extends React.Component{

        //身份证校验
        checkPrice(rule, value, callback){
            if(value !== "" && Number.isInteger(value)){
                callback();
                return;
            };
            callback("请输入1-10的整数！");
        }

        render(){
            const {visible, onCancel, onCreate, form, dataObj} = this.props;
            const {getFieldDecorator} = form;
            let {name, code, sex, hobby, skill} = dataObj;
            const formItemLayout = {
                labelCol: {span: 6},
                wrapperCol: {span: 16}
            };

            return(
                <Modal visible={visible} title="表单" onCancel={onCancel} onOk={onCreate}>
                    <Form layout="horizontal">
                        <Form.Item label="姓名" {...formItemLayout}>
                            {getFieldDecorator('name', {
                                rules: [{required: true, message: '不能为空'}],
                                initialValue: name
                            })(
                                <Input />
                            )}
                        </Form.Item>

                        <Form.Item label="身份证号码" {...formItemLayout}>
                            {getFieldDecorator('code', {
                                rules: [{validator: this.checkPrice}],
                                initialValue: code
                            })(
                                <InputNumber style={{width: "100%"}} />
                            )}
                        </Form.Item>

                        <Form.Item label="性别" {...formItemLayout}>
                            {getFieldDecorator('sex', {
                                rules: [{required: true, message: '必选'}],
                                initialValue: sex
                            })(
                                <Radio.Group>
                                    <Radio value="男">男</Radio>
                                    <Radio value="女">女</Radio>
                                </Radio.Group>
                            )}
                        </Form.Item>
                        
                        <Form.Item label="爱好" {...formItemLayout}>
                            {getFieldDecorator('hobby', {
                                initialValue: hobby
                            })(
                                <Select
                                    showSearch
                                    optionFilterProp="children"
                                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                >
                                    <Option value="">请选择</Option>
                                    <Option value="上网">上网</Option>
                                    <Option value="睡觉">睡觉</Option>
                                    <Option value="学习" disabled>学习</Option>
                                </Select>
                            )}
                        </Form.Item>
                        
                        <Form.Item label="技能" {...formItemLayout}>
                            {getFieldDecorator('skill', {
                                initialValue: skill
                            })(
                                <Select mode="multiple" placeholder="请选择">
                                    <Option value="天雷破">天雷破</Option>
                                    <Option value="金钟罩">金钟罩</Option>
                                    <Option value="铁布衫">铁布衫</Option>
                                    <Option value="神龙摆尾">神龙摆尾</Option>
                                </Select>
                            )}
                        </Form.Item>
                    </Form>
                </Modal>
            );
        }
    }
);

export default CollectionCreateForm;