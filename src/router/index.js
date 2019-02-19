import Vue from 'vue'
import Router from 'vue-router'
import {
  Message
} from 'element-ui'

import Login from '@/components/login.vue'
import Home from '@/components/home.vue'
import Users from '@/components/users.vue'
import Rights from '@/components/rights.vue'
import Roles from '@/components/roles.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [{
        path: '/users',
        name: 'users',
        component: Users,
      }, {
        path: '/rights',
        name: 'rights',
        component: Rights,
      }, {
        path: '/roles',
        name: 'roles',
        component: Roles,
      }]
    }, {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

// 路由守卫
router.beforeEach((to, from, next) => {
  if (to.name === 'login') {
    next()
  } else {
    const token = localStorage.getItem("token")
    if (!token) {
      Message.warning('请先登录')
      router.push({
        name: 'login'
      })
      return
    }
    next()
  }
})

export default router
