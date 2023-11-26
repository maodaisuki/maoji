// const { default: Axios } = require("axios");

// 云函数测试
Parse.Cloud.define('hello', req => {
  console.log("云函数测试")
  return "云函数测试成功";
});

Parse.Cloud.define("publicUserData", async (request) => {
  const username = request.params.username;
  const query = new Parse.Query("_User");
  query.equalTo("username", username);
  query.select(["username", "avatar"]);

  const result = await query.find({ useMasterKey: true });

  if (result) {
    return true
  } else {
    throw new Error("User not found");
  }
});