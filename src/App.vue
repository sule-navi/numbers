<!--
 * @Author: Sule
 * @Date: 2020-04-13 14:12:11
 * @LastEditors: Sule
 * @LastEditTime: 2020-12-10 16:53:00
 * @Description:
 -->
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import auth from "@/utils/auth";
export default {
  name: 'App',
  beforeDestroy() {
    // 页面注销时 用户信息清空防止后续通过路由进入还能用
    auth.setLocalStorage("isLogin", false);
  },
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}

html,
body,
#app,
.wrapper {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #fbbc52;
}

/* 滚动条 */
*::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    background: rgba(0, 0, 0, 0.1);
}

*::-webkit-scrollbar-thumb {
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    background: #c1c1c1;
}

body {
    font-family: 'PingFang SC', "Helvetica Neue", Helvetica, "microsoft yahei", arial, STHeiTi, sans-serif;
}

a {
    text-decoration: none
}

</style>
