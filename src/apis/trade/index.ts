import { tradeRequest } from '@/utils/request';

export const getTradeApi = (offset: any) =>{
  return tradeRequest({
      url:`/product/list/${offset}`,
      method:'Get',
      params: {}
  })
}