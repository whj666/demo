import React, { Component } from "react";

import Personality from "./personality";

class View extends Component {
  render() {
    return (
      <div style={{ height: "100%" }}>
        <Personality />
      </div>
    );
  }
}

export default View;
