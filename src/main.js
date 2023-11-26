import './assets/main.css'
import '@arco-design/web-vue/dist/arco.css'
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue'
import * as auth from './utils/auth'
import App from './App.vue'
import router from './router'
import Parse from 'parse';
import store from './store';

const app = createApp(App)

Parse.initialize('myAppId', '123456');
Parse.serverURL = 'http://localhost:2018/api';

// 判断是否已经登陆跳转页面
router.beforeEach(async function(to, from, next) {
    if(to.meta.needLogin) {
        if(await auth.getUserInfo()) {
            next();
        } 
        else {
            // console.log("无 Token 信息")
            next({
                path: "/login"
            })
        }
    } else {
        // console.log(to.meta.needLogin)
        next();
    }
})

store.commit('SET_PARSE_OBJECT', Parse);

app.use(router)
app.use(ArcoVue)
app.use(ArcoVueIcon)
app.use(store)
app.mount('#app')
