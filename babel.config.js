/*
 * @Author       : daiwei
 * @Date         : 2021-05-22 15:23:53
 * @LastEditors  : daiwei
 * @LastEditTime : 2021-05-22 15:25:49
 * @FilePath     : \vue-etl-dome\babel.config.js
 */
module.exports = {
    "presets": [["es2015", { "modules": false }]],
    "plugins": [
        [
            "component",
            {
                "libraryName": "element-ui",
                "styleLibraryName": "theme-chalk"
            }
        ]
    ]
}