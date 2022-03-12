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
                「 wanghongjin@nuanwa.net 」
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

        <section className="page_two" id="page2" style={{ minHeight: "50%" }}>
          <div className="con_wrap">
            <div className="tit_wrap">
              <h1>About Me</h1>
              <div className="scissors">
                <span></span>
              </div>
            </div>
            <div className="myinfo">
              <table>
                <tbody>
                  <tr>
                    <td rowSpan="6">
                      <img src={portrait1} />
                    </td>
                    <td>姓名: 枫林沐雨</td>
                    <td>手机: 13301665895</td>
                  </tr>
                  <tr>
                    <td>性别: 男</td>
                    <td>邮箱: wanghongjin@nuanwa.net</td>
                  </tr>
                  <tr>
                    <td>出生: 1991-05-11</td>
                    <td>QQ号: 1010349053</td>
                  </tr>
                  <tr>
                    <td>居住: 上海市 浦东新区</td>
                    <td>户籍: 江苏省 宿迁市</td>
                  </tr>
                  <tr>
                    <td>学历: 本科</td>
                    <td>学校: 西安交通大学</td>
                  </tr>
                  <tr>
                    <td>专业: 计算机科学与技术</td>
                    <td>英语: 全国英语三级B</td>
                  </tr>
                </tbody>
              </table>

              <br></br>

              <table>
                <tbody>
                  <tr>
                    <td colSpan="3">
                      <p>自我介绍：</p>
                      <a>
                        你为了这个家，努力工作的样子，真的很帅！望一直这么坚持下去！咱们都是爸爸妈妈了，身上的责任重大，一起加油吧我的超人！让未来的你感谢现在努力拼搏的你！
                      </a>
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
