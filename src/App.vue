<!--
 * @Author       : daiwei
 * @Date         : 2021-05-21 19:05:16
 * @LastEditors  : daiwei
 * @LastEditTime : 2021-05-22 19:07:53
 * @FilePath     : \vue-etl-dome\src\App.vue
-->
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
#app {
  width: 100vw;
  height: 100%;
  margin: 0;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
