export interface ResponseData {
  code: number,
  msg: string,
}
export interface SendData {
  publisherId: string,
  jobTitle: string,
  jobContent?: string,
  salary?: number,
  deadline?: string,
  location?: number,
  recruitNum?: number,
  term?: number,
  classification?: number,
  workingDays?: number
}
export interface aPDetailData {
  applyStatus?: number,
  applicationId?: string,
  userImage?: {
    type: string 
    default: 'https://edu20230513.oss-cn-guangzhou.aliyuncs.com/2023/07/25/338d98830092451bbd00ee2af233289b.png'
  },
  username?: string,
  likeStatus?: number,
  credit?: number,
  favoritesStatus?: number
  applyNum?: number,
  classification?: number,
  createTime?: string
  deadline?: string
  favoritesNum?: number
  finishNum?: number
  jobContent?: string
  jobId?: string
  jobTitle?: string
  likeNum?: number
  location?: number
  passedNum?: number
  publisherId?: string
  recruitNum?: number
  salary?: number
  status?: number
  term?: number
  updateTime?: string
  visitNum?: number
  workingDays?: number
  version?: number
}
export interface editData {
  jobId?: string,
  jobTitle?: string,
  jobContent?: string,
  salary?: number,
  deadline?: string,
  location?: number,
  status?: number,
  recruitNum?: number,
  term?: number,
  classification?: number,
  workingDays?: number
}

export interface aPDetailResponseData extends ResponseData {
  data: aPDetailData
}
//兼职申请者列表数据的ts类型
export interface aPListData {
  applicationId?: string,
  username?: string,
  createTime?: string,
  applicantId?: string,
  gender?: number
  status?: number,
  credit?: number
}

//包含全部兼职申请者列表数据的ts类型
export type aPListRecords = aPListData[];
export interface aPListResponseData extends ResponseData {
  data: aPListRecords
}
//兼职首页懒加载数据的ts类型
export interface lazyListData {
  jobId?: string,
  jobTitle?: string,
  salary?: number,
  deadline?: string,
  location?: number,
  classification?: number,
  status?: number,
  userImage?: string
  username?: string
}
//包含全部兼职首页懒加载数据的ts类型
export type lazyListRecords = lazyListData[];

export interface rejectApplyData {
  applicationId: string,
  status: number
}
//进行中
export interface activeListData {
  operationId?: string
  jobTitle?: string,
  salary?: number,
  status?: number,
  location?: number,
  classification?: number,
  deadline?: string
}
export type activeListRecords = activeListData[];
//已发布
export interface myPostListData {
  jobId?: string
  jobTitle?: string,
  salary?: number,
  status?: number,
  location?: number,
  classification?: number,
  recruitNum?: number,
  updateTime?: string
}
export type myPostListRecords = myPostListData[];
//申请者已申请列表
export interface AppliedListData {
  jobTitle?: string,
  salary?: number,
  applyStatus?: number,
  location?: number,
  classification?: number,
  updateTime?: string
}
export type AppliedListRecords = AppliedListData[];
//申请者兼职申请详情
export interface AppliedDetailData {
  jobTitle?: string,
  salary?: number,
  status?: number,
  jobContent?: string,
  location?: number,
  classification?: number,
  workingDays?: number,
  deadline?: string,
  recruitNum?: number,
  applicantUserName?: string,
  applicantTelephone?: string,
  publisherUserName?: string,
  publisherTelephone?: string,
  applicationId?: string,
  jobId?: string,
  createTime?: string,
  updateTime?: string
}
//查看执行订单详情详情
export interface ProcedingDetailData {
  jobTitle?: string,
  salary?: number,
  status?: number,
  jobContent?: string,
  location?: number,
  classification?: number,
  workingDays?: number,
  deadline?: string,
  operationId?: string,
  applicantUserName?: string,
  applicantTelephone?: string,
  publisherUserName?: string,
  publisherTelephone?: string,
  applicationId?: string,
  jobId?: string,
  createTime?: string,
  updateTime?: string
}
export interface operationData {
  operationId?: string,
  jobId?: string,
  status?: number
}
//查看已完成
export interface FinishedData {
  operationId?: string
  jobTitle?: string,
  salary?: number,
  status?: number,
  location?: number,
  classification?: number,
  updateTime?: string
}
export type FinishedListRecords = FinishedData[];
//收藏列表
export interface collectedData {
  deleted?: boolean
  favoritesId?: string
  jobId?: string
  jobTitle?: string
  userId?: string
}
export type collectedRecords = collectedData[];
