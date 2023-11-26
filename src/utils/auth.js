import store from '../store';

//获取用户信息
export function getUserInfo() {
  const Parse = store.state.parseObject;
  var currentUser = Parse.User.current();
  console.log(currentUser)
  if(currentUser) {
    return currentUser;
  }
  return '';
}