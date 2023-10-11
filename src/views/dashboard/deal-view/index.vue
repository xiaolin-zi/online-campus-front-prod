<template>
  <div class="deal-view-box">
    <div class="row" v-for="item in dealCardList.values" :key="item.productId">
      <div class="deal-card" v-for="i in 2">
        <div class="card-img">
          <img :src="item.images[0]" alt="">
        </div>
        <div class="card-message">
          <div class="title">{{ item.description }}</div>
          <div class="features">{{item.categoryName}} | {{item.subCategoryName }}</div>
          <div class="price">￥{{ item.price }}</div>
          <img :src="item.userAvatar" alt="" style="vertical-align:middle;">{{item.userName}}
        </div>

      </div>
    </div>

    <van-loading size="24px" v-if="isLoading" class="loading-box" text-size="20px">Loading...</van-loading>
    <van-empty image="network" description="网络出错啦!" v-show="isNetworkError && !isLoading"/>
    <van-empty description="一片空白......" v-show="dealCardList.values.length === 0 && isLoading === false"/>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { Product } from '@/interfaces/trade';
import { getTradeApi } from '@/apis/trade/index';

const dealCardList = reactive<any>([]);
const isLoading = ref(true);
const isNetworkError = ref(false);

const lazyLoadDealCardList = async() => {
  try {
    const { data: res } = await getTradeApi(0);
    console.log('lazyLoadDealCardList', res);
    if (res.code === 0) {
      dealCardList.values = res.data;
    }
  } catch(err: any) {
    console.log('Network Error: ', err);
    isNetworkError.value = true;
  } finally {
    isLoading.value = false;
  }
}
onMounted(lazyLoadDealCardList);



</script>

<style scoped lang="less">
.userName{
  width: 50px;
  font-size: 10px;
}
.card-message img{
  width: 18px;
  height: 18px;
  border-radius: 10px;
}
.deal-view-box {
  // border: 1px solid #f00;
  width: 100%;
  height: 100%;
  margin-top: 20px;
  margin-bottom: 100px;
  .loading-box {
    color: #0a1629;
    text-align: center;
  }
  .row {
    display: flex;
    justify-content: space-around;
    margin:0 10px 15px 10px;
  }
  .deal-card {
    display: grid;;
    grid-template-rows: 3fr 2fr;
    height: 200px;
    width: 45%;
    border: 1px solid rgb(213, 213,213,0.3) ;
    border-radius:8px;
    .card-img {
      display: flex;
      height: 108px;
      justify-content: center;
      align-items: center;
    img {
      object-fit:cover;
      border-radius:6px;
      width: 100%;
      height: 100%;
    }
  }

  .card-message {
    display: grid;
    align-items: center;
    margin: 5px;
      .title {
        font-size: 14px;
        font-weight:700;
        white-space: nowrap;
        overflow: hidden;
        //text-overflow: ellipsis;
      }
      .features {
        font-size:12px;
        color:#ababab;
        padding: 1px;
      }
      .price {
        font-size:18px;
        color:#ff422c;
      }
    }
  }
}

</style>
