import React, { Component } from "react";
import { Row, Col } from "antd";
import Utils from "src/utils/utils";
import axios from "src/axios";
import "./index.css";
export default class Header extends Component {
  state = {
    sysTime: ""
  };
  componentWillMount() {
    this.setState({
      userName: "陈小银"
    });
    this.setSecond = setInterval(() => {
      let sysTime = Utils.formateDate(new Date().getTime());
      this.setState({
        sysTime
      });
    }, 1000);
    this.getWeatherApiData();
  }

  componentWillUnmount() {
    clearInterval(this.setSecond);
  }

  // 百度天气
  getWeatherApiData = () => {
    let city = "杭州";
    axios
      .jsonp({
        url: `http://api.map.baidu.com/telematics/v3/weather?location=${encodeURIComponent(
          city
        )}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`
      })
      .then(res => {
        if (res.status === "success") {
          let data = res.results[0].weather_data[0];
          this.setState({
            city: res.results[0].currentCity,
            dayPic: data.dayPictureUrl,
            temperature: data.temperature
          });
        }
      });
  };

  render() {
    return (
      <div className="header">
        <Row className="header-top">
          <Col span="24">
            <span>
              欢迎,
              {this.state.userName}
            </span>
            <a href="/">退出</a>
          </Col>
        </Row>
        <Row className="breadcrumb">
          <Col span="4" className="breadcrumb-title">
            首页
          </Col>
          <Col span="20" className="weather">
            <span className="date">{this.state.sysTime}</span>
            <img className="weather-img" src={this.state.dayPic} alt="" />
            <span className="weather-detail">
              {this.state.city}
              &nbsp;&nbsp;
              {this.state.temperature}
            </span>
          </Col>
        </Row>
      </div>
    );
  }
}
