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
      redirect: '/campus/dashboard',
      name: '线上校园',
      component: () => import('@/layout/index.vue'),
      children: [
        {
          path: '/campus/dashboard',
          redirect: '/campus/dashboard/deal',
          name: '线上校园-总首页',
          component: () => import('@/views/dashboard/index.vue'),
          children: [
            {
              path: '/campus/dashboard/deal',
              name: '线上校园-首页-交易',
              component: () => import('@/views/dashboard/deal-view/index.vue')
            },
            {
              path: '/campus/dashboard/adjunct',
              name: '线上校园-首页-兼职',
              component: () => import('@/views/dashboard/adjunct-view/index.vue')
            }
          ]
        },
        {
          path: '/campus/contact',
          name: '线上校园-交际',
          component: () => import('@/views/contact/index.vue'),
        },
        {
          path: '/campus/message',
          name: '线上校园-消息-首页',
          component: () => import('@/views/message/index.vue'),
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
      path: '/login',
      name: '线上校园-登录',
      component: () => import('@/views/login/index.vue'),
    },
    {
      path: '/register',
      name: '线上校园-注册',
      component: () => import('@/views/register/index.vue'),
    },
    {
      path: '/getAccount',
      name: '线上校园-找回账号',
      component: () => import('@/views/forget/getAccount.vue'),
    },
    {
      path: '/verifyPhone',
      name: '线上校园-手机验证',
      component: () => import('@/views/forget/verifyPhone.vue')
    },
    {
      path: '/verifyEmail',
      name: '线上校园-邮箱验证',
      component: () => import('@/views/forget/verifyEmail.vue')
    },
    {
      path: '/forget',
      name: '线上校园-忘记',
      component: () => import('@/views/forget/forget.vue')
    },
    {
      path: '/campus/dashboard/post',
      name: '线上校园-首页-发布',
      component: () => import('@/views/dashboard/post/index.vue')
    },
    {
      path: '/campus/user/detail',
      name: '线上校园-用户-个人资料',
      component: () => import('@/views/user/detail/index.vue'),
    },
    {
      path: '/campus/user/collect/:id',
      name: '线上校园-用户-收藏夹',
      component: () => import('@/views/user/collect/index.vue'),
    },
    {
      path: '/campus/user/detail/myname',
      name: '线上校园-用户-个人资料-修改名字',
      component: () => import('@/views/user/edit-detail/my-name/index.vue')
    },
    {
      path: '/campus/user/balance',
      name: '线上校园-用户-余额与明细',
      component: () => import('@/views/user/balance/index.vue')
    },
    {
      path: '/campus/user/account',
      name: '线上校园-用户-账号与安全',
      component: () => import('@/views/user/account/index.vue')
    },
    {
      path: '/campus/user/my-parttime/posted',
      name: '线上校园-用户-我的兼职-我的发布',
      component: () => import('@/views/user/my-parttime/posted/index.vue')
    },
    {
      path: '/campus/user/my-parttime/MyApplied',
      name: '线上校园-用户-我的兼职-我的申请',
      component: () => import('@/views/user/my-parttime/applied/index.vue')
    },
    {
      path: '/campus/user/my-parttime/ApplyDetail/:id',
      name: '线上校园-用户-我的兼职-我的申请-申请详情',
      component: () => import('@/views/user/my-parttime/ApplyDetail.vue')
    },
    {
      path: '/campus/user/my-parttime/procedDetail/:id',
      name: '线上校园-用户-我的兼职-进行中详情',
      component: () => import('@/views/user/my-parttime/procedDetail.vue')
    },
    {
      path: '/campus/contact/add',
      name: '线上校园-交际-写动态',
      component: () => import('@/views/contact/add/index.vue')
    },
    {
      path: '/campus/contact/search',
      name: '线上校园-交际-搜索',
      component: () => import('@/views/contact/search/index.vue')
    },
    {
      path: '/campus/contact/dynamic-detail/:id',
      name: '线上校园-交际-动态详情',
      component: () => import('@/views/contact/dynamic-detail/index.vue')
    },
    {
      path: '/campus/contact/interactive',
      name: '线上校园-交际-互动',
      component: () => import('@/views/contact/interactive/index.vue')
    },
    {
      path: '/campus/contact/interactive/like-receive',
      name: '线上校园-交际-互动-收到的赞',
      component: () => import('@/views/contact/interactive/like-receive/index.vue')
    },
    {
      path: '/campus/contact/interactive/comment-receive',
      name: '线上校园-交际-互动-收到的评论及回复',
      component: () => import('@/views/contact/interactive/comment-receive/index.vue')
    },


    {
      path: '/campus/message/sys',
      name: '线上校园-消息-系统通知',
      component: () => import('@/views/message/sys/index.vue')
    },

    {
      path: '/campus/parttime/postAdjunct',
      name: '线上校园-兼职-发布兼职',
      component: () => import('@/views/parttime/post/index.vue')
    },
    {
      path: '/campus/parttime/detail/:id',
      name: '线上校园-兼职-兼职详情',
      component: () => import('@/views/parttime/detail/index.vue')
    },

    {
      path: '/campus/parttime/ApList/:id',
      name: '线上校园-兼职-查看兼职申请人列表',
      component: () => import('@/views/parttime/edit/index.vue')
    },
    {
      path: '/Delete',
      name: '线上校园-兼职-删除成功',
      component: () => import('@/views/parttime/Success/Delete.vue')
    },
    {
      path: '/Finish',
      name: '线上校园-兼职-添加完成成功',
      component: () => import('@/views/parttime/Success/Finish.vue')
    },
    {
      path: '/Reject',
      name: '线上校园-兼职-已经拒绝申请成功',
      component: () => import('@/views/parttime/Success/Reject.vue')
    },
    {
      path: '/Pass',
      name: '线上校园-兼职-通过申请成功',
      component: () => import('@/views/parttime/Success/Pass.vue')
    },
  ],
});

// 路由白名单
const whiteList = [
  '/login',
  '/register',
  '/getAccount',
  '/verifyPhone',
  '/verifyEmail',
  '/forget'
];

router.beforeEach((to, from, next) => {
  const globalStore = useGlobalStore();
  let token = globalStore.token.trim();

  // console.log('router beforeEach', from.path, to.path);

  let flag = true;

  for (let i in whiteList) {
    if (to.path === whiteList[i]) {
      flag = false;
      break;
    }
  }

  if (!flag) {
    closeWebSocket();
    next();
  } else {
    if (token !== '') {
      // console.log('尝试关闭原有ws');
      closeWebSocket();

      console.log(`成功切换页面: '${from.path}' ---> '${to.path}'`);

      // console.log('尝试创建新ws');
      openWebSocket(`wss://117.72.15.203/campusMessage/websocket/${globalStore.userinfo.uid}`);
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