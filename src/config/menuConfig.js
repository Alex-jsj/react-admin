const menuList = [
  {
    title: "首页",
    path: "/admin/home"
  },
  {
    title: "UI",
    path: "/admin/ui",
    children: [
      {
        title: "按钮",
        path: "/admin/ui/buttons"
      },
      {
        title: "弹框",
        path: "/admin/ui/modals"
      },
      {
        title: "Loading",
        path: "/admin/ui/loadings"
      },
      {
        title: "通知提醒",
        path: "/admin/ui/notification"
      },
      {
        title: "全局Message",
        path: "/admin/ui/messages"
      },
      {
        title: "Tab页签",
        path: "/admin/ui/tabs"
      },
      {
        title: "图片画廊",
        path: "/admin/ui/gallery"
      },
      {
        title: "轮播图",
        path: "/admin/ui/carousel"
      }
    ]
  },
  {
    title: "表单",
    path: "/admin/form",
    children: [
      {
        title: "登录",
        path: "/admin/form/login"
      },
      {
        title: "注册",
        path: "/admin/form/reg"
      }
    ]
  },
  {
    title: "表格",
    path: "/admin/table",
    children: [
      {
        title: "基础表格",
        path: "/admin/table/basic"
      },
      {
        title: "高级表格",
        path: "/admin/table/high"
      }
    ]
  },
  {
    title: "富文本",
    path: "/admin/rich"
  },
  {
    title: "城市管理",
    path: "/admin/city"
  },
  {
    title: "订单管理",
    path: "/admin/order",
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
    path: "/admin/user"
  },
  {
    title: "车辆地图",
    path: "/admin/bikeMap"
  },
  {
    title: "图标",
    path: "/admin/charts",
    children: [
      {
        title: "柱形图",
        path: "/admin/charts/bar"
      },
      {
        title: "饼图",
        path: "/admin/charts/pie"
      },
      {
        title: "折线图",
        path: "/admin/charts/line"
      }
    ]
  },
  {
    title: "权限设置",
    path: "/admin/permission"
  }
];
export default menuList;
