import { gatewayRequest } from '@/utils/request';

//密码登录
export const loginApi = (userInfo: any) => {
  return gatewayRequest({
    method: 'post',
    url: '/campusUser/login',
    data: userInfo
  })
}

//手机号登录
export const loginByPhoneApi = (loginInfo: any) => {
  return gatewayRequest({
    method: 'post',
    url: '/campusUser/loginByCode',
    data: loginInfo
  })
}

//发送短信验证码
export const sendPhoneCodeApi = (phone: any) => {
  return gatewayRequest({
    method: 'get',
    url: `/campusUser/send/${phone}`
  });
}
