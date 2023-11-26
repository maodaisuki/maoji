import router from '../router/index'
import store from '../store';

export const loginIn = (async (username, password) => {
  const Parse = store.state.parseObject;
  // console.log(Parse)
  try {
    const user = await Parse.User.logIn(username, password);
    console.log("登录成功");
    router.push({path: '/'});
    return user;
  }
  catch(e) {
    // 检查用户
    console.log("登陆失败");
  }
})