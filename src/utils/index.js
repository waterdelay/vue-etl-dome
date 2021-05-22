/*
 * @Author       : daiwei
 * @Date         : 2021-05-22 16:45:20
 * @LastEditors  : daiwei
 * @LastEditTime : 2021-05-22 17:00:30
 * @FilePath     : \vue-etl-dome\src\utils\index.js
 */
// webpack require.context 转为对象包装函数 
export const requireContentObject = (r, exinclude) => {
  let contents = {}
  const paths = r.keys().filter((p) => {
    return exinclude.indexOf(p) == -1
  });
  for (let p of paths) {
    let fn = r(p).default ? r(p).default : r(p)
    let k = p.match(/(\w+-?\w+).js$/)[1]
    contents[k] = fn
  }
  return contents
}
