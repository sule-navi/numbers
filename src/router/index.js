/*
 * @Author: Sule
 * @Date: 2020-04-13 14:12:11
 * @LastEditors: Sule
 * @LastEditTime: 2020-12-09 16:34:59
 * @Description:
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: () => import('../components/Login.vue'),
      meta: { title: '登录' }
    },
    {
      path: '/list',
      component: () => import('../components/HelloWorld.vue'),
      meta: { title: 'list' }
    },
    {
      path: '*',
      redirect: '/login'
    }
  ]
})
