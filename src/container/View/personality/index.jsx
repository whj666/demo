import React, { Component } from "react";

import "./H5Resume/css/main.css";

class personality extends Component {
  render() {
    const queryFormData = decodeURIComponent(
      window.location.href.split("queryFormData=")[1]
    );
    const {
      name,
      sex,
      birthday,
      occupation,
      education,
      email,
      school,
      phoneNumber,
      qqNumber,
      personalitySignature,
      major,
      english,
      introduce,
      imageCode,
      Hometown,
      currentHome,
    } = JSON.parse(queryFormData);

    return (
      <div style={{ height: "200%" }}>
        <div style={{ position: "fixed", right: 0, top: 0 }}>
          <iframe
            allow="autoplay"
            frameborder="no"
            border="0"
            marginwidth="0"
            marginheight="0"
            width="330"
            height="86"
            src="//music.163.com/outchain/player?type=2&id=36990266&auto=1&height=66"
          ></iframe>
        </div>

        <section className="page_one" id="page1" style={{ height: "50%" }}>
          <div className="cen_con">
            <div className="portrait">
              <img
                src={`http://localhost:8080/resources/images/${imageCode}`}
              />
            </div>
            <div className="cen_text">
              <h2 style={{ color: "white", height: "unset" }}>
                {personalitySignature}
              </h2>
              <h4
                style={{
                  color: "white",
                  fontWeight: "normal",
                  height: "unset",
                }}
              >
                「 {email} 」
              </h4>
              <hr />
              <h2
                style={{
                  color: "white",
                  height: "unset",
                  fontWeight: "normal",
                }}
              >
                {name}
              </h2>
              <h2 style={{ color: "white", height: "unset", marginTop: 10 }}>
                {occupation}
              </h2>
              <h3
                style={{
                  color: "white",
                  height: "unset",
                  marginTop: 10,
                  fontWeight: "normal",
                }}
              >
                {Hometown.join(" ")}
              </h3>
              <h3
                style={{
                  color: "white",
                  height: "unset",
                  marginTop: 10,
                  fontWeight: "normal",
                }}
              >
                {birthday}
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
                      <img
                        src={`http://localhost:8080/resources/images/${imageCode}`}
                      />
                    </td>
                    <td>姓名: {name}</td>
                    <td>手机: {phoneNumber}</td>
                  </tr>
                  <tr>
                    <td>性别: {sex}</td>
                    <td>邮箱: {email}</td>
                  </tr>
                  <tr>
                    <td>出生: {birthday}</td>
                    <td>QQ号: {qqNumber}</td>
                  </tr>
                  <tr>
                    <td>居住: {currentHome.join(" ")}</td>
                    <td>户籍: {Hometown.join(" ")}</td>
                  </tr>
                  <tr>
                    <td>学历: {education}</td>
                    <td>学校: {school}</td>
                  </tr>
                  <tr>
                    <td>专业: {major}</td>
                    <td>英语: {english}</td>
                  </tr>
                </tbody>
              </table>

              <br></br>

              <table>
                <tbody>
                  <tr>
                    <td colSpan="3">
                      <p>自我介绍：</p>
                      <a>{introduce}</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default personality;
