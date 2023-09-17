# 线上校园前端项目

### 启动

```shell
npm i
npm run dev
```

### src目录结构

```
src
│  App.vue # 入口
│  main.ts
│  vite-env.d.ts
│
├─apis
│  ├─contact # 交际模块要用到的api
│  │      dynamic.ts
│  │      oss.ts
│  │
│  ├─message # 消息模块要用到的api
│  │      index.ts
│  │
│  ├─parttime # 兼职模块要用到的api
│  │      index.ts
│  │
│  ├─trade # 交易模块要用到的api
│  │      index.ts
│  │
│  └─user # 用户模块要用到的api
│          forget.ts
│          index.ts
│          login.ts
│          register.ts
│
├─assets # 静态资源
│  │  vue.svg
│  │  夕阳.jpg
│  │  晚霞.jpg
│  │  校门.jpg
│  │  要发财.png
│  │
│  ├─css
│  │      iconfont.css
│  │      normalize.css
│  │
│  ├─font
│  │      iconfont.css
│  │      iconfont.js
│  │      iconfont.json
│  │      iconfont.ttf
│  │      iconfont.woff
│  │      iconfont.woff2
│  │      klavika-bold.otf
│  │      klavika-light.otf
│  │      klavika-medium.otf
│  │
│  └─img
│          avatar1.jpg
│          avatar2.jpg
│          custom-empty-image.png
│          logo.png
│
├─components 
│  ├─comment-item # 评论组件封装
│  │      index.vue
│  │
│  ├─dynamic-item # 动态组件封装
│  │      index.vue
│  │
│  ├─friend-item # 好友组件封装
│  │      index.vue
│  │
│  ├─go-back-bar # 顶部退回栏组件封装
│  │      index.vue
│  │
│  ├─HomeComponents
│  │      Banner.vue
│  │      Header.vue
│  │
│  ├─NavBars
│  │      goback.vue
│  │
│  └─post-bubble # 首页气泡组件封装
│          index.vue
│
├─interfaces
│      contact.ts
│      message.ts
│      parttime.ts
│      trade.ts
│
├─layout # app布局
│      index.vue
│
├─router 
│      index.ts
│
├─stores
│  │  index.ts
│  │  useGlobalStore.ts # 全局状态（里面包含token‘和userinfo）
│  │
│  └─modules
├─utils # 用到的工具
│      debounce.ts # 防抖
│      emojis.json
│      interceptor.ts # 全局拦截器封装
│      location.ts # 定位封装
│      request.ts # 后端请求封装
│      throttle.ts # 节流
│      websocket.ts # websocket封装（用于消息通讯）
│
└─views 
    ├─contact
    │  │  index.vue
    │  │
    │  ├─add
    │  │      index.vue
    │  │
    │  ├─dynamic-detail
    │  │      index.vue
    │  │
    │  ├─interactive
    │  │  │  index.vue
    │  │  │
    │  │  ├─comment-receive
    │  │  │      index.vue
    │  │  │
    │  │  └─like-receive
    │  │          index.vue
    │  │
    │  └─search
    │          index.vue
    │
    ├─dashboard
    │  │  index.vue
    │  │
    │  ├─adjunct-view
    │  │      index.vue
    │  │
    │  ├─deal-view
    │  │      index.vue
    │  │
    │  └─post
    │          index.vue
    │
    ├─forget
    │      forget.vue
    │      getAccount.vue
    │      verifyEmail.vue
    │      verifyPhone.vue
    │
    ├─login
    │      index.vue
    │
    ├─message
    │  │  index.vue
    │  │
    │  ├─add
    │  │      index.vue
    │  │
    │  ├─chat
    │  │      index.vue
    │  │
    │  └─sys
    │          index.vue
    │
    ├─parttime
    │  │  ApList.vue
    │  │  index.vue
    │  │
    │  ├─detail
    │  │      index.vue
    │  │
    │  ├─edit
    │  │      index.vue
    │  │
    │  ├─post
    │  │      index.vue
    │  │
    │  └─Success
    │          Delete.vue
    │          Finish.vue
    │          Pass.vue
    │          receiveOrder.vue
    │          Reject.vue
    │
    ├─recruit
    ├─register
    │      index.vue
    │
    ├─trade
    │  ├─deal
    │  │      index.vue
    │  │
    │  └─x
    └─user
        │  index.vue
        │
        ├─account
        │      index.vue
        │
        ├─balance
        │      index.vue
        │
        ├─collect
        │      index.vue
        │
        ├─detail
        │      index.vue
        │
        ├─edit-detail
        │  ├─introduce
        │  │      index.vue
        │  │
        │  └─my-name
        │          index.vue
        │
        ├─my-parttime
        │  │  ApplyDetail.vue
        │  │  procedDetail.vue
        │  │
        │  ├─applied
        │  │      index.vue
        │  │
        │  └─posted
        │          index.vue
        │
        └─my-trade
```
