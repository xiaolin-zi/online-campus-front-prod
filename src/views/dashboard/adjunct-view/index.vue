<template>
  <!-- 这里先渲染10个，后期把10换成存放数据的store对象、数组名即可 -->
  <div class="adjunct-view-box">
    <div class="adjunct-card" v-for="item in adjunctCardList" :key="item.jobId">
      <!-- 卡片左边（占据3/5） -->
      <div class="card-left">
        <div class="title">{{ item.jobTitle }}</div>
        <div class="request">应届生·三个月·不加班</div>
        <div class="tag-container">
          <span>实习生</span><span>可大一大二</span>
        </div>
      </div>

      <!-- 卡片右边（占据2/5）按照要求公司名字长度<=6 -->
      <div class="card-right">
        <div class="price">￥{{ item.salary }}</div>
        <div class="time">2023-08-09</div>
        <div class="company">
          <!-- 公司图标 -->
          <div class="company-logo">
            <img :src="item.userImage" alt="">
          </div>
          {{ item.username }}
        </div>
      </div>
    </div>

    <van-loading size="24px" v-if="isLoading" class="loading-box" text-size="20px">Loading...</van-loading>
    <van-empty image="network" description="网络出错啦!" v-show="isNetworkError && !isLoading"/>
    <van-empty description="一片空白......" v-show="adjunctCardList.length === 0 && isLoading === false"/>
  </div>
</template>

<script setup lang="ts">
import { Job } from '@/interfaces/parttime';
import { ref , reactive, onMounted } from 'vue';
import { getAdjunctApi } from '@/apis/parttime/index';
import { showToast } from 'vant';


const adjunctCardList = ref<Job[]>([])//存放数据
const isLoading = ref(true);
const isNetworkError = ref(false);

const lazyLoadingAdjunctList = async() => {
  try {
    const { data: res } = await getAdjunctApi(0);
    console.log('lazyLoadingAdjunctList', res);
    if (res.code === 0) {
      adjunctCardList.value = res.data;
    }
  } catch(err: any) {
    console.log('Network Error: ', err);
    isNetworkError.value = true;
  } finally {
    isLoading.value = false;
  }
}

onMounted(lazyLoadingAdjunctList);

</script>

<style scoped lang="less">

.adjunct-view-box {
  // border: 1px solid #f00;
  width: 100%;
  height: 100%;
  margin-top: 20px;
  margin-bottom: 100px;

  .loading-box {
    color: #0a1629;
    text-align: center;
  }

  .adjunct-card {
    display: grid;
    grid-template-columns:3fr 2fr;//把兼职简介分左右区域
    height: 90px;
    margin: 0 18px 12px 18px;
    background-color: #fff;
    border: 1px solid rgb(213, 213,213,0.3) ;
    border-radius:8px;
    .card-left {
      display: grid;
      grid-template-rows: repeat(3, 1fr); 
      align-items: center;
      margin: 8px;
      .title {
        font-size: 16px;
        font-weight:700;   
      }
      .request {
        font-size:12px;
        color:#ababab;
        padding: 1px;
      }
      .tag-container {
        font-size:12px;
        color:#ababab;
        span {
          border: 1px solid #ababab;
          border-radius: 3px;
          padding: 2px 5px;
          margin-right:8px;
        }
      }  
    }
    .card-right {
      display: grid;
      grid-template-rows: repeat(3, 1fr); 
      align-items: center;
      font-size:16px;
      margin: 8px ;
      text-align: end;

      .price {
        font-size:18px;
        color:#fa4926;
      }
      .time {
        font-size:12px;
        color:#ababab;    
      }
      .company {
        display: flex;
        align-items:center;
        justify-content:flex-end;
        font-size:14px;
        color:#3b3b3b;
        .company-logo {
          width: 20px;
          height: 20px;
          border: 1px solid rgb(213, 213, 213);
          border-radius: 50%;
          overflow: hidden;
          margin-right:5%;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }
  }
}


// body{  
//   display: flex;
//   justify-content: center; /* 水平居中 */
//   align-items: center; /* 垂直居中 */
// }

</style>