import { SendData, aPDetailResponseData, aPListResponseData, editData, operationData } from '@/interfaces/parttime';
import { parttimeRequest } from '@/utils/request';


//发布兼职
export const addJobApi = (data: SendData) => {
  return parttimeRequest({
    method: 'post',
    url: '/parttime/addJob',
    data
  });
}
//普通更新兼职信息

export const updateJobInfoApi = (data: editData) => {
  return parttimeRequest({
    method: 'post',
    url: '/parttime/updateJobInfo',
    data
  });
}
//强制更新兼职信息
export const forceUpdateJobInfoApi = (data: editData) => {
  return parttimeRequest({
    method: 'post',
    url: '/parttime/forceUpdateJobInfo',
    data
  });
}
// 通过兼职申请
export const passApplyApi = (applicationId: any) => {
  return parttimeRequest<any, any>({
    method: 'post',
    url: '/parttime/passApply',
    params: { applicationId },
  });
}
// 拒绝兼职申请
export const rejectApplyApi = (applicationId: any) => {
  return parttimeRequest<any, any>({
    method: 'post',
    url: '/parttime/rejectApply',
    params: { applicationId },
  });
}
//删除兼职
export const deleteJobApi = (jobId: any) => {
  return parttimeRequest<any, aPDetailResponseData|any>({
    method: 'get',
    url: '/parttime/deleteJob',
    params: { jobId },
  });
}
//新增兼职访问量
export const addVisitNumApi = (jobId: any) => {
  return parttimeRequest<any, aPDetailResponseData|any>({
    method: 'get',
    url: '/parttime/addVisitNum',
    params: { jobId },
  });
}
// 查看兼职详情
export const getJobDetailApi = (jobId: any) => {
  return parttimeRequest<any, aPDetailResponseData|any>({
    method: 'get',
    url: '/parttime/getJobDetail',
    params: { jobId },
  });
}
//查看兼职申请详情
export const getApplyDetailApi = (applicationId: any) => {
  return parttimeRequest({
    method: 'get',
    url: '/parttime/getApplyDetail',
    params: { applicationId },
  });
}
//export const getJobDetailApi = (jobId:any) =>parttimeRequest.get<any,aPDetailResponseData>('/parttime/getJobDetail'+jobId) 
// 消息初始化
export const lazyLoadingApi = (num: any) => {
  return parttimeRequest({
    method: 'get',
    url: '/parttime/lazyLoading',
    params: { num },
  });
}
// 发布者查看兼职申请列表
export const searchApplyListApi = (jobId: any) => {
  return parttimeRequest<any, aPListResponseData|any>({
    method: 'get',
    url: '/parttime/searchApplyListToPublisher',
    params: { jobId },
  });
}
//删除兼职申请记录
export const deleteApplyApi = (applicationId: any) => {
  return parttimeRequest<any, aPListResponseData|any>({
    method: 'get',
    url: '/parttime/deleteApply',
    params: { applicationId },
  });
}
//提交兼职申请
export const addJobApplyApi = (jobId: any, jobVersion: any) => {
  return parttimeRequest({
    method: 'post',
    url: '/parttime/addJobApply',
    params: { jobId, jobVersion },
  });
}
//取消兼职申请
export const cancelJobOperationApi = (jobId: any, jobVersion: any) => {
  return parttimeRequest({
    method: 'post',
    url: '/parttime/cancelJobOperation',
    params: { jobId, jobVersion },
  });
}
//用户收藏操作
export const FavoritesJobApi = (jobId: any) => {
  return parttimeRequest({
    method: 'get',
    url: '/parttime/FavoritesJob',
    params: { jobId },
  });
}
//用户取消收藏操作
export const cancelFavoritesJobApi = (jobId: any) => {
  return parttimeRequest({
    method: 'get',
    url: '/parttime/cancelFavoritesJob',
    params: { jobId },
  });
}
//用户点赞操作
export const likeJobApi = (jobId: any) => {
  return parttimeRequest({
    method: 'get',
    url: '/parttime/likeJob',
    params: { jobId },
  });
}
//用户取消点赞操作
export const cancelLikeJobApi = (jobId: any) => {
  return parttimeRequest({
    method: 'get',
    url: '/parttime/cancelLikeJob',
    params: { jobId },
  });
}
//查看已申请列表
export const searchMyAppliedListApi = () => {
  return parttimeRequest({
    method: 'get',
    url: '/parttime/searchMyAppliedList'
  });
}
//查看已发布列表
export const searchMyPublishedListApi = () => {
  return parttimeRequest({
    method: 'get',
    url: '/parttime/searchMyPublishedList',
  });
}
//查看进行中列表
export const searchMyActiveListApi = () => {
  return parttimeRequest({
    method: 'get',
    url: '/parttime/searchMyActiveList',
  });
}
//查看已完成列表
export const searchMyFinishedListApi = () => {
  return parttimeRequest({
    method: 'get',
    url: '/parttime/searchMyFinishedList',
  });
}
//查看收藏列表
export const searchFavoritesListApi = (userId: any) => {
  return parttimeRequest({
    method: 'get',
    url: '/parttime/searchFavoritesList',
    params: { userId },
  });
}
//查看执行订单详情
export const getOperationDetailApi = (operationId: any) => {
  return parttimeRequest({
    method: 'get',
    url: '/parttime/getOperationDetail',
    params: { operationId },
  });
}
//修改兼职操作状态
export const updateOperationStatusApi = (data: operationData) => {
  return parttimeRequest({
    method: 'post',
    url: '/parttime/updateOperationStatus',
    data
  });
}




