<template>
  <div class="collect-box">
    <goBackBar title-text="我的收藏" @handle-left="() => { router.push('/campus/user'); }"/>
  
    <div class="collect-main">
      <van-swipe-cell 
        v-for="item in MyCollectedList.values"
        :key="item.jobId"  
        class="item-cell">
        <van-card 
          :title="item.jobTitle" 
          :desc="item.deleted ? '该兼职已被删除' : ''"
          class="item-card" 
          @click="toPageD(item.jobId, item.deleted)"/>
        <template #right>
          <van-button square color="#FEC213" text="取消收藏" style="height: 100%;"/>
        </template>
      </van-swipe-cell>
    </div>
  
  </div>

  <!-- <div class="adjunct-card" v-for="item in MyCollectedList.values" v-bind:key="item.jobId" @click="toPageD(item.jobId)">
      <div class="card-left">
          <div class="title">{{ item.jobTitle }}</div>
      </div>
      <div class="card-right">
          <div class="price" v-if="item.deleted === true">兼职信息已被删除</div>
      </div>
  </div> -->
</template>

<script setup lang="ts">
import { reactive, onMounted, ref, toRaw } from 'vue';
import { searchFavoritesListApi } from '@/apis/parttime/index';
import type { collectedRecords } from '@/interfaces/parttime';
import { useRouter, useRoute } from 'vue-router';

import goBackBar from '@/components/go-back-bar/index.vue';
import { showConfirmDialog, showToast } from 'vant';


const router = useRouter();
const route = useRoute();
const userId: any = route.params.id;
const MyCollectedList = reactive<any>([]);

/* const toPage = (id: string) => {
  router.push("/apDetail/" + id);
}; */


const toPageD = (id: string, deleted: boolean) => {
  if (deleted) {
    showConfirmDialog({
      title: '提示',
      message: '该兼职已被删除, 是否取消收藏?'
    }).then(() => {
      showToast('取消收藏成功');
    }).catch(() => {});
  } else {
    router.push(`/campus/parttime/detail/${id}`);
  }
};
const getData = async () => {
  const { data: res } = await searchFavoritesListApi(userId);
  //console.log(result.data.data)
  console.log('searchFavoritesList', res);

  if (res.code === 0) {
    MyCollectedList.values = res.data;
  }

  console.log(MyCollectedList.values);

  // MyCollectedList.values = result.data.data;
  //console.log(result[0]);
}

onMounted(getData);




</script>

<style scoped lang="less">
.collect-box {
  .collect-main {
    width: 100%;
    margin-top: 60px;
    .item-cell {
      // border: 1px solid #0f0;
      margin-bottom: 10px;
      .item-card {
        background: #efefef;
      }
    }
    // .item-cell:last-child {
    //   margin-bottom: 55px;
    // }

  }
}










// body {
//   display: flex;
//   justify-content: center;
//   /* 水平居中 */
//   align-items: center;

//   /* 垂直居中 */
//   .message-title {
//       display: flex;
//       align-items: center;
//       justify-content: space-between;
//       padding: 10px;
//       border-bottom: 1px solid #ccc;
//   }

//   .arrow-icon {
//       cursor: pointer;
//       margin-right: 10px;
//       color: #0A1629
//   }

//   .head-center {
//       text-align: center;
//       flex-grow: 1;
//       color: #0A1629
//   }

//   .adjunct-card {
//       display: grid;
//       grid-template-columns: 3fr 2fr; //把兼职简介分左右区域
//       height: 40px;
//       margin: 12px;
//       background-color: #fff;
//       border: 1px solid rgb(213, 213, 213, 0.3);
//       border-radius: 8px;

//       .card-left {
//           display: grid;
//           grid-template-rows: repeat(3, 1fr);
//           align-items: center;
//           margin: 8px;

//           .title {
//               font-size: 18px;
//               font-weight: 700;


//           }

//       }

//       .card-right {
//           display: grid;
//           grid-template-rows: repeat(3, 1fr);
//           align-items: center;
//           font-size: 16px;
//           margin: 8px;
//           text-align: end;

//           .price {
//               font-size: 18px;

//               color: #ff422c;

//           }

//       }

//   }

// }
</style>