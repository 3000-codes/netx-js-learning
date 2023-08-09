# nextjs(Next.js 13)

### 核心功能

- 1. 路由:基于文件系统的路由,支持 layout(页面核心布局),嵌套路由,加载状态,错误处理等等
- 2. 渲染机制:客户端和服务端渲染,在服务器上优化静态和动态渲染
- 3. 数据获取:在服务器组件中简化数据获取,并且可以合并相同请求,缓存请求数据和出现验证的 API:**fetch**
- 4. css 样式处理:支持 css 模块,css-in-j,tailwind css 等方式
- 5. 其他优化:图形,字体和脚本的优化,支持 ts

### [项目结构](https://nextjs.org/docs/getting-started/project-structure)

顶级文件夹:

|  文件夹  |    描述     |
| :------: | :---------: |
|  `app`   | App Router  |
| `pages`  | Page Router |
| `public` |  静态资源   |
|  `src`   |  业务代码   |

顶级文件:

|      文件名      |    描述     |
| :--------------: | :---------: |
| `next.config.js` | nextjs 配置 |
|  `package.json`  |  项目配置   |

#### Layout

- 作用:页面的核心布局
- 根布局:在`app/layout.tsx`中定义,必须包含`<html>`,`<body>`标签.每个都有都会共用.必须,否则会建一个默认的根布局
- 子布局:在路由下创建,只会在该路由下生效,会在相同路由下的子孙路由中共用

## 1. 路由

### App Router 与 Page Router

- 基于文件系统的路由(Next.js 会根据 pages 文件夹下的文件自动生成路由)
- App Router(Nextjs13 推荐): 一种的新型的路由,支持你使用新的 React 特性,比如 Server Component 和 Streaming
- Page Router: 传统的路由,你可以使用这种路由来构建你的服务端渲染应用
- 区分:
  - App Router 的路由文件夹为`app`,Page Router 的路由文件夹为`pages`
  - App Router 的直接固定命名文件包括`layout.tsx`,`page.tsx`,`error.tsx`,`default.tsx`等等
  - Page Router 的直接固定命名文件包括`index.tsx`,`404.tsx`,`_app.tsx`,`_document.tsx`等等
