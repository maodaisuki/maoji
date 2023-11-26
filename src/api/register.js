import router from '../router/index'
import store from '../store';

export const signUp = (async (username, password) => {
  const Parse = store.state.parseObject;
  // console.log(Parse)
  try {
    const user = await Parse.User.signUp(username, password);
    console.log("注册成功");
    router.push({path: '/'});
    return user;
  }
  catch(e) {
    // 检查用户
    alert('注册失败');
    console.log("注册失败");
  }
  return '';
})