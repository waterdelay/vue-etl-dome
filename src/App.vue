<!--
 * @Author       : daiwei
 * @Date         : 2021-05-21 19:05:16
 * @LastEditors  : daiwei
 * @LastEditTime : 2021-05-24 10:48:51
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
