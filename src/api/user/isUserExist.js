import store from "../../store";

export async function isUserExist(username) {
  const Parse = store.state.parseObject;
  let query = new Parse.Query(Parse.User);
  query.equalTo("username", username);
  try {
    const result = await query.first();
    console.log("用户存在");
    return result != null; // 如果查询结果不为空，则用户存在
  } catch (e) {
    console.log(e.message);
    return false;
  }
}