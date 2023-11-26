<!-- 登录表单 -->
<template>
    <div class="loginCard" :style="{ display: 'flex' }">
        <a-card title="登录 | Maoji">
            <a-form :model="loginForm" auto-label-width>
                <a-form-item field="name" label="用户名">
                    <a-input
                        v-model="loginForm.username" placeholder="输入用户名..."  type="text"
                    />
                </a-form-item>
                <a-form-item field="password" label="密码">
                    <a-input type="password" v-model="loginForm.password" placeholder="输入密码..." />
                </a-form-item>
                <!-- 用户协议 -->
                <!-- <a-form-item field="isRead">
                    <a-checkbox v-model="form.isRead"> I have read the manual </a-checkbox>
                </a-form-item> -->
                <a-form-item>
                    <a-col :span="5">
                        <a-button type="primary" v-on:click="loginIn(loginForm.username, loginForm.password)">登录</a-button>
                    </a-col>
                    <a-col :span="1">
                        <div> </div>
                    </a-col>
                    <a-col :span="18">
                        <div class="login-info">
                            <span style="width: 100%;">
                                <div>
                                    <div  style="display: inline-block;">
                                        没有账号？前往
                                    </div>
                                    <div class="register-btn" v-on:click="this.$router.push({path:'/register'})">注册</div>
                                </div>
                            </span>
                        </div>
                    </a-col>
                </a-form-item>
            </a-form>
        </a-card>
    </div>
</template>
<script>
import { reactive, ref } from 'vue';
import { loginIn } from '../api/login'
export default {
  setup() {
    const layout = ref('horizontal')
    const loginForm = reactive({
      username: '',
      password: '',
      // isRead: false,
    })

    return {
      layout,
      loginForm,
    }
  },
  methods: {
    loginIn
  }
}
</script>
<style scoped>
.loginCard {
    background-color: #fff;
}

.register-btn {
    color: rgb(var(--arcoblue-6));
    display: inline-block;
}

.register-btn:hover {
    cursor: pointer;
}

.arco-card {
    padding: 20px;
    overflow: hidden;
    width: 360px;
}

.login-info {
    text-align: right;
    padding-right: 12px;
}

/* 适配小屏幕 */
@media (max-width: 500px){
    .arco-card {
        padding: 20px;
        overflow: hidden;
        width: auto;
    }
    .login-info {
        text-align: right;
        padding-right: 0;
    }
}

.arco-form-item-content {
    margin-left: 10px;
}

</style>