/*
 * @Author       : daiwei
 * @Date         : 2021-05-21 19:05:16
 * @LastEditors  : daiwei
 * @LastEditTime : 2021-05-24 10:59:10
 * @FilePath     : \vue-etl-dome\src\main.ts
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css';
import '@/utils/element.js'//按需引入element 组件
import common from '@/utils/common.js' //创建的公共方法
import api from '@/api';
import '@/styles/index.css'; 
Vue.config.productionTip = false
Vue.prototype.$common = common;
// Vue.prototype.$api = api;//目前有问题 待后续去查验解决问题的原因
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
