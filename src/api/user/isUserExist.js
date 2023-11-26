import store from "../../store";
import { handleParseError } from '../../utils/handleParseError';

// TODO 解决当用户未登录时，判断用户是否存在
// 目前不跳转 404
export async function isUserExist(username) {
  const Parse = store.state.parseObject;
  const query = new Parse.Query(Parse.User);
  query.equalTo("username", username.toString());
  try {
    const result = await query.first();
    return result != null;
  } catch (e) {
    console.log(e.message);
    handleParseError(e);
    return false;
  }
  // try {
  //   const result = await Parse.Cloud.run("isUserExist", { username: username });
  //   if(result) {
  //     return true;
  //   }
  //   else {
  //     return false;
  //   }
  // }
  // catch(e) {
  //   console.log(e.message);
  //   return false;
  // }
}