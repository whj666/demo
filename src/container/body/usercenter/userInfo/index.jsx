import React from "react";
import {
  Form,
  Input,
  Radio,
  DatePicker,
  Cascader,
  AutoComplete,
  Switch,
  Select,
  Slider,
  Button,
  Upload,
  Icon,
  Message,
} from "antd";
import moment from "moment";
import { postApi } from "api";
import { urls } from "urls";
import "./style.less";
import cascaderAddressOptions from "cascaderAddressOptions";
import { getTimeValue } from "public";

//引入redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionAll from "actionAll";

const { TextArea } = Input;
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;
const Option = AutoComplete.Option;

//省市区数据
const options = [
  {
    value: "jiangsu",
    label: "Jiangsu",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua Men",
          },
        ],
      },
    ],
  },
];

//滑动选择栏数据
const marks = {
  0: "0",
  10: "10",
  20: "20",
  30: "30",
  40: "40",
  50: "50",
};

//把图片转化为base64
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

//上传图片前的校验
function beforeUpload(file) {
  const isJPG = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJPG) {
    Message.error("只能上传格式为jpg或者png的图片！");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    Message.error("图片大小不能超过2M！");
  }
  return isJPG && isLt2M;
}

class UserInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageUrl: null,
      imageCode: null,
      userPhotoReady: false,
      result: [],
    };
  }

  componentDidMount() {
    this.getUserPhoto();
    this.getUserInfo();
  }

  //获取用户信息
  getUserInfo = () => {
    postApi({ userName: localStorage.userName }, urls.getUserInfo, (res) => {
      if (res.data) {
        this.props.form.setFieldsValue({
          name: res.data.name,
          sex: res.data.sex,
          birthday:
            res.data.birthday === ""
              ? null
              : moment(
                  getTimeValue(Number(res.data.birthday), "yyyy-mm-dd"),
                  "YYYY/MM/DD"
                ),
          showAge: res.data.showAge,
          marriage: res.data.marriage,
          job: res.data.job === "" ? [] : res.data.job,
          occupation: res.data.occupation,
          workAge: res.data.workAge,
          Hometown: res.data.Hometown,
          education: res.data.education,
          currentHome: res.data.currentHome,
          email: res.data.email,
          school: res.data.school,
          phoneNumber: res.data.phoneNumber,
          qqNumber: res.data.qqNumber,
          personalitySignature: res.data.personalitySignature,
          major: res.data.major,
          english: res.data.english,
          introduce: res.data.introduce,
        });
      }
    });
  };

  //获取用户头像
  getUserPhoto = () => {
    postApi({ userName: localStorage.userName }, urls.getUserPhoto, (res) => {
      if (res.data) {
        this.setState({
          imageCode: res.data,
          imageUrl: "http://localhost:8080/resources/images/" + res.data,
        });
      }

      this.setState({
        userPhotoReady: true,
      });
    });
  };

  //生日不可选择的日期
  disabledDate = (current) => {
    return current && current > moment().endOf("day");
  };

  //邮箱自动补全
  handleSearch = (value) => {
    let result;
    if (!value || value.indexOf("@") >= 0) {
      result = [];
    } else {
      result = ["gmail.com", "163.com", "qq.com"].map(
        (domain) => `${value}@${domain}`
      );
    }
    this.setState({ result });
  };

  //提交
  handleSubmit = () => {
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!values.birthday) {
        values.birthday = "";
      } else {
        values.birthday = values.birthday.valueOf().toString();
      }
      values.job = values.job.toString();
      if (!err) {
        postApi(
          { userName: localStorage.userName, ...values },
          urls.setUserInfo,
          (res) => {
            Message.success(res.message);
          }
        );
      }
    });
  };

  //图片上传
  handleChange = (info) => {
    if (info.file.status === "uploading") {
      return false;
    }

    if (info.file.status === "done") {
      getBase64(info.file.originFileObj, (imageUrl) => {
        this.setState(
          {
            imageUrl,
          },
          () => {
            this.props.stateAll.common.getUserPhoto();
          }
        );
      });
    }
  };

  //预览
  handleView = () => {
    const queryFormData = this.props.form.getFieldsValue();
    queryFormData.imageCode = this.state.imageCode || "34560006";
    queryFormData.birthday =
      queryFormData.birthday &&
      moment(queryFormData.birthday).format("YYYY-MM-DD");

    this.props.history.push(
      `/view?queryFormData=${JSON.stringify(queryFormData)}`
    );
  };

  render() {
    const { result } = this.state;
    const children = result.map((email) => {
      return <Option key={email}>{email}</Option>;
    });

    const formItemLayout = {
      labelCol: {
        xs: { span: 4 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 16 },
        sm: { span: 16 },
      },
    };

    return (
      <div className="userInfo cb">
        <Form className="form fl">
          <FormItem label="昵称" {...formItemLayout}>
            {this.props.form.getFieldDecorator("name", {
              rules: [{ required: true, message: "不能为空！" }],
              initialValue: "",
            })(<Input placeholder="请输入" />)}
          </FormItem>

          <FormItem label="性别" {...formItemLayout}>
            {this.props.form.getFieldDecorator("sex", {
              initialValue: "",
            })(
              <RadioGroup>
                <Radio value="男">男</Radio>
                <Radio value="女">女</Radio>
              </RadioGroup>
            )}
          </FormItem>

          <FormItem label="出生日期" {...formItemLayout}>
            {this.props.form.getFieldDecorator("birthday", {
              initialValue: null,
            })(
              <DatePicker showToday={false} disabledDate={this.disabledDate} />
            )}
          </FormItem>

          <FormItem label="公开年龄" {...formItemLayout}>
            {this.props.form.getFieldDecorator("showAge", {
              valuePropName: "checked",
              initialValue: true,
            })(<Switch checkedChildren="开" unCheckedChildren="关" />)}
          </FormItem>

          <FormItem label="婚姻" {...formItemLayout}>
            {this.props.form.getFieldDecorator("marriage", {
              initialValue: "",
            })(
              <RadioGroup>
                <RadioButton value="未婚">未婚</RadioButton>
                <RadioButton value="已婚">已婚</RadioButton>
                <RadioButton value="离异">离异</RadioButton>
                <RadioButton value="丧偶">丧偶</RadioButton>
              </RadioGroup>
            )}
          </FormItem>

          <FormItem label="行业" {...formItemLayout}>
            {this.props.form.getFieldDecorator("job", {
              initialValue: [],
            })(
              <Select placeholder="请选择">
                <Option value="计算机/互联网/通信">计算机/互联网/通信</Option>
                <Option value="生产/工艺/制造">生产/工艺/制造</Option>
                <Option value="医疗/护理/制药">医疗/护理/制药</Option>
                <Option value="金融/银行/投资/保险">金融/银行/投资/保险</Option>

                <Option value="商业/服务业/个体经营">
                  商业/服务业/个体经营
                </Option>
                <Option value="文化/广告/传媒">文化/广告/传媒</Option>
                <Option value="娱乐/艺术/表演">娱乐/艺术/表演</Option>
                <Option value="律师/法务">律师/法务</Option>

                <Option value="教育/培训">教育/培训</Option>
                <Option value="公务员/行政/事业单位">
                  公务员/行政/事业单位
                </Option>
                <Option value="学生">学生</Option>
                <Option value="其他">其他</Option>
              </Select>
            )}
          </FormItem>

          <FormItem label="职业" {...formItemLayout}>
            {this.props.form.getFieldDecorator("occupation")(
              <Input placeholder="请输入" />
            )}
          </FormItem>

          <FormItem label="工龄（年）" {...formItemLayout}>
            {this.props.form.getFieldDecorator("workAge", {
              initialValue: 0,
            })(<Slider marks={marks} max={50} />)}
          </FormItem>

          <FormItem label="家乡" {...formItemLayout}>
            {this.props.form.getFieldDecorator("Hometown", {
              initialValue: [],
            })(
              <Cascader options={cascaderAddressOptions} placeholder="请选择" />
            )}
          </FormItem>

          <FormItem label="居住地" {...formItemLayout}>
            {this.props.form.getFieldDecorator("currentHome", {
              initialValue: [],
            })(
              <Cascader options={cascaderAddressOptions} placeholder="请选择" />
            )}
          </FormItem>

          <FormItem label="学历" {...formItemLayout}>
            {this.props.form.getFieldDecorator("education", {
              initialValue: "",
            })(<Input placeholder="请输入" />)}
          </FormItem>

          <FormItem label="专业" {...formItemLayout}>
            {this.props.form.getFieldDecorator("major", {
              initialValue: "",
            })(<Input placeholder="请输入" />)}
          </FormItem>

          <FormItem label="英语" {...formItemLayout}>
            {this.props.form.getFieldDecorator("english", {
              initialValue: "",
            })(<Input placeholder="请输入" />)}
          </FormItem>

          <FormItem label="学校" {...formItemLayout}>
            {this.props.form.getFieldDecorator("school", {
              initialValue: "",
            })(<Input placeholder="请输入" />)}
          </FormItem>

          <FormItem {...formItemLayout} label="邮箱">
            {this.props.form.getFieldDecorator("email", {
              initialValue: "",
              rules: [{ required: true, message: "不能为空！" }],
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

          <FormItem {...formItemLayout} label="手机">
            {this.props.form.getFieldDecorator("phoneNumber", {
              initialValue: "",
            })(<Input placeholder="请输入" />)}
          </FormItem>

          <FormItem {...formItemLayout} label="QQ号">
            {this.props.form.getFieldDecorator("qqNumber", {
              initialValue: "",
            })(<Input placeholder="请输入" />)}
          </FormItem>

          <FormItem {...formItemLayout} label="自我介绍">
            {this.props.form.getFieldDecorator("introduce", {
              initialValue: "",
            })(<TextArea rows={3} placeholder="请输入" />)}
          </FormItem>

          <FormItem {...formItemLayout} label="个性签名">
            {this.props.form.getFieldDecorator("personalitySignature", {
              initialValue: "",
            })(<TextArea rows={3} placeholder="请输入" />)}
          </FormItem>

          <FormItem
            wrapperCol={{
              xs: { span: 16, offset: 4 },
              sm: { span: 16, offset: 4 },
            }}
          >
            <Button
              onClick={() => {
                this.props.form.resetFields();
              }}
            >
              重置
            </Button>

            <Button className="ml10" type="primary" onClick={this.handleSubmit}>
              确定
            </Button>

            <Button className="ml10" type="primary" onClick={this.handleView}>
              预览
            </Button>
          </FormItem>
        </Form>

        <div className="photoBox tac fl">
          {this.state.userPhotoReady ? (
            <img
              className="showImg mb10"
              src={
                !this.state.imageUrl
                  ? "http://localhost:8080/resources/images/34560006.png"
                  : this.state.imageUrl
              }
            />
          ) : (
            <div className="showImg mb10 imgOccupy"></div>
          )}
          <br />
          <Upload
            name={localStorage.userName}
            showUploadList={false}
            action={urls.uploadUserPhoto}
            beforeUpload={beforeUpload}
            onChange={this.handleChange}
          >
            <Button className="dib mt10">更换头像</Button>
          </Upload>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    stateAll: state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actionAll: bindActionCreators(actionAll, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form.create()(UserInfo));
