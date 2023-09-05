// 商品
export interface Product {
  productId: string, // 商品id
  name: string, // 商品名
  description: string, // 描述
  price: string, // 价格
  userId: string, // 商家id
  categoryId: string, // 分类id
  categoryName: string, // 分类名
  subCategoryName: string, // 子分类名
  isPublished: number, // 是否发布
  visitNum: number, // 浏览数
  likeNum: number, // 点赞数
  favoritesNum: number, // 收藏数
  status: number, // 是否卖出,
  createTime: string, // 创建时间 yyyy-MM-dd HH:mm:ss
  updateTime: string, // 修改时间 yyyy-MM-dd HH:mm:ss
  deleted: boolean, // 逻辑删除
  images: Array<string>, // 图片列表
}