import { userRequest } from '@/utils/request';

export const getDetailApi = () =>{
  return userRequest({
    method:'get',
    url:'/user/getDetail'
  });
}