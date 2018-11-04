const menuList = [
  {
    title: "首页",
    path: "/home"
  },
  {
    title: "UI",
    path: "/ui",
    children: [
      {
        title: "按钮",
        path: "/ui/buttons"
      },
      {
        title: "弹框",
        path: "/ui/modals"
      },
      {
        title: "Loading",
        path: "/ui/loadings"
      },
      {
        title: "通知提醒",
        path: "/ui/notification"
      },
      {
        title: "全局Message",
        path: "/ui/messages"
      },
      {
        title: "Tab页签",
        path: "/ui/tabs"
      },
      {
        title: "图片画廊",
        path: "/ui/gallery"
      },
      {
        title: "轮播图",
        path: "/ui/carousel"
      }
    ]
  },
  {
    title: "表单",
    path: "/form",
    children: [
      {
        title: "登录",
        path: "/form/login"
      },
      {
        title: "注册",
        path: "/form/reg"
      }
    ]
  },
  {
    title: "表格",
    path: "/table",
    children: [
      {
        title: "基础表格",
        path: "/table/basic"
      },
      {
        title: "高级表格",
        path: "/table/high"
      }
    ]
  },
  {
    title: "富文本",
    path: "/rich"
  },
  {
    title: "城市管理",
    path: "/city"
  },
  {
    title: "订单管理",
    path: "/order",
    btnList: [
      {
        title: "订单详情",
        path: "detail"
      },
      {
        title: "结束订单",
        path: "finish"
      }
    ]
  },
  {
    title: "员工管理",
    path: "/user"
  },
  {
    title: "车辆地图",
    path: "/bikeMap"
  },
  {
    title: "图标",
    path: "/charts",
    children: [
      {
        title: "柱形图",
        path: "/charts/bar"
      },
      {
        title: "饼图",
        path: "/charts/pie"
      },
      {
        title: "折线图",
        path: "/charts/line"
      }
    ]
  },
  {
    title: "权限设置",
    path: "/permission"
  }
];
export default menuList;
