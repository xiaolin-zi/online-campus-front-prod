export interface Dynamic {
  _id?: string | any,
  uuid?: string,
  promulgatorId: string,
  promulgatorName: string,
  promulgatorImage: string,
  content: string,
  photos: Array<string>,
  city: string,
  address: string,
  label: Array<string>,
  likeId?: Array<string> | any,
  likeName?: Array<string>,
  targets?: Array<string>,
  status: number,
  comments: Array<Comment>,
  deleted: boolean,
  createTime?: string,
  updateTime?: string
}

export interface Comment {
  uuid: string,
  _class: string,
  content: string,
  sender: string,
  senderImage?: string,
  receiver: string,
  senderName: string,
  receiverName: string,
  deleted: boolean,
  createTime: string,
  updateTime: string
}

export interface likeReceiveDto {
  dtoId?: string // dto id
  likeAvatar?: string // 点赞者头像
  likeId?: string, // 点赞者uid
  likeName?: string, // 点赞者用户名
  content?: string // 动态内容
  cid?: string // 动态id
}

export interface commentReceiveDto {
  dtoId?: string, // dto id
  senderId?: string, // 评论者id
  senderAvatar?: string, // 评论者头像
  senderName?: string, // 评论者用户名
  dtoType?: number, // 评论类型 (1表示回复动态的评论, 2表示回复评论的评论)
  content?: string, // 回复者的评论内容
  targetContent?: string // 动态内容或评论
  cid?: string // 动态id
  sendTime?: string // 评论的发布时间
}