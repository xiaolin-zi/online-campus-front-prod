import { parttimeRequest } from '@/utils/request';

export const lazyLoadingApi = (num: number) => {
  return parttimeRequest({
    method: 'get',
    url:'/parttime/lazyLoading',
    params: { num }
  });
}