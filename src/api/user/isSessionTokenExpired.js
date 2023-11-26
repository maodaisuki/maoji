// 检查 Token 是否过期
import store from "../../store";

export async function isSessionTokenExpired() {
    const Parse = store.state.parseObject;
    var currentUser = Parse.User.current();
    if(currentUser) {
        try {
            await currentUser.fetch();
            // console.log("会话令牌有效");
            return false;
        }
        catch(e) {
            console.log("会话已过期");
            return true;
        }
    }
    else {
        // console.log("当前无用户登录");
        return true;
    }
}