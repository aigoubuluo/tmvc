# 基于qiankun+vue-elment-admin改造微服务使用说明
## 前言
``` sh
使用技术栈qiankun将vue-elment-admin框架打造为微前端基座处理。
本项目文件目录包含：micro-main 是主要项目、micro-con 是子项目。
```
- 简单介绍一下使用的技术栈，此架构所使用主要两个开源项目以下是详细介绍：
>（1）qiankun
是蚂蚁金服开源的一套完整的微前端解决方案。具体描述可查看[文档](https://qiankun.umijs.org/zh/) 和 [Github](https://github.com/umijs/qiankun)
>（2）vue-elment-admin	
是用于管理界面的生产就绪前端解决方案。它基于vue并使用 UI Toolkit element-ui，具体可查看[文档](https://panjiachen.github.io/vue-element-admin-site/)和[Github](https://github.com/PanJiaChen/vue-element-admin)  [在线查看Gitee](https://panjiachen.gitee.io/vue-element-admin/) 国内用户可访问该地址在线预览

- 结合以上内容，下面将通过一个微服务Demo 介绍 Vue 项目如何接入 qiankun，和微应用如何完美注入到微服务中代码地址：
### 其他技术栈
[npm](https://www.npmjs.com/)  [WebPack](https://webpack.docschina.org/) [vue](https://github.com/vuejs/vue) [element UI](https://github.com/ElemeFE/element)

### 微前端开源下载地址
 [下载地址](https://gitee.com/tmvc/tmvc)
### 微前端工具包
[下载地址](https://gitee.com/tmvc/tmvc-utils.git)

## 微服务基座说明

#### 1. 基座说明

|  名称   | 技术栈  | 框架|
| :----:  |:----:  |:----: |
| micro-main  | VUE、Qiankun | vue-elment-admin |
``` sh
本文使用的是 qiankun2.0 之后的版本和方法，底层使用vue-elment-admin、详细描述可查看上方连接。
```

#### 2.命令操作
>注入依赖
``` sh
	$npm install  全局注入
	$npm install tmvc-base  全局注入基座依赖文件 //本地如果已有包含qiankun的应用可直接执行此命令
	$npm install qiankun 
	
```
#### 3. 安装下载配置依赖文件
>依赖文件下载[micro-router下载地址](https://gitee.com/aigoubuluo_admin/micro-router.git)
``` sh
导入子应用配置文件至src目录下： 
在将将下载后的文件microRouter文件夹复制到项目中的src目录下
```
``` vue

```
#### 4. 添加子应用挂载节点

``` vue
在src/layout/components/AppMain.vue
加入以下：
<section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view :key="key" />
      </keep-alive>
    </transition>
    <!-- 挂载子应用 开始 -->
    <section id="Appmicro" />
    <!-- 挂载子应用 结束 -->
  </section>
```
#### 5. 修改路由配置文件
>微应用配置路由[下载地址](https://gitee.com/aigoubuluo_admin/micro-router.git)
``` sh
在src/router/index.js添加以下配置：
$ import startQiankun from 'tmvc-base'// 注入乾坤基座配置
// 调用qiankun启动服务
startQiankun()
```
> 微应用路由文件
``` sh
创建在 src/router/modules/微应用路由名称
在将文件注入到 src/router/index.js当中。
```

#### 6.	路由说明
> 2.6.1	基座路由说明 
``` sh
在基座配置子项目文件当中路径为：src/microRouter.js
文件内容的name与activeRule的名称必须一致例子如以下：
{
    name: 'vue-son', //微应用名称
    entry: VUE_SON_APP,//微应用服务地址
    container: '#Appmicro',//基座id
    activeRule: '/vue-son'//访问名称，注意必须和微应用名称相同
  },
```
> 微应用路由设置如以下
``` sh
路径为：src/modules/vue-son-menu.js
对应的基座当中设置的微应用名称，微应用路由配置必须与配置的microRouter.js当中的“name“对应起来，可参考以下例子：
const appRouter = {
  path: '/vue-con',
  component: Layout,
  redirect: 'doc1',
  name: 'vue-con',
  meta: {
    title: '微·子系统2',
    icon: 'table'
  },
  children: [
    {
      path: '/vue-son',
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          meta: { title: '子应用·测试页面4', icon: 'menuSon' }
        }
      ]
    },
    {
      path: '/vue-son/form',
      children: [
        {
          path: 'form',
          name: 'Form',
          meta: { title: '子应用·测试页面5', icon: 'menuSon' }
        }
      ]
    }
  ]
}
export default appRouter
```


## 微应用注入说明
```sh
微应用例子是以目前主流的框架vue-elment-admin框架为主，基于qiankun底层的微前端框架，进行了生命周期、通讯、依赖等一系列封装，方便维护及快速注入到微应用，仅供参考。详细框架介绍可参考前言篇里内容。
```
#### 1. 微应用注入说明
微应用底层使用vue-elment-admin框架，详情可查看前言里的介绍。
|  名称   | 技术栈  | 框架|
| :----:  |:----:  |:----: |
| micro-son  | VUE| vue-elment-admin |
#### 1.命令操作
>注入依赖
``` sh
	$npm install  全局注入
	$npm install tmvc  全局注入微应用依赖文件
```
#### 2.main.js改造
>在src/ mian.js 底部注入以下文件 
``` sh
// 微前端配置文件注入
import tmvc from 'tmvc'
// name 导出微应用生命周期
const { bootstrap, mount, unmount } = tmvc.microMain()
export { bootstrap, mount, unmount }
```
#### 3.vue-config.js 依赖文件
>在vue-config.js配置底部复制以下代码，供微应用使用。
*注意路径一定要写对否则会启动报错
``` sh
// 微前端子项目配置注入
const { microConfig, headers } = require('./src/microApp/micro-config.js')
module.exports.devServer.headers = headers// 配置跨域 必须
module.exports.configureWebpack.output = microConfig// umd格式注入 必须module.exports.publicPath = `//localhost:${port}`// 端口号配置 不是必须设置
```
#### 4.左侧菜单隐藏处理
每个独立的微应用都有属于自己的菜单栏，那么我们注入到“微服务“里时需要将菜单隐藏处理，这里我做了以下操作：
以目前项目里“ /src/layout/index.vue“为实例：
>Data里声明以下：
``` sh
isMicroApp: window.__POWERED_BY_QIANKUN__// 配置微前端菜单显示与否
```
>view层展示以下：
``` vue
<div  v-if="!isMicroApp" :class="classObj" class="app-wrapper">
    <div  v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside" />
    <sidebar class="sidebar-container" />
    <div :class="{hasTagsView:needTagsView}" class="main-container" >
      <div :class="{'fixed-header':fixedHeader}">
        <navbar />
        <tags-view v-if="needTagsView" />
      </div>
      <app-main />
      <right-panel v-if="showSettings">
        <settings />
      </right-panel>
    </div>
  </div>
  <app-main v-else />
```


著作说明：TMVC团队[博客地址访问](https://blog.csdn.net/tamil2021/article/details/119332074这个是说明博客地址)
### 致谢 (Acknowledgements)

- [vue-cli](https://github.com/vuejs/vue-cli)
- [qiankun](https://github.com/umijs/qiankun) 
- [npm](https://www.npmjs.com/) 
- [WebPack](https://webpack.docschina.org/) 
- [vue](https://github.com/vuejs/vue) 
- [elementUI](https://github.com/ElemeFE/element) 
- [vue-element-admin](https://github.com/PanJiaChen/vue-element-admin)


