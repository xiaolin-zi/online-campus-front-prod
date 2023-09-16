import { SendData, aPDetailResponseData, aPListResponseData, editData, operationData } from '@/interfaces/parttime';
import { parttimeRequest } from '@/utils/request';


//发布兼职
export const addJob = (data: SendData) => {
  return parttimeRequest({
    method: 'post',
    url: '/campusParttime/parttime/addJob',
    data
  })
}
//普通更新兼职信息

export const updateJobInfo = (data: editData) => {
  return parttimeRequest({
    method: 'post',
    url: '/campusParttime/parttime/updateJobInfo',
    data
  })
}
//强制更新兼职信息
export const forceUpdateJobInfo = (data: editData) => {
  return parttimeRequest({
    method: 'post',
    url: '/campusParttime/parttime/forceUpdateJobInfo',
    data
  })
}
// 通过兼职申请
export const passApply = (applicationId: any) => {
  return parttimeRequest<any, any>({
    method: 'post',
    url: '/campusParttime/parttime/passApply',
    params: { applicationId },
  })
}
// 拒绝兼职申请
export const rejectApply = (applicationId: any) => {
  return parttimeRequest<any, any>({
    method: 'post',
    url: '/campusParttime/parttime/rejectApply',
    params: { applicationId },
  })
}
//删除兼职
export const deleteJob = (jobId: any) => {
  return parttimeRequest<any, aPDetailResponseData>({
    method: 'get',
    url: '/campusParttime/parttime/deleteJob',
    params: { jobId },
  })
}
//新增兼职访问量
export const addVisitNum = (jobId: any) => {
  return parttimeRequest<any, aPDetailResponseData>({
    method: 'get',
    url: '/campusParttime/parttime/addVisitNum',
    params: { jobId },
  })
}
// 查看兼职详情
export const getJobDetail = (jobId: any) => {
  return parttimeRequest<any, aPDetailResponseData>({
    method: 'get',
    url: '/campusParttime/parttime/getJobDetail',
    params: { jobId },
  })
}
//查看兼职申请详情
export const getApplyDetail = (applicationId: any) => {
  return parttimeRequest({
    method: 'get',
    url: '/campusParttime/parttime/getApplyDetail',
    params: { applicationId },
  })
}
//export const getJobDetail = (jobId:any) =>parttimeRequest.get<any,aPDetailResponseData>('/campusParttime/parttime/getJobDetail'+jobId) 
// 消息初始化
export const lazyLoading = (num: any) => {
  return parttimeRequest({
    method: 'get',
    url: '/campusParttime/parttime/lazyLoading',
    params: { num },
  })
}
// 发布者查看兼职申请列表
export const searchApplyList = (jobId: any) => {
  return parttimeRequest<any, aPListResponseData>({
    method: 'get',
    url: '/campusParttime/parttime/searchApplyListToPublisher',
    params: { jobId },
  })
}
//删除兼职申请记录
export const deleteApply = (applicationId: any) => {
  return parttimeRequest<any, aPListResponseData>({
    method: 'get',
    url: '/campusParttime/parttime/deleteApply',
    params: { applicationId },
  })
}
//提交兼职申请
export const addJobApply = (jobId: any, jobVersion: any) => {
  return parttimeRequest({
    method: 'post',
    url: '/campusParttime/parttime/addJobApply',
    params: { jobId, jobVersion },
  })
}
//取消兼职申请
export const cancelJobOperation = (jobId: any, jobVersion: any) => {
  return parttimeRequest({
    method: 'post',
    url: '/campusParttime/parttime/cancelJobOperation',
    params: { jobId, jobVersion },
  })
}
//用户收藏操作
export const FavoritesJob = (jobId: any) => {
  return parttimeRequest({
    method: 'get',
    url: '/campusParttime/parttime/FavoritesJob',
    params: { jobId },
  })
}
//用户取消收藏操作
export const cancelFavoritesJob = (jobId: any) => {
  return parttimeRequest({
    method: 'get',
    url: '/campusParttime/parttime/cancelFavoritesJob',
    params: { jobId },
  })
}
//用户点赞操作
export const likeJob = (jobId: any) => {
  return parttimeRequest({
    method: 'get',
    url: '/campusParttime/parttime/likeJob',
    params: { jobId },
  })
}
//用户取消点赞操作
export const cancelLikeJob = (jobId: any) => {
  return parttimeRequest({
    method: 'get',
    url: '/campusParttime/parttime/cancelLikeJob',
    params: { jobId },
  })
}
//查看已申请列表
export const searchMyAppliedList = () => {
  return parttimeRequest({
    method: 'get',
    url: '/campusParttime/parttime/searchMyAppliedList'
  })
}
//查看已发布列表
export const searchMyPublishedList = () => {
  return parttimeRequest({
    method: 'get',
    url: '/campusParttime/parttime/searchMyPublishedList',
  })
}
//查看进行中列表
export const searchMyActiveList = () => {
  return parttimeRequest({
    method: 'get',
    url: '/campusParttime/parttime/searchMyActiveList',

  })
}
//查看已完成列表
export const searchMyFinishedList = () => {
  return parttimeRequest({
    method: 'get',
    url: '/campusParttime/parttime/searchMyFinishedList',
  })
}
//查看收藏列表
export const searchFavoritesList = (userId: any) => {
  return parttimeRequest({
    method: 'get',
    url: '/campusParttime/parttime/searchFavoritesList',
    params: { userId },
  })
}
//查看执行订单详情
export const getOperationDetail = (operationId: any) => {
  return parttimeRequest({
    method: 'get',
    url: '/campusParttime/parttime/getOperationDetail',
    params: { operationId },
  })
}
//修改兼职操作状态
export const updateOperationStatus = (data: operationData) => {
  return parttimeRequest({
    method: 'post',
    url: '/campusParttime/parttime/updateOperationStatus',
    data
  })
}




