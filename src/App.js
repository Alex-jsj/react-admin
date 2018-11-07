import React, { Component, Fragment } from "react";
import "./style/common.css";

export default class App extends Component {
  render() {
    return <Fragment>{this.props.children}</Fragment>;
  }
}
