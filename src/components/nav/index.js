import React, { Component, Fragment } from "react";
import { Menu } from "antd";
import "./index.css";
import menuConfig from "../../config/menuConfig";

const SubMenu = Menu.SubMenu;

export default class Nav extends Component {
  componentWillMount() {
    const menuTreeNode = this.renderMenu(menuConfig);

    this.setState({
      menuTreeNode
    });
  }

  // 菜单渲染
  renderMenu = data => {
    return data.map(item => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.path}>
            {this.renderMenu(item.children)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item title={item.title} key={item.path}>
          {item.title}
        </Menu.Item>
      );
    });
  };

  render() {
    return (
      <Fragment>
        <div className="logo">
          <img className="logo-img" src="/assets/logo.svg" alt="logo" />
          <p className="logo-text">React-Admin</p>
        </div>
        <Menu theme="dark">{this.state.menuTreeNode}</Menu>
      </Fragment>
    );
  }
}
