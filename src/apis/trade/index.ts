import { tradeRequest } from '@/utils/request';

export const getTradeApi = (offset: any) => {
  return tradeRequest({
      method: 'get',
      url: `/product/list/${offset}`
  })
}