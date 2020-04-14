/*
 * @Author: Sule
 * @Date: 2020-04-13 14:12:11
 * @LastEditors: Sule
 * @LastEditTime: 2020-04-13 17:52:14
 * @Description:
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/list'
    },
    {
      path: '/list',
      component: resolve => require(['../components/HelloWorld.vue'], resolve),
      meta: { title: 'list' }
    }
  ]
})
