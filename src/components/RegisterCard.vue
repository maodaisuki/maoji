<!-- 注册表单 -->
<template>
    <div class="registerCard" :style="{ display: 'flex' }">
        <a-card title="注册 | Maoji">
            <a-form :model="registerForm" auto-label-width @submit-success="signUp(registerForm.username, registerForm.password)">
                <a-form-item field="username" label="用户名" :rules="usernameRule">
                    <a-input
                        v-model="registerForm.username" placeholder="输入用户名..." type="text"
                    />
                </a-form-item>
                <a-form-item field="password" label="密码" :rules="passwordRule">
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
                        <a-button type="primary" html-type="submit">注册</a-button>
                    </a-col>
                    <a-col :span="1">
                        <div> </div>
                    </a-col>
                    <a-col :span="18">
                        <div class="register-info">
                            <span style="width: 100%;">
                                <div>
                                    <div style="display: inline-block;">
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

    const usernameRule = [
        {
            required: true,
            message: '用户名为必须项'
        },
        {
            validator: (value, callback) => {
                if (value.length < 1 || value.length > 20) {
                    callback('用户名长度必须在 1 到 20 之间');
                } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
                    callback('用户名只能包含字母、数字和下划线');
                } else {
                    callback();
                }
            },
        },
    ]
    const passwordRule = [
        {
            required: true,
            message: '密码为必须项'
        }, 
        {
            validator: (value, callback) => {
                if (value.length < 6 || value.length > 20) {
                    callback('密码长度必须在 6 到 20 之间');
                } else {
                    callback();
                }
            },
        },
    ]

    return {
      layout,
      registerForm,
      usernameRule,
      passwordRule
    }
  },
  methods: {
    signUp,
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