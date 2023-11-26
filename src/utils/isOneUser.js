import store from '../store';

//获取用户信息
export function isOneUser(pageUsername) {
    const Parse = store.state.parseObject;
    var currentUser = Parse.User.current();
    // console.log(currentUser)
    if(currentUser) {
        const username = currentUser.get('username');
        return username == pageUsername;
    }
    return false;
}