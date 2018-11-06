import React, { Component, Fragment } from "react";
import "./index.css";

export default class Footer extends Component {
  state = {
    year: null
  };
  componentDidMount() {
    let this_year = new Date().getFullYear();
    this.setState({
      year: this_year
    });
  }
  render() {
    return (
      <Fragment>
        <div className="footer">
          Copyright © {this.state.year} 329255122@qq.com All Rights Reserved.
        </div>
      </Fragment>
    );
  }
}
