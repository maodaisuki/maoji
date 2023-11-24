import './assets/main.css'
import '@arco-design/web-vue/dist/arco.css'
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue'
import * as auth from './utils/auth'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// 判断是否已经登陆跳转页面
router.beforeEach(function(to, from, next) {
    // to: 即将进入的目标
    if(to.meta.needLogin) {
        if(auth.getUserInfo()) {
            next();
        } else {
            console.log("无 Cookie 信息")
            next({
                path: "/login"
            })
        }
    } else {
        console.log(to.meta.needLogin)
        next();
    }
})

app.use(router)
app.use(ArcoVue)
app.use(ArcoVueIcon)
app.mount('#app')
