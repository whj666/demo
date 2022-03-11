import React from "react";
import { Form, Button, Input, Popconfirm, Table, Divider, Message } from "antd";
import QueueAnim from "rc-queue-anim";
import { getApi, postApi } from "api";
import { urls } from "urls";
import SearchBar from "./searchBar";
import RightModal from "rightModal";
import NewTable from "./newTable";
import { getViewPort } from "public";

class Curd extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      height: getViewPort().height,
      visible: false,
      total: null,
      curren: 1,
      pageSize: 20,
      modal: {
        name: null,
        type: null,
        email: null,
      },
      columns: [
        {
          title: "简历名称",
          dataIndex: "name",
          width: "20%",
        },
        {
          title: "简历类型",
          dataIndex: "type",
          width: "20%",
          filters: [
            {
              text: "个性化",
              value: "1",
            },
            {
              text: "正式",
              value: "2",
            },
          ],
          onFilter: (value, record) => record.type.indexOf(value) === 0,
          render: (text) => (text === "1" ? "个性化" : "正式"),
        },
        {
          title: "创建时间",
          dataIndex: "email",
          width: "20%",
        },
        {
          title: "操作",
          dataIndex: "operation",
          width: "20%",
          render: (text, record) => (
            <span>
              <a href="javascript:void(0);" onClick={() => this.edit(record)}>
                编辑
              </a>
              <Divider type="vertical" />
              <Popconfirm
                title="是否确定删除"
                onConfirm={() => this.delete(record)}
              >
                <a href="javascript:void(0);">删除</a>
              </Popconfirm>
            </span>
          ),
        },
      ],
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleHeight);
    this.ref.handleSubmit();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleHeight);
  }

  //删除数据
  delete = (record) => {
    postApi({ _id: record._id }, urls.deleteTableData, (res) => {
      this.ref.handleSubmit();
      Message.success(res.message);
    });
  };

  //查询数据
  getTableData(option) {
    getApi(option, urls.getTableData, (res) => {
      let tableData = [];
      if (res.data) {
        let userList = res.data;
        for (let i in userList) {
          tableData.push({
            key: i,
            name: userList[i].name,
            type: userList[i].type,
            email: userList[i].email,
            _id: userList[i]._id,
          });
        }
      }

      this.setState({
        tableData,
      });
    });
  }

  //获取浏览器高度
  handleHeight = () => {
    this.setState({
      height: getViewPort().height,
    });
  };

  //控制弹框是否显示
  visibleHandle(id) {
    if (!id) {
      this.setState({
        modal: Object.assign({}, { name: null, type: null, email: null }),
      });
    }

    this.setState({
      visible: !this.state.visible,
    });
  }

  //表格事件处理
  handleTableChange(pagination, filters, sorter) {
    this.setState({
      curren: pagination.current,
    });
  }

  //分页跳转
  onShowSizeChange(current, pageSize) {
    this.setState({
      pageSize,
    });
  }

  //编辑
  edit(record) {
    let { name, type, email, _id } = record;
    this.setState(
      {
        modal: Object.assign({}, { name, type, email, _id }),
      },
      () => {
        this.visibleHandle(_id);
      }
    );
  }

  render() {
    return (
      <div className="tableMoudel h100">
        <SearchBar
          wrappedComponentRef={(ref) => {
            this.ref = ref;
          }}
          getTableData={this.getTableData.bind(this)}
          this={this}
        />

        <Table
          className="mt10"
          columns={this.state.columns}
          dataSource={this.state.tableData}
          onChange={this.handleTableChange.bind(this)}
          size="middle"
          scroll={{ y: this.state.height - 93 - 162 }}
          pagination={{
            showSizeChanger: true,
            showQuickJumper: true,
            size: "small",
            total: this.state.total,
            current: this.state.curren,
            pageSize: this.state.pageSize,
            onShowSizeChange: this.onShowSizeChange.bind(this),
          }}
        />

        <QueueAnim className="demo-content">
          {this.state.visible && (
            <NewTable
              key="NewTable"
              rightModalHandle={this.visibleHandle.bind(this)}
              getTableData={this.ref.handleSubmit}
              data={this.state.modal}
            />
          )}
        </QueueAnim>
      </div>
    );
  }
}

export default Curd;
