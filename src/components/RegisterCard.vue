<!-- 注册表单 -->
<template>
    <div class="registerCard" :style="{ display: 'flex' }">
        <a-card title="注册 | Maoji">
            <a-form :model="registerForm" auto-label-width>
                <a-form-item field="name" label="用户名">
                    <a-input
                        v-model="registerForm.username" placeholder="输入用户名..." type="text"
                    />
                </a-form-item>
                <a-form-item field="password" label="密码">
                    <a-input type="password" v-model="registerForm.password" placeholder="输入密码..." />
                </a-form-item>
                <!-- 邮箱验证，可用于找回账号 -->
                <!-- <a-form-item field="email" label="邮箱">
                    <a-input type="text" v-model="registerForm.email" placeholder="输入邮箱..." />
                </a-form-item> -->
                <!-- 用户协议 -->
                <!-- <a-form-item field="isRead">
                    <a-checkbox v-model="form.isRead"> I have read the manual </a-checkbox>
                </a-form-item> -->
                <a-form-item>
                    <a-col :span="5">
                        <a-button type="primary" v-on:click="signUp(registerForm.username, registerForm.password)">登录</a-button>
                    </a-col>
                    <a-col :span="1">
                        <div> </div>
                    </a-col>
                    <a-col :span="18">
                        <div class="register-info">
                            <span style="width: 100%;">
                                <div>
                                    <div  style="display: inline-block;">
                                        已有账号？前往
                                    </div>
                                    <div class="register-btn" v-on:click="this.$router.push({path:'/login'})">登录</div>
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
import { signUp } from '../api/register'
export default {
  setup() {
    const layout = ref('horizontal')
    const registerForm = reactive({
      username: '',
      password: '',
      isRead: false,
    })

    return {
      layout,
      registerForm,
    }
  },
  methods: {
    signUp
  }
}
</script>
<style scoped>
.registerCard {
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

.register-info {
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
    .register-info {
        text-align: right;
        padding-right: 0;
    }
}

.arco-form-item-content {
    margin-left: 10px;
}

</style>