import store from '../store';
import { isSessionTokenExpired } from '../api/user/isSessionTokenExpired';

//获取用户信息
export async function getUserInfo() {
  const Parse = store.state.parseObject;
  var currentUser = Parse.User.current();
  // console.log(currentUser)
  if(currentUser) {
    if(await isSessionTokenExpired()) {
      // console.log("会话过期");
      return null;
    }
    return currentUser;
  }
  return null;
}