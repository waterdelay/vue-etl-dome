<!--
 * @Author       : daiwei
 * @Date         : 2021-05-21 19:05:16
 * @LastEditors  : daiwei
 * @LastEditTime : 2021-05-22 16:44:35
 * @FilePath     : \vue-etl-dome\src\views\Home.vue
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>
<script>
export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      
    }
  },
  created(){
   console.log(process.env.VUE_APP_BASE_URL,'999') 
  }
}
</script>
