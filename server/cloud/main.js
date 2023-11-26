// const { default: Axios } = require("axios");

// 云函数测试
Parse.Cloud.define('hello', req => {
  console.log("云函数测试")
  return "云函数测试成功";
});