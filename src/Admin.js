import React, { Component, Fragment } from "react";
import { Row, Col } from "antd";
import "./style/common.css";

import Header from "./components/header";
import Footer from "./components/footer";
import Nav from "./components/nav";

export default class Admin extends Component {
  render() {
    return (
      <Fragment>
        <Row className="container">
          <Col span="3" className="nav">
            <Nav />
          </Col>
          <Col span="21" className="main">
            <Header />
            <Row className="content">{this.props.children}</Row>
            <Footer />
          </Col>
        </Row>
      </Fragment>
    );
  }
}
