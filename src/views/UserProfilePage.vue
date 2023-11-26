<!-- 用户资料页 -->
<!-- TODO 根据登陆状态添加关注或者编辑资料按钮 -->
<template>
    <!-- <p v-if="isOneUser(username)">同一个用户</p> -->
    {{ username }}
</template>
<script>
    import { isOneUser } from '../utils/isOneUser'
    export default {
        props: {
            username: {
                type: String,
                required: true
            }
        },
        methods: {
            isOneUser
        }
    }
</script>