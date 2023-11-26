<template>
    <div class="register-card-container">
        <RegisterCard/>
    </div>
</template>
<script>
    import RegisterCard from '../components/RegisterCard.vue';
    export default {
        setup() {

        },
        components: {
            RegisterCard
        }
    }
</script>
<style scoped>
.register-card-container {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #d4d4d4;
}

/* 适配小屏幕 */
@media (max-width: 500px){
    .register-card-container {
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