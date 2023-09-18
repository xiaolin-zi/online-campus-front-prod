import { storeToRefs } from 'pinia';
import { useGlobalStore } from '@/stores/useGlobalStore';
import { AxiosError, AxiosResponse } from 'axios';
import router from '@/router';
import { showToast } from 'vant';

const whiteList = [
  'login',
  'loginByCode',
  'loginByPhone',
  'send',
  'sendEmail',
  'logout',
  'register'
];

export const reqSuccessCallback = (config: any) => {
  const globalStore = useGlobalStore();
  let token = globalStore.token, uid = globalStore.userinfo.uid;
  let arr = config.url.split('/');

  for (let j in whiteList) {
    if (whiteList[j] === arr[arr.length - 1]) {
      return config;
    }
  }

  // console.log('request interceptor', config, token, arr);

  if (token !== '') {
    config.headers.token = token;
    // config.headers.uid = uid;
  } else {
    showToast('token无效或已过期, 请重新登录!');
    globalStore.$reset();
    router.push('/login');
  }

  return config;
}

export const respSuccessCallback = (response: AxiosResponse) => {
  // console.log('response interceptor', response);
  return response;
}

export const errCallback = (err: AxiosError) => {
  // console.log('request/response error callback', err);

  if (err.response?.statusText === 'Unauthorized') {
    showToast('token无效或已过期, 请重新登录!');
    const globalStore = useGlobalStore();
    globalStore.$reset();
    router.push('/login');
  }

  return Promise.reject(err);
}
