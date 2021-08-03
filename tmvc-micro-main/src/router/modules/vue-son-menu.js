/*
 * @Author: your name
 * @Date: 2021-07-27 08:42:42
 * @LastEditTime: 2021-08-02 17:08:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Tamil-micro-web-ui/micro-app-main/src/micro/vue-son-menu.js
 */
// 子应用到菜单
import Layout from '@/layout'
const appRouter = {
  path: '/vue-con',
  component: Layout,
  redirect: 'doc1',
  name: 'vue-con',
  meta: {
    title: '微·子系统',
    icon: 'table'
  },
  children: [
    {
      path: '/vue-son',
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          meta: { title: '子应用·测试页面1', icon: 'menuSon' }
        }
      ]
    },
    {
      path: '/vue-son/icon',
      children: [
        {
          path: 'icon',
          name: 'icon',
          meta: { title: '子应用·测试页面2', icon: 'menuSon' }
        }
      ]
    }
  ]
}
export default appRouter
