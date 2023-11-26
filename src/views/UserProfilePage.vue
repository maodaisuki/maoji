<!-- 用户资料页 -->
<template>
    <p v-if="isOneUser(this.username)">同一个用户</p>
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