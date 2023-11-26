import { isSessionTokenExpired } from '../api/user/isSessionTokenExpired';
import store from '../store';

//获取用户信息
export function isOneUser(pageUsername) {
    if(isSessionTokenExpired()) {
        return false;
    }
    const Parse = store.state.parseObject;
    var currentUser = Parse.User.current();
    console.log(currentUser.get('username'))
    if(currentUser) {
        const username = currentUser.get('username');
        return username == pageUsername;
    }
    return false;
}