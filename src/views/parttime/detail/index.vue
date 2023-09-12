<template>
  <body>
      <div class="mod-page">
          <van-nav-bar title="兼职详情" left-text="返回" class="header-box">
              <template #left>
                  <div>
                    <van-icon name="arrow-left" color="#0A1629" style="margin-right: 5px;" size="20px" @click="goBack" />
                  </div>
              </template>
              <template #right>
                  <el-dropdown v-show="aPDetail.publisherId === userId">
                      <van-icon name="more-o" size="20px" color="#0A1629" />
                      <template #dropdown>
                          <el-dropdown-menu>
                              <el-dropdown-item @click="goToEdit(aPDetail.jobId)"><i class="icomoon-icon"></i> 编辑<el-badge
                                      :max="99" class="custom-el-badge" /></el-dropdown-item>
                              <el-dropdown-item @click="goToDelete"><i class="icomoon-icon"></i>
                                  删除<el-badge :max="99" class="custom-el-badge" /></el-dropdown-item>
                          </el-dropdown-menu>
                      </template>
                  </el-dropdown>


              </template>

          </van-nav-bar>

          <div class="user">
              <div class="userinfo">
                  <img :src="aPDetail.userImage" style="width: 50px; height: 50px; border-radius: 50%;margin-top: 10px;">
                  <div style="margin-left: 10px;">
                    <!-- 发布者: {{ aPDetail.username }} -->
                  </div>
              </div>
              <div class="topic-wrap">
                  <div class="apply" v-show="aPDetail.publisherId == token">
                    <router-link :to="{ path: '/apList/' + aPDetail.jobId }">
                    {{ aPDetail.applyNum }}人申请</router-link>
                  </div>
              </div>
          </div>
          <div class="content">
              <div class="title">
                  {{ aPDetail.jobTitle }}
              </div>
              <div class="price">
                  <span>￥</span>
                  <span class="pricenum">{{ aPDetail.salary }}</span>
              </div>
              <div class="introduce">

                  <div class="detailinfo">
                      <div class="request">招募{{ aPDetail.recruitNum }}人 | 工作{{ aPDetail.workingDays }}天 </div>
                      <div class="tag-container ">
                          <div class="term">
                              <span class="fl line" v-if="aPDetail.term === 0">短期</span>
                              <span class="fl line" v-else="aPDetail.term===1">长期</span>
                              <span class="fl line" v-if="aPDetail.location === 0">佛山校区</span>
                              <span class="fl line" v-else="aPDetail.location===1">广州校区</span>
                          </div>
                      </div>
                      <div class="time">截止时间：{{ aPDetail.deadline }}
                      </div>
                  </div>
                  <div class="detail"> <span>{{ aPDetail.jobContent }}</span></div>

                  <img src="https://img2.baidu.com/it/u=1813594917,711918560&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750">
                  <div class="createTime">发布时间：{{ aPDetail.createTime }}
                  </div>
              </div>
          </div>
          <div class="interaction">
              <van-action-bar v-show="aPDetail.publisherId !== token">
                  <div class="container" @click="toggleFavorite">
                      <van-action-bar-icon icon="star-o" v-if="alreadyCollected == 0" />
                      <van-action-bar-icon icon="star" :color="'#73C975'" v-else="alreadyCollected! == 0" />
                      <span class="number">{{ numf }}</span>

                  </div>
                  <div class="container" @click="toggleLike">
                      <van-action-bar-icon icon="like-o" v-if="alreadyLiked == 0" />
                      <van-action-bar-icon icon="like" :color="'#73C975'" v-else="alreadyLiked! == 0" />
                      <span class="number">{{ likenum }}</span>
                  </div>
                  <div class="container">
                      <van-action-bar-icon icon="browsing-history-o" />
                      <span class="number"> {{ aPDetail.visitNum }}</span>
                  </div>
                  <van-action-bar-button color="#73c975" :text="isAppliedstatus" @click="dialogVisible = true" />
                  <el-dialog v-model="dialogVisible" title="Tips" width="50%" :before-close="handleClose">
                      <span>确定要申请该兼职吗？</span>

                      <template #footer>
                          <span class="dialog-footer">
                              <el-button @click="dialogVisible = false">取消</el-button>
                              <el-button type="primary"
                                  @click="dialogVisible = false, goToApply(aPDetail.jobId, aPDetail.version)">
                                  确定
                              </el-button>
                          </span>
                      </template>
                  </el-dialog>

              </van-action-bar>

          </div>

          <!-- <div class="common-layout">
              <div class="head">
                  <div class="usericon">
                      <el-image :src="aPDetail.userImage" style="width: 25px; height: 25px; border-radius: 5px" />
                  </div>
                  <div class="topic-wrap">
                      <div class="viewTotal-icon">
                          <el-icon class="mod-list-info" size="18">
                              <View />
                          </el-icon>
                          <div class="viewTotal"> {{ aPDetail.visitNum }}</div>
                      </div>
                      <div class="postTime">创建于: {{ aPDetail.createTime }}</div>
                      <div class="apply" v-show="aPDetail.publisherId == userId"><router-link :to="{
                          path: '/apList/' + aPDetail.jobId,

                      }">{{ aPDetail.applyNum }}人申请</router-link>
                      </div>
                  </div>
              </div>
              <el-card class="box-card">
                  <template #header>
                      <div class="topicBox">
                          <div class="title">
                              {{ aPDetail.jobTitle }}
                          </div>
                          <div class="topicInfo ">
                              <div class="salary"><b>{{ aPDetail.salary }}</b>元/月</div>

                          </div>
                          <div class="request">招募{{ aPDetail.recruitNum }}人 | 工作{{ aPDetail.workingDays }}天 </div>
                          <div class="tag-container ">
                              <div class="term">
                                  <span class="fl line" v-if="aPDetail.term === 0">短期</span>
                                  <span class="fl line" v-else="aPDetail.term===1">长期</span>
                                  <span class="fl line" v-if="aPDetail.location === 0">佛山校区</span>
                                  <span class="fl line" v-else="aPDetail.location===1">广州校区</span>

                                  <span class="fl line">截止时间：{{ aPDetail.deadline }}
                                  </span>
                              </div>
                          </div>
                      </div>
                  </template>
                  <div>
                      <div class="mod-column-body">
                          <div class="product-text ">
                              <p id="post_detail_val">
                                  {{ aPDetail.jobContent }}</p>
                          </div>
                      </div>
                      <div class="mod-column-body ">
                          <div class="product-image"><img src="//cdn.doumistatic.com//23,3ccfa9fce98a2c.jpg" alt="">
                          </div>
                      </div>
                  </div>
              </el-card>

              <div class="favorite-formModule">
                 
                  <span class="numberButton">
                      <span class="button" @click="toggleFavorite(aPDetail.jobId)">
                          <span>{{ alreadyCollected == 0 ? '收藏'
                              : '已收藏' }}</span>
                      </span>
                      <span class="number">{{ numf }}</span>
                  </span>
                 
                  <span class="numberButton">
                      <span class="button" @click="toggleLike(aPDetail.jobId)">
                          <span>{{ alreadyLiked == 0 ? '赞' : '已赞' }}</span>
                      </span>
                      <span class="number">{{ likenum }}</span>

                  </span>

              </div>
          </div>  -->

      </div>
  </body>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
import { useRouter, useRoute } from 'vue-router'
import { 
  addJobApplyApi, getJobDetailApi, 
  cancelLikeJobApi, favoritesJobApi, 
  cancelFavoritesJobApi, likeJobApi, 
  deleteJobApi, addVisitNumApi, cancelJobOperationApi 
} from '@/apis/parttime/index';
import type { aPDetailData, aPDetailResponseData } from '@/interfaces/parttime';
import { ElMessage } from 'element-plus';
import { useGlobalStore } from '@/stores/useGlobalStore';
import { ElMessageBox } from 'element-plus';
import { showDialog } from "vant";
const dialogVisible = ref(false);
const handleClose = (done: () => void) => {
  ElMessageBox.confirm('确定关闭吗?')
      .then(() => {
          done()
      })
      .catch(() => {
          // catch error
      })
}
const globalStore = useGlobalStore();
const token = globalStore.token;
const userId = globalStore.userinfo.uid;
const router = useRouter();
const alreadyCollected = ref<number>();
const alreadyLiked = ref<number>();
const numf = ref<number>();
const likenum = ref<number>();
const isApplied = ref<number>();
const isAppliedstatus = ref<string>();
const aPDetail = ref<aPDetailData>({});
const route = useRoute();
const jobId: any = route.params.id;

const getData = async () => {
  const { data: res } = await getJobDetailApi(jobId);
  console.log('get Detail', res);
  aPDetail.value = res.data;
  alreadyCollected.value = aPDetail.value.favoritesStatus;
  alreadyLiked.value = aPDetail.value.likeStatus;
  isApplied.value = aPDetail.value.applyStatus;

  if (isApplied.value == 0) {
      isAppliedstatus.value = "申请职位"
  } else {
      isAppliedstatus.value = "取消申请"
  }
  numf.value = aPDetail.value.favoritesNum;
  likenum.value = aPDetail.value.likeNum;
}
onMounted(() => {
  getvisitData();
  getData();
})
const getvisitData = async () => {
  let { data: res } = await addVisitNumApi(jobId);
  console.log(`get visited Data ${jobId}`, res);
}

const getDatasecond = async () => {
  const { data: res } = await getJobDetailApi(jobId);
  console.log('getDatasecond', res);
  aPDetail.value = res.data;
  alreadyCollected.value = aPDetail.value.favoritesStatus;
  alreadyLiked.value = aPDetail.value.likeStatus;
  isApplied.value = aPDetail.value.applyStatus;

  if (isApplied.value == 0) {
      isAppliedstatus.value = "申请职位";
  } else {
      isAppliedstatus.value = "已经申请";
  }
}



// 跳转查看兼职申请人列表
/* const goToList = (id: any) => {
  router.push("/apList/" + id);
}; */

//跳转到编辑页
const goToEdit = (id: string) => {
  router.push(`/campus/parttime/edit/${id}`);
};

//删除
const Delete = async () => {
  const { data: res } = await deleteJobApi(jobId);
  console.log(res);
  if (res.code === 0) {
      router.push("/delete");
  } else if (res.code === 1) {
    showDialog({
      title: '错误',
      message: '当前兼职状态不为关闭或未完成，无法删除',
    }).then(() => {});

  }

}

const goToDelete = () => {
  Delete();
};

//申请
const applyFn = async (jobId: string, jobVersion: number) => {
  //console.log(data)
  // 发送申请请求
  let result = await addJobApplyApi(jobId, jobVersion);
  console.log(result)
  if (result.data.code == 0) {
      getData();
      ElMessage({
          showClose: true,
          type: "success",
          message: "申请成功"
      });
  } else if (result.data.code == 1) {
      ElMessage({
          showClose: true,
          type: "error",
          message: "信用值不足，无法提交申请"
      });
  }
}

const goToApply = (jobId: string, version: number) => {
  // console.log(jobId, version);
  applyFn(jobId, version);
};

const goBack = () => {
  router.go(-1);
  // 使用Vue Router的go方法返回上一个页面
};
//* /添加收藏 
const addFavorite = async () => {
  const res = await favoritesJobApi(aPDetail.value.jobId)
  console.log(res)
  if (res.data.code == 0) {
      ElMessage({
          showClose: true,
          type: "success",
          message: "加入收藏成功"
      });
      getDatasecond()
      numf.value = res.data.data
  } else {
      cancelFavorite()
  }
}
const addLike = async () => {
  const res = await likeJobApi(aPDetail.value.jobId)
  console.log(res)
  if (res.data.code == 0) {
      ElMessage({
          showClose: true,
          type: "success",
          message: "点赞成功"
      });
      getDatasecond()
      likenum.value = res.data.data
  } else {
      ElMessage({
          showClose: true,
          type: "error",
          message: "点赞失败"
      });
  }
}
const cancelFavorite = async () => {
  const res = await cancelFavoritesJobApi(aPDetail.value.jobId)
  console.log(res)
  if (res.data.code == 0) {
      ElMessage({
          showClose: true,
          type: "success",
          message: "已取消收藏"
      });
      getDatasecond()
      numf.value = res.data.data
  } else {
      cancelFavorite()
  }
}
const cancelLike = async () => {
  const res = await cancelLikeJobApi(aPDetail.value.jobId)
  console.log(res)
  if (res.data.code == 0) {
      ElMessage({
          showClose: true,
          type: "success",
          message: "已取消点赞"
      });
      getDatasecond()
      likenum.value = res.data.data
  } else {
      ElMessage({
          showClose: true,
          type: "error",
          message: "无法取消点赞"
      });
  }
}
const toggleFavorite = () => {
  if (alreadyCollected.value == 0) {
      addFavorite()
  } else {
      // 调用取消收藏函数
      cancelFavorite();
  }
}
const toggleLike = () => {
  if (alreadyLiked.value == 0) {
      addLike();
  } else {
      cancelLike();
  }
} 
</script>

<style scoped lang="less">

.header-box {
  background-color: #f6f6f6;
  width: 100%;
  top: 0;
  position: fixed;
}

.user {
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1px 20px;

  .userinfo {
      display: flex;
      align-items: center;
  }

  .topic-wrap {
      background: #fff;
      box-shadow: 0 0px 3px 0 rgba(0, 0, 0, .02), 0 4px 8px 0 rgba(0, 0, 0, .02);
      align-items: center;



      .apply {
          margin-top: 6px;
          color: #73C975;
      }
  }
}

.content {
  padding: 10px;

  .price {
      margin-bottom: 20px;

      span {
          color: #FA4926;
          font-weight: bold;
      }

      .pricenum {
          font-size: 32px;
      }
  }

  .title {
      font-size: 24px;
      border: none;
      line-height: 34px;
      margin: 0px 0 18px 0;
      font-weight: bold;
  }

  .introduce {
      .detail {
          font-size: 18px;
          line-height: 30px;
      }

      .detailinfo {
          margin: 20px auto;
          //display: flex;
          align-items: center;

          .request {
              font-size: 15px;
              color: #ababab;
              padding: 1px;
          }

          .tag-container {
              margin-top: 10px;
              font-size: 15px;
              color: #ababab;

              span {
                  font-size: 15px;
                  border: 1px solid #ababab;
                  border-radius: 3px;
                  padding: 2px 5px;
                  margin-right: 8px;
              }
          }

          .time {
              margin-top: 10px;
              font-size: 15px;
              color: #ababab;
          }
      }

      img {
          width: 350px;
          height: 350px;
          margin: 5px auto;
          border-radius: 5px;
      }

      .createTime {
          margin-left: 160px;
          font-size: 12px;
          color: #ababab;
      }
  }

}

.interaction {
  height: 300px;

  .favorite-formModule {
      margin-top: 40px;
      text-align: center;
      margin-bottom: 10px;
      height: 10%;

      .numberButton {
          margin-right: 10px;

          .button {
              position: relative;
              color: #0A1629;
              background: #73C975;
              border: 1px solid #73C975;
              outline: none;
              display: inline-block;
              padding-left: 25px;
              padding-right: 25px;
              font-size: 16px;
              line-height: 32px;
              text-align: center;
              cursor: pointer;
              border-radius: 3px 0px 0px 3px;
              margin: 0;
              text-decoration: none;

              &:hover {
                  background: #73C975;
                  border: 1px solid #73C975;
              }
          }

          .number {
              position: relative;
              background-color: #73C975;
              color: #0A1629;
              background: none;
              border-top: 1px solid #73C975;
              border-bottom: 1px solid #73C975;
              border-right: 1px solid #73C975;
              outline: none;
              display: inline-block;
              padding-bottom: 0px;
              padding-left: 12px;
              padding-right: 12px;
              font-size: 16px;
              line-height: 32px;
              text-align: center;
              cursor: pointer;
              border-radius: 0px 3px 3px 0px;
              text-decoration: none;
          }
      }
  }

  .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .number {
          // margin-top: 1px;
          font-size: 6px;
          /* 调整上下间距 */
      }
  }



  /*   .mod-footbar {
      height: 20%;

      .mod-footbar-button1 {
          background-color: #73C975;
          color: #0A1629;
          border: 1px solid #73C975;
          margin-right: 2px;
      }

      .mod-footbar-button2 {
          background-color: #73C975;
          color: #0A1629;
          border: 1px solid #73C975;
      }

      .mod-footbar-button3 {
          background-color: #73C975;
          color: #0A1629;
          border: 1px solid #73C975;
      }
  } */
}


/* .message-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ccc;

  .arrow-icon {
      cursor: pointer;
      margin-right: 10px;
      color: #0A1629
  }

  .head-center {
      text-align: center;
      flex-grow: 1;
      color: #0A1629
  }

} */

/*    .common-layout {
          background: #fff;
          padding: 10px 10px 40px 10px;
          margin: 0px auto;
          height: 60%;

          .head {
              display: flex;
              justify-content: space-between;
              font-size: 12px;
              color: #ababab;

              .topic-wrap {
                  background: #fff;
                  box-shadow: 0 0px 3px 0 rgba(0, 0, 0, .02), 0 4px 8px 0 rgba(0, 0, 0, .02);
                  align-items: center;

                  .viewTotal-icon {
                      display: flex;
                      margin-left: 120px;
                      margin-top: 6px;


                      .mod-list-info {
                          margin-right: 6px;
                      }

                      .viewTotal {

                          margin-right: 20px;
                          font-size: 15px;
                      }


                  }

                  .postTime {
                      margin-top: 6px;
                  }

                  .apply {
                      margin-top: 6px;
                      color: #73C975;
                  }
              }
          }

          .box-card {
              margin-top: 10px;
              width: 100%;

              .topicBox {
                  height: auto;

                  .title {
                      font-size: 24px;
                      border: none;
                      line-height: 34px;
                      margin: 0px 0 18px 0;
                  }

                  .topicInfo {
                      margin-top: 10px;
                      font-size: 9px;
                      display: flex;



                      .salary {
                          margin-right: 20px;
                          color: #FA4926
                      }




                      .location {
                          margin-right: 20px;
                      }

                      .num {
                          margin-right: 20px;
                      }

                      .viewTotal {
                          margin-left: 3px;
                          margin-right: 20px;
                      }


                  }

                  .request {
                      font-size: 12px;
                      color: #ababab;
                      padding: 1px;
                  }

                  .tag-container {
                      margin-top: 10px;
                      font-size: 12px;
                      color: #ababab;

                      span {
                          border: 1px solid #ababab;
                          border-radius: 3px;
                          padding: 2px 5px;
                          margin-right: 8px;
                      }
                  }

              }

              .mod-column-body {
                  margin-bottom: 20px;

                  .product-text {
                      line-height: 1.5;
                  }

              }
          }

          .favorite-formModule {
              margin-top: 40px;
              text-align: center;
              margin-bottom: 10px;
              height: 10%;

              .numberButton {
                  margin-right: 10px;

                  .button {
                      position: relative;
                      color: #0A1629;
                      background: #73C975;
                      border: 1px solid #73C975;
                      outline: none;
                      display: inline-block;
                      padding-left: 25px;
                      padding-right: 25px;
                      font-size: 16px;
                      line-height: 32px;
                      text-align: center;
                      cursor: pointer;
                      border-radius: 3px 0px 0px 3px;
                      margin: 0;
                      text-decoration: none;

                      &:hover {
                          background: #73C975;
                          border: 1px solid #73C975;
                      }
                  }

                  .number {
                      position: relative;
                      background-color: #73C975;
                      color: #0A1629;
                      background: none;
                      border-top: 1px solid #73C975;
                      border-bottom: 1px solid #73C975;
                      border-right: 1px solid #73C975;
                      outline: none;
                      display: inline-block;
                      padding-bottom: 0px;
                      padding-left: 12px;
                      padding-right: 12px;
                      font-size: 16px;
                      line-height: 32px;
                      text-align: center;
                      cursor: pointer;
                      border-radius: 0px 3px 3px 0px;
                      text-decoration: none;
                  }
              }
          }
      } */
</style>