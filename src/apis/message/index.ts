import { messageRequest } from '@/utils/request';
import { SendBody } from '@/interfaces/message';

// 消息初始化
// export const initUserMessage = () => {
//   return messageRequest({
//     method: 'get',
//     url: '/message/initUserMessage',   
//   });
// }

// 消息初始化
export const initMessageApi = () => {
  return messageRequest({
    method: 'get',
    url: '/message/initMessage',   
  });
}

export const clickMyMessageApi = () => {
  return messageRequest({
    method: 'get',
    url: '/message/clickMyMessage',   
  });
}

// 获取用户的聊天记录
export const getUserChatRecords = (friendId: any) => {
  return messageRequest({
    method: 'get',
    url: `/message/lazyLoadingChatRecords?friendId=${friendId}`,   
  });
}

// 清除未读
export const clearUnReadApi = () => {
  return messageRequest({
    method: 'get',
    url: '/message/clearUnRead',   
  });
}

// 发送消息
export const sendMessageApi = (data: SendBody) => {
  return messageRequest({
    method: 'post',
    url: '/message/send',
    data
  });
}

// 清除消息缓存
export const clearMessageCacheApi = () => {
  return messageRequest({
    method: 'get',
    url: '/message/clearCache'
  });
}