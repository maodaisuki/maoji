<!-- 用户主页 -->
<!-- 通过本地存储获取 token -->
<template>
  Home<router-link :to="{ name: 'UserProfilePage', params: { username: 'johndoe' } }">John Doe's Profile</router-link>
</template>
<script>

</script>
<style scoped>

</style>
