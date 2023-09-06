import { defineStore } from 'pinia';

// 当前在线用户状态管理
export const useGlobalStore = defineStore('globalState', {
  state: () => {
    return {
      userinfo: {
        uid: '', // user id
        username: '', // 用户名
        userImage: '', // 头像
        consignee: '', // 昵称
      },
      token: '', // 令牌
    }
  },
  getters: {},
  actions: {
    setToken(token: string) {
      this.token = token;
    },
    setUserInfo(userinfo: any) {
      this.userinfo = userinfo;
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'token',
        storage: window.localStorage,
        paths: ['token']
      },
      {
        key: 'userinfo',
        storage: window.localStorage,
        paths: ['userinfo']
      }
    ]
  }
});