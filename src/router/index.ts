import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: 'campus/dashboard'
    },
    {
      path: '/campus',
      name: '线上校园',
      component: () => import('@/layout/index.vue'),
      children: [
        {
          path: '/campus/dashboard',
          name: '线上校园-首页',
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
          name: '线上校园-消息',
          component: () => import('@/views/message/index.vue'),
        },
        {
          path: '/campus/user',
          name: '线上校园-用户',
          component: () => import('@/views/user/index.vue'),
        }
      ]
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
      name: '线上校园-忘记密码',
      component: () => import('@/views/forget/getAccount.vue'),
    },
    { 
      path: '/verifyPhone', 
      name:'线上校园-手机验证', 
      component: () => import('@/views/forget/verifyPhone.vue') },
    { 
      path: '/verifyEmail', 
      name:'线上校园-邮箱验证', 
      component: () => import('@/views/forget/verifyEmail.vue') 
    },
    { 
      path: '/forget', 
      name:"forget", 
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
      component:() => import('@/views/user/Detail.vue'),
    },
    {
      path:'/campus/user/balance',
      name:'线上校园-用户-余额与明细',
      component:() => import('@/views/user/Balance.vue')
    },
    {
      path:'/campus/user/account',
      name:'线上校园-用户-账号与安全',
      component:() => import('@/views/user/Account.vue')
    }
   
  ],
});

export default router;