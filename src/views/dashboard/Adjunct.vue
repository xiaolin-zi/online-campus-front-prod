<template>
    <!-- 这里先渲染10个，后期把10换成存放数据的store对象、数组名即可 -->
  <div class="adjunct-card" v-for="item in adCard" :key="item.jobId">
    <!-- 卡片左边（占据3/5） -->
    <div class="card-left">
        <div  class="title">{{ item.jobTitle }}</div>
        <div  class="request">应届生·三个月·不加班</div>
        <div  class="tag-container">
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
  
  
</template>

<script setup lang="ts">
import { Job } from '@/interfaces/parttime';
import { ref , reactive, onMounted } from 'vue';
import { getAdjunctApi } from '@/apis/parttime/index';
import { showToast } from 'vant';


const lazy = ref<Job>();
let adCard = ref<Job[]>([])//存放数据
const lazyloading = async() => {
    const { data: res } = await getAdjunctApi(0);
    console.log(res);
    if (res.code === 0) {
      // lazy.value = res.data;
      adCard.value = res.data;
    } else {
      showToast('内部出错, 请稍后重试...');
    }
    // adCard.value = lazy.value.data.data

    // console.log(adCard.value);
    
}
onMounted(lazyloading);
</script>

<style scoped lang="less">
body{  
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */

    .adjunct-card{
    display: grid;
    grid-template-columns:3fr 2fr;//把兼职简介分左右区域
    height: 90px;
    margin: 0 18px 12px 18px;
    background-color: #fff;
    border: 1px solid rgb(213, 213,213,0.3) ;
    border-radius:8px;
    .card-left{
        display: grid;
        grid-template-rows: repeat(3, 1fr); 
        align-items: center;
        margin: 8px;
    
        .title{
            font-size: 16px;
            font-weight:700;   
        }
        .request{
            font-size:12px;
            color:#ababab;
            padding: 1px;
        }
        .tag-container {
            font-size:12px;
            color:#ababab;
            span{
                border: 1px solid #ababab;
                border-radius: 3px;
                padding: 2px 5px;
                margin-right:8px;
            }
        }
        
    }
    .card-right{
        display: grid;
        grid-template-rows: repeat(3, 1fr); 
        align-items: center;
        font-size:16px;
        margin: 8px ;
        text-align: end;

        .price{
            font-size:18px;
           
            color:#fa4926;

        }
        .time{
            font-size:12px;
            color:#ababab;
            
        }
        .company{

            display: flex;
            align-items:center;
            justify-content:flex-end;
            font-size:14px;
            color:#3b3b3b;
            .company-logo{
                width: 20px;
                height: 20px;
                border: 1px solid rgb(213, 213, 213);
                border-radius: 50%;
                overflow: hidden;
                margin-right:5%;
                    img{
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
            }
        }
    }

}

}



</style>