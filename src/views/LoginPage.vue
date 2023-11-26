<template>
    <div class="login-card-container">
        <LoginCard/>
    </div>
</template>
<script setup>
import LoginCard from '../components/LoginCard.vue';
</script>
<style scoped>
.login-card-container {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #d4d4d4;
}

/* 适配小屏幕 */
@media (max-width: 500px){
    .login-card-container {
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #d4d4d4;
        padding: auto 20px auto 20px;
    }
}
</style>