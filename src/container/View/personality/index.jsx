import React, { Component } from "react";

import "./H5Resume/css/main.css";
import portrait1 from "./H5Resume/images/portrait1.jpg";

class personality extends Component {
  render() {
    return (
      <div style={{ height: "200%" }}>
        <section className="page_one" id="page1" style={{ height: "50%" }}>
          <div className="cen_con">
            <div className="portrait">
              <img src={portrait1} />
            </div>
            <div className="cen_text">
              <h2 style={{ color: "white", height: "unset" }}>
                夜深了，倦了，睡了，安安静静，做着甜蜜的梦，一座城市再喧闹，没你，便是空城
              </h2>
              <h4
                style={{
                  color: "white",
                  fontWeight: "normal",
                  height: "unset",
                }}
              >
                「 1010349053@nuanwa.net 」
              </h4>
              <hr />
              <h2
                style={{
                  color: "white",
                  height: "unset",
                  fontWeight: "normal",
                }}
              >
                枫林沐雨
              </h2>
              <h2 style={{ color: "white", height: "unset", marginTop: 10 }}>
                Web前端开发工程师
              </h2>
              <h3
                style={{
                  color: "white",
                  height: "unset",
                  marginTop: 10,
                  fontWeight: "normal",
                }}
              >
                江苏省 · 宿迁市
              </h3>
              <h3
                style={{
                  color: "white",
                  height: "unset",
                  marginTop: 10,
                  fontWeight: "normal",
                }}
              >
                1991
              </h3>
            </div>
          </div>
          <div className="down_arrow">
            <a className="scroll">
              <span></span>
            </a>
          </div>
        </section>

        <section className="page_two" id="page2" style={{ height: "50%" }}>
          <div className="con_wrap">
            <div className="tit_wrap">
              <h1>关于我</h1>
              <div className="scissors">
                <span></span>
              </div>
              <h2>
                {" "}
                如果debugging是一种消灭bug的过程,那编程就一定是把bug放进去的过程。
              </h2>
            </div>
            <div className="myinfo">
              <table>
                <tbody>
                  <tr>
                    <td rowSpan="6">
                      <img src={portrait1} />
                    </td>
                    <td>姓名 | 某某</td>
                    <td>手机 | 18********</td>
                  </tr>
                  <tr>
                    <td>性别 | 女</td>
                    <td>邮箱 | *****@qq.com</td>
                  </tr>
                  <tr>
                    <td>出生 | 1992.08.23</td>

                    <td>QQ号 | *******</td>
                  </tr>
                  <tr>
                    <td>居住 | 江苏省苏州市</td>
                    <td>户籍 | 江苏省常州市</td>
                  </tr>
                  <tr>
                    <td>学历 | 本科</td>
                    <td>学校 | **</td>
                  </tr>
                  <tr>
                    <td>专业 | 计算机科学与技术</td>
                    <td>英语 | 英语六级</td>
                  </tr>

                  <tr>
                    <td colSpan="3">
                      <p>项目：</p>
                      <br />
                      <a href="http://www.1-yd.com/">
                        1. 闻行一阅读（基于Amaze UI 查看网址：www.1-yd.com）
                      </a>
                      <br />
                      <a>
                        2.
                        中笕-汽车保养（基于Metronic的Bootstrap，内部项目，无法展示）
                      </a>
                      <br />
                      <br />
                      <p>
                        小作品
                        （查看网址：http://www.17sucai.com/boards/117475.html）
                      </p>
                      <br />
                      <a href="http://www.17sucai.com/boards/117475.html">
                        1. 手工皂（注：瀑布流本地没问题）{" "}
                      </a>
                      <a href="http://www.17sucai.com/boards/117475.html">
                        2. 个人主页{" "}
                      </a>
                      <a href="http://www.17sucai.com/boards/117475.html">
                        3. 手工皂{" "}
                      </a>
                      <br />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="down_arrow">
            <a className="scroll">
              <span></span>
            </a>
          </div>
        </section>
      </div>
    );
  }
}

export default personality;
