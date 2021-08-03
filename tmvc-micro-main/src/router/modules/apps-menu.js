/*
 * @Author: your name
 * @Date: 2020-06-23 08:42:42
 * @LastEditTime: 2021-08-02 11:51:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Tamil-micro-web-ui/micro-app-main/src/micro/apps-menu.js
 */
// 子应用到菜单
import Layout from '@/layout'
const appRouter = {
  path: '/vue-element-admin',
  component: Layout,
  redirect: '/vue-element-admin-1/sonTest1',
  name: 'vue-element-admin',
  meta: {
    title: '微·子系统',
    icon: 'table'
  },
  children: [
    {
      path: '/vue-element-admin-1',
      children: [
        {
          path: 'sonTest1',
          name: 'SonTest1',
          meta: { title: '子应用-测试页面1', icon: 'menuSon' }
        }
      ]
    },
    {
      path: '/vue-element-admin-1/sonTest2',
      children: [
        {
          path: 'sonTest2',
          name: 'SonTest2',
          meta: { title: '子应用-测试页面2', icon: 'menuSon' }
        }
      ]
    },
    {
      path: '/tamil/dashboard',
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          meta: { title: '子应用-测试页面3', icon: 'menuSon' }
        }
      ]
    }
  ]
}
export default appRouter
