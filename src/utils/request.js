/*
 * @Author       : daiwei
 * @Date         : 2021-05-22 15:45:40
 * @LastEditors  : daiwei
 * @LastEditTime : 2021-05-22 17:11:56
 * @FilePath     : \vue-etl-dome\src\utils\request.js
 */
import axios from 'axios'
import store from '@/store'
import router from '@/router/router.js'

// 设置请求参数，并判断是否存在token
const hasTokenHandler = () => {
  // 获取token
  let AUTH_TOKEN = store.state.userInfo ? store.state.userInfo.token : null
  // 如果在 store 里面没找到，再尝试从 localStorage 中获取
  let familyHealth = localStorage.getItem('familyHealth') || '999999'
  if ((!AUTH_TOKEN || AUTH_TOKEN === '') && familyHealth) {
    // let familyHealth = JSON.parse(localStorage.getItem('familyHealth'))
    // let token = familyHealth.token
    let token = familyHealth
    AUTH_TOKEN = token
  }
  axios.defaults.baseURL = process.env.VUE_APP_BASE_URL
  axios.defaults.headers['Authorization'] = AUTH_TOKEN
  axios.defaults.headers.post['Content-Type'] = 'application/json'
  if (!AUTH_TOKEN) {
    return false
  } else {
    return true
  }
}

// 根据token进行路由拦截
const tokenIntercept = () => {
  let hasToken = hasTokenHandler()
  let nowUrl = decodeURIComponent(window.location.href.replace(window.location.origin, ''))
  if (!hasToken && !nowUrl.includes('/login')) {
    router.push('/login?reload=' + nowUrl)
    return false
  } else {
    return true
  }
}

// response数据处理
const responseDataHandler = (ret) => {
  // 请求成功
  if (ret && ret.status === 200 && ret.data.code === '0') {
    return ret.data
  } else { // 请求失败
    if (ret.data.code === '001') { // token失效
      let nowUrl = decodeURIComponent(window.location.href.replace(window.location.origin, ''))
      router.push('/login?reload=' + nowUrl)
    } else if (ret && ret.data && ret.data.code) { // 如果有code，说明请求成功到达后台并返回---正常
      return ret.data
    } else { // 没有code，未知错误
      return {
        code: 0,
        data: null,
        msg: '服务器错误'
      }
    }
  }
}
// 根据不同的method类型，进行相应的 axios 调用
const methodType = async (type, url, param = {}) => {
  if (!tokenIntercept()) {
    return null
  }
  let params = param
  if (type === 'get' || type === 'delete') params = { params }
  let ret = await axios[type](url, params)
  return responseDataHandler(ret)
}
const $http = {
  get: (url, params) => methodType('get', url, params),
  post: (url, params) => methodType('post', url, params),
  put: (url, params) => methodType('put', url, params),
  delete: (url, params) => methodType('delete', url, params)
}
export default $http