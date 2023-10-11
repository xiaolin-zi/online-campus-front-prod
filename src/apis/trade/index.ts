import {parttimeRequest, tradeRequest} from '@/utils/request';
import {aPDetailResponseData} from "@/interfaces/parttime";

export const getTradeApi = (offset: any) => {
  return tradeRequest({
      method: 'get',
      url: `/product/list/${offset}`
  })
}

// 查看商品详情
export const getProductDetailApi = (productId: any) => {
    return tradeRequest({
        method: 'get',
        url: `/product/${productId}`
    });
}
