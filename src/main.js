/*
 * @Author: Sule
 * @Date: 2020-12-09 15:03:23
 * @LastEditors: Sule
 * @LastEditTime: 2020-12-09 17:01:49
 * @Description: 
 */

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import auth from "./utils/auth";
import { init } from 'echarts';

Vue.prototype.$echarts = init;
Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

/**
 * @description: 
 * @param {type} 
 * @param {type} 
 * @param {type} 
 * @return {type} 
 * @author: Sule
 */
router.beforeEach((to, from, next) => {
  if (to.path.indexOf('list')) {
    const isLogin = auth.getLocalStorage('isLogin');
    if (isLogin) {
      next();
    } else {
      next({
        path: '/login'
      });
    }
  } else {
    next({
      path: '/login'
    });
  }
});