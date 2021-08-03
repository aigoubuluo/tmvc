const defaultSettings = require('../../package.json').name

const name = defaultSettings.title || 'Tamil' // page title
const microConfig = {
  // 把子应用打包成 umd 库格式
  library: `${name}-[name]`,
  libraryTarget: 'umd',
  jsonpFunction: `webpackJsonp_${name}`
}
// 解决跨域问题
const headers = {
  // 由于qiankun内部请求都是fetch来请求资源，因此子应用必须容许跨域
  'Access-Control-Allow-Origin': '*'
}
exports = module.exports = { microConfig, headers }
