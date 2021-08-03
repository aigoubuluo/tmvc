/*
 * @Author: your name
 * @Date: 2021-07-23 14:39:37
 * @LastEditTime: 2021-08-02 17:07:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-elementui-admin-micro-front-end/src/micro/apps/index.js
 */
import envConfig from './config.json'// 配置子应用访问地址
const ENV = process.env.NODE_ENV || 'development'// 使用 NODE_ENV 区分不同环境，默认值为 development
const config = envConfig[ENV]
const {
  VUE_ELEMENTUI_ADMIN,
  VUE_SON_APP,
  TAMIL_APP
} = config
export default [
  /**
   * name: 微应用名称 - 具有唯一性，为了方便区分，采取和子应用名称
   * entry: 微应用入口 - 通过该地址加载微应用
   * container: 微应用挂载节点 - 微应用加载完成后将挂载在该节点上
   * activeRule: 微应用触发的路由规则 - 触发路由规则后将加载该微应用
   */
  // {
  //   name: 'vue-element-admin-1',
  //   entry: VUE_ELEMENTUI_ADMIN,
  //   container: '#Appmicro',
  //   activeRule: '/vue-element-admin-1'
  // },
  // {
  //   name: 'tamil',
  //   entry: TAMIL_APP,
  //   container: '#Appmicro',
  //   activeRule: '/tamil'
  // },
  {
    name: 'vue-son',
    entry: VUE_SON_APP,
    container: '#Appmicro',
    activeRule: '/vue-son'
  }

]
