import store from '../store';
import router from '../router/index'

// 处理 Parse 请求发生错误
export function handleParseError(err) {
    const Parse = store.state.parseObject;
    switch (err.code) {
      case Parse.Error.INVALID_SESSION_TOKEN:
        Parse.User.logOut();
        router.push({path: '/login'});
        break;
    }
}