# 线上校园前端项目

### 启动

```shell
npm i
npm run dev
```



### src目录结构

```
src
│  App.vue
│  main.ts
│  vite-env.d.ts
│
├─apis
│  ├─contact  # 动态模块要用到的api
│  │      dynamic.ts
│  │      oss.ts
│  │
│  ├─message  # 消息模块要用到的api
│  │      index.ts
│  │
│  ├─parttime  # 兼职模块要用到的api
│  │      index.ts
│  │
│  ├─recruit  # 招募模块要用到的api
│  ├─trade  # 交易模块要用到的api
│  │      index.ts
│  │
│  └─user # 用户模块要用到的api
│          forget.ts
│          index.ts
│          login.ts
│          register.ts
│
├─assets
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
│          logo.png
│
├─components  # 一些封装好的组件
│  ├─comment-item  # 评论组件
│  │      index.vue
│  │
│  ├─dynamic-item  # 动态组件
│  │      index.vue
│  │
│  ├─friend-item  # 好友组件
│  │      index.vue
│  │
│  ├─go-back-bar # 回退顶部栏组件
│  │      index.vue
│  │
│  ├─HomeComponents
│  │      Banner.vue
│  │      Header.vue
│  │
│  ├─NavBars
│  │      goback.vue
│  │
│  └─post-bubble # 首页的+号气泡组件
│          index.vue
│
├─interfaces # 要用到的接口类型集合
│      contact.ts
│      message.ts
│      parttime.ts
│      trade.ts
│
├─layout # 总布局
│      index.vue
│
├─router # 路由
│      index.ts
│
├─stores # 状态存储
│  │  index.ts
│  │  useGlobalStore.ts  # 全局动态存储 （里面含 token 和 userinfo）
│  │
│  └─modules
├─utils # 用到的工具
│      debounce.ts
│      emojis.json
│      interceptor.ts  # 拦截器封装
│      location.ts
│      request.ts  # axios请求封装
│      throttle.ts
│      websocket.ts
│
└─views 
    ├─contact  # 动态相关的页面最好写这里
    │  │  index.vue  # 动态模块主页面
    │  │
    │  ├─add 
    │  │      index.vue  # 写动态
    │  │
    │  ├─interactive
    │  │  │  index.vue  # 互动板块（收到的赞/评论）
    │  │  │
    │  │  ├─comment  # 查看收到的评论
    │  │  │      index.vue
    │  │  │
    │  │  └─like  # 查看收到的赞
    │  │          index.vue
    │  │
    │  └─search  # 动态模块的搜索（搜索想要看的动态）
    │          index.vue
    │
    ├─dashboard  # 平台主页面
    │  │  index.vue
    │  │
    │  ├─adjunct-view  # 兼职子版块 （显示已有的兼职）
    │  │      index.vue
    │  │
    │  ├─deal-view  # 交易子版块 （显示已有的交易）
    │  │      index.vue
    │  │
    │  └─post  # 可以进行兼职发布和交易发布的页面
    │          index.vue
    │
    ├─forget  # 找回密码相关页
    │      forget.vue
    │      getAccount.vue
    │      verifyEmail.vue
    │      verifyPhone.vue
    │
    ├─login  # 登录页
    │      index.vue
    │
    ├─message  # 消息相关的页面最好写这里
    │  │  index.vue  # 消息主页面
    │  │
    │  ├─add  # 可进行好友添加和公众号关注的页面
    │  │      index.vue
    │  │
    │  ├─chat  # 可进行与某一个好友聊天的页面
    │  │      index.vue
    │  │
    │  └─sys  # 查看系统通知和已关注公众号消息的页面
    │          index.vue
    │
    ├─parttime
    │  │  index.vue （暂时不用理）
    │  │
    │  ├─detail  # 查看某一兼职的详细信息的页面
    │  │      index.vue
    │  │
    │  ├─edit  # 编辑某一兼职的详细信息的页面
    │  │      index.vue
    │  │
    │  └─post  # 进行发布兼职的页面
    │          index.vue
    │
    ├─recruit  # 招募相关的页面最好写这里
    ├─register  # 注册相关的页面最好写这里
    │      index.vue
    │
    ├─trade  # 交易相关的页面最好写这里
    │  ├─deal
    │  │      index.vue
    │  │
    │  └─x （不用管 这是为了方便看文件项目结构而创建出来的无意义文件夹）
    └─user  # 用户相关的页面最好写这里
        │  index.vue  # 用户个人主页面
        │
        ├─account  # 账号
        │      index.vue
        │
        ├─balance  # 卡券
        │      index.vue
        │
        ├─collect  # 收藏夹
        │      index.vue
        │
        ├─detail  # 用户个人详细资料的查看
        │      index.vue
        │
        ├─edit-detail  # 用户详细资料编辑
        │  ├─introduce  # 个人签名
        │  │      index.vue
        │  │
        │  └─my-name  # 昵称等
        │  |      index.vue
        |  |-......
        │
        ├─my-parttime # 用户个人的兼职相关的数据
        │  ├─applied # 已申请
        │  └─posted # 已发布
        │  |       index.vue
        |  |-......
        │
        └─my-trade  # 用户个人的交易相关的数据
```

