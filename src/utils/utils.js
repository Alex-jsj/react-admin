export default {
  // 输出格式化时间
  formateDate: (time = "") => {
    let date = new Date(time);
    return `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, 0)}-${date
      .getDay()
      .toString()
      .padStart(2, 0)} ${date
      .getHours()
      .toString()
      .padStart(2, 0)}:${date
      .getMinutes()
      .toString()
      .padStart(2, 0)}:${date
      .getSeconds()
      .toString()
      .padStart(2, 0)}`;
  }
  // 调用天气接口
};
