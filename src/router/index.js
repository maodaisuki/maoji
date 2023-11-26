import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import LoginPage from '../views/LoginPage.vue'
import UserProfilePage from '../views/UserProfilePage.vue'
import ErrorPage from '../views/ErrorPage.vue'
import { isUserExist } from '../api/user/isUserExist'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: '/home',
      meta: {
        needLogin: true
      },
    },
    {
      path: '/404',
      name: '404',
      component: ErrorPage
    },
    {
      path: '/home',
      name: 'homePage',
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
    },
    // 用户动态路由
    {
      path: '/user/:username',
      name: 'UserProfilePage',
      component: UserProfilePage,
      beforeEnter: async (to, from, next) => {
        // 检查服务器是否存在该用户数据
        // if (await isUserExist(to.params.username)) {
        //   next();
        // }
        // else {
        //   next('/404');
        // }
        next();
      },
      props: true
    },
    {
      path: '/user',
      name: 'user',
      redirect: '/home',
    }
  ]
})

export default router
