<!-- 用户资料页 -->
<!-- TODO 根据登陆状态添加关注或者编辑资料按钮 -->
<template>
    {{ username }}
</template>
<script>
    export default {
        props: {
            username: {
                type: String,
                required: true
            }
        },
    }
</script>