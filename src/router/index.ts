import { initMessageApi } from './../apis/message/index';
import { createRouter, createWebHistory } from 'vue-router';
import { useGlobalStore } from '@/stores/useGlobalStore';
import { showToast } from 'vant';
import { closeWebSocket, openWebSocket } from '@/utils/websocket';
import { throttleFn } from '@/utils/throttle';
import { debounceFn } from '@/utils/debounce';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: 'campus'
    },
    {
      path: '/campus',
      redirect: 'campus/dashboard',
      name: '线上校园',
      component: () => import('@/layout/index.vue'),
      children: [
        {
          path: '/campus/dashboard',
          name: '线上校园-总首页',
          component: () => import('@/views/dashboard/index.vue'),
            children:[
              {
                path:'',
                name:'线上校园-首页-交易',
                component:() => import('@/views/dashboard/Deal.vue')
              },
              {
                path:'adjunct',
                name:'线上校园-首页-兼职',
                component:() => import('@/views/dashboard/Adjunct.vue')
              },
              
            ]
        },
        {
          path: '/campus/contact',
          name: '线上校园-交际',
          component: () => import('@/views/contact/index.vue'),
        },
        {
          path: '/campus/message',
          name: '线上校园-消息首页',
          component: () => import('@/views/message/index.vue'),
        },
        {
          path: '/campus/message/sys',
          name: '线上校园-消息-系统通知',
          component: () => import('@/views/message/sys/index.vue'),
        },
        {
          path: '/campus/message/add-friend',
          name: '线上校园-消息-加好友',
          component: () => import('@/views/message/add/index.vue'),
        },
        {
          path: '/campus/user',
          name: '线上校园-用户',
          component: () => import('@/views/user/index.vue'),
        }
      ]
    },
    {
      path: '/campus/message/:id',
      name: '线上校园-消息-聊天',
      component: () => import('@/views/message/chat/index.vue'),
    },
    {
      path: '/campus/contact/add',
      name: '线上校园-交际-写动态',
      component: () => import('@/views/contact/add/index.vue'),
    },
    {
      path: '/campus/contact/search',
      name: '线上校园-交际-搜索',
      component: () => import('@/views/contact/search/index.vue')
    },
    {
      path: '/login',
      name: '线上校园-登录',
      component:  () => import('@/views/login/index.vue'),
    },
    {
      path: '/register',
      name: '线上校园-注册',
      component:  () => import('@/views/register/index.vue'),
    },
    { 
      path: '/getAccount',
      name: '线上校园-忘记1',
      component: () => import('@/views/forget/getAccount.vue'),
    },
    { 
      path: '/verifyPhone', 
      name:'线上校园-手机验证',
      component: () => import('@/views/forget/verifyPhone.vue') 
    },
    { 
      path: '/verifyEmail', 
      name:'线上校园-邮箱验证', 
      component: () => import('@/views/forget/verifyEmail.vue') 
    },
    { 
      path: '/forget', 
      name:'线上校园-忘记2', 
      component: () => import('@/views/forget/forget.vue') 
    },
    {
      path:'/campus/dashboard/post',
      name:'线上校园-首页-发布',
      component:() => import('@/views/dashboard/Post.vue')
    },
    {
      path:'/campus/user/detail',
      name:'线上校园-用户-个人资料',
      component:() => import('@/views/user/detail/index.vue'),
    },
    {
      path:'/campus/user/detail/myname',
      name:'线上校园-用户-个人资料-修改名字',
      component:() => import('@/views/user/EditDetail/myName.vue')
    },
    {
      path:'/campus/user/balance',
      name:'线上校园-用户-余额与明细',
      component:() => import('@/views/user/balance/index.vue')
    },
    {
      path:'/campus/user/account',
      name:'线上校园-用户-账号与安全',
      component:() => import('@/views/user/account/index.vue')
    }
   
  ],
});

router.beforeEach((to, from, next) => {
  const globalStore = useGlobalStore();
  let token = globalStore.token.trim();

  console.log('router beforeEach', from.path, to.path,);

  if (to.path === '/login' || to.path === '/register') {
    closeWebSocket();
    next();
  } else {
    if (token !== '') {
      console.log('尝试关闭原有ws');
      closeWebSocket();

      console.log(`成功切换页面: '${from.path}' ---> '${to.path}'`);

      console.log('尝试创建新ws');
      openWebSocket(`ws://117.72.15.203:9000/campusMessage/websocket/${globalStore.uid}`);
      next();
    } else {
      closeWebSocket();
      showToast('请登录.');
      globalStore.$reset(); // 清空pinia所有状态数据
      router.push('/login');
    }
  }
  // next();
});

export default router;