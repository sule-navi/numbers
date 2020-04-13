<!--
 * @Author: Sule
 * @Date: 2020-04-13 14:12:11
 * @LastEditors: Sule
 * @LastEditTime: 2020-04-13 14:51:49
 * @Description:
 -->
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
    background-color: #f3e2d8;
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
