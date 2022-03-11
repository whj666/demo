import React, { Component } from "react";

class View extends Component {
  render() {
    const { match } = this.props;
    const {
      params: { type, id },
    } = match;

    return <div>hello world</div>;
  }
}

export default View;
