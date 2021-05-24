/*
 * @Author       : daiwei
 * @Date         : 2021-05-22 16:00:54
 * @LastEditors  : daiwei
 * @LastEditTime : 2021-05-24 10:14:51
 * @FilePath     : \vue-etl-dome\vue.config.js
 */
const path = require("path");
const resolve = dir => path.join(__dirname, dir);
module.exports = {
  publicPath: "./",
  lintOnSave: false, //关闭eslint
  outputDir: process.env.outputDir || 'dist',
  // 是一个函数，允许对内部的 webpack 配置进行更细粒度的修改。
  chainWebpack: (config) => {
    // 配置别名
    console.log(config)
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('views', resolve('src/views'))

    config.optimization.minimizer('terser').tap((args) => {
      // 去除生产环境console
      args[0].terserOptions.compress.drop_console = true
      return args
    })
  },
  css: {
    loaderOptions: {
       sass: {
        //  prependData:`@import "./src/assets/scss/style.scss";` 
         // sass 版本 9 中使用 additionalData 版本 8 中使用 prependData  
        }
      }
  },
  // 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建。
  parallel: require('os').cpus().length > 1,
  devServer: {
    host: '0.0.0.0',
    port: 8088, // 端口号
    https: false, // https:{type:Boolean}
    open: false, // 配置自动启动浏览器  open: 'Google Chrome'-默认启动谷歌
    // 配置多个代理
    proxy: {
      '/api': {
        target: 'https://www.baidu.com',
        ws: true, // 代理的WebSockets
        changeOrigin: true, // 允许websockets跨域
        secure: false, //如果是https接口，需要配置这个参数
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
};
