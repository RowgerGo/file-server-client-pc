import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home-page',
      redirect:'/home/login',
      component: require('@/components/HomeMainPage').default,
      meta: {
        requireAuth: true
      },
      children: [
        {path: '/home/login', component: require('@/components/HomeMain/HomeRightMain').default},
      ]
    },
    {
      path: '/Login',
      name: 'login-page',
      component: require('@/components/LoginPage').default
    },
    {
      path: '/Register',
      name: 'register-page',
      component: require('@/components/RegisterPage').default
    }
  ]
})

// 判断是否需要登录权限 以及是否登录
router.beforeEach((to, from, next) => {
  if (to.matched.some(res => res.meta.requireAuth)) {// 判断是否需要登录权限
    if (localStorage.getItem('Token')) {// 判断是否登录
      console.log("已经登录")
      next()
    } else {
      console.log("没有登录")
      // 没登录则跳转到登录界面
      next({
        path: '/Login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
})
export default router