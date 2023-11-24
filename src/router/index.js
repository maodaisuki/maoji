import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import LoginPage from '../views/LoginPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        needLogin: true
      },
      component: HomePage
    },
    {
      path: '/register',
      name: 'resgister',
      meta: {
        needLogin: false
      },
      component: RegisterPage
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        needLogin: false
      },
      component: LoginPage
    }
  ]
})

export default router
