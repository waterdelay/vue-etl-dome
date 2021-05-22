/*
 * @Author       : daiwei
 * @Date         : 2021-05-21 19:05:16
 * @LastEditors  : daiwei
 * @LastEditTime : 2021-05-22 15:41:31
 * @FilePath     : \vue-etl-dome\.eslintrc.js
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    // '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
