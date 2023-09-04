import { parttimeRequest } from '@/utils/request';

export const getAdjunctApi = (num: number) => {
  return parttimeRequest({
    method: 'get',
    url:'/parttime/lazyLoading',
    params: { num }
  });
}