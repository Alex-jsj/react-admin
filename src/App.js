import React, { Component, Fragment } from "react";
import { Row, Col } from "antd";
import "./App.css";

import Header from "./components/header";
import Footer from "./components/footer";
import Nav from "./components/nav";

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <Row>
          <Col span="3">
            <Nav />
          </Col>
          <Col span="21">
            <Header />
            <Row>Content</Row>
            <Footer />
          </Col>
        </Row>
      </Fragment>
    );
  }
}
