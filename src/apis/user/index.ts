import { userRequest, gatewayRequest } from '@/utils/request';

// 获取用户详细信息
export const getDetailApi = () => {
  return userRequest({
    method: 'get',
    url: '/user/getDetail'
  });
}

// 根据用户id获取用户详细信息
export const getUserInfoByUidApi = (uid: string) => {
  return userRequest({
    method: 'get',
    url: `/user/${uid}`
  });
}

// 退出登录
export const logoutApi = () => {
  return gatewayRequest({
    method: 'get',
    url: '/campusUser/logout'
  });
}