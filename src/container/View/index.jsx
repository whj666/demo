import React, { Component } from "react";

import Personality from "./personality";
import Formal from "./formal";

class View extends Component {
  render() {
    const { match } = this.props;
    const {
      params: { type, id },
    } = match;

    return (
      <div style={{ height: "100%" }}>
        {type === "1" ? <Personality /> : <Formal />}
      </div>
    );
  }
}

export default View;
