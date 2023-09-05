<template>
  <div class="row" v-for="item in dealCard" :key="item.productId">
    <div class="deal-card" v-for="i in 2">
      <div class="card-img">
        <img :src="item.images[0]" alt="">
      </div>
      <div class="card-message">
        <div class="title">{{ item.categoryName }}</div>
        <div class="features">{{ item.subCategoryName }}</div>
        <div class="price">￥{{ item.price }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { Product } from '@/interfaces/trade';
import { getTradeApi } from '@/apis/trade/index';

const dealCard = reactive<Product[]>([]);
const lazyLoadDealCard = async() => {
  const { data: res } = await getTradeApi(0);
  console.log('deal', res);
  if (res.code === 0) {
    dealCard.values = res.data;
  }
}

onMounted(lazyLoadDealCard);
</script>

<style scoped lang="less">
.row{
  display: flex;
  justify-content: space-around;
  margin:0 10px 15px 10px;
}
.deal-card{
  display: grid;;
  grid-template-rows: 3fr 2fr;
  height: 180px;
  width: 45%;
  border: 1px solid rgb(213, 213,213,0.3) ;
  border-radius:8px;
  .card-img{

    display: flex;
    height: 108px;
    justify-content: center;
    align-items: center;
    
      img{
      object-fit:cover;
      border-radius:6px;
      width: 100%;
      height: 100%;
    }
  }
  .card-message{
    display: grid;
    align-items: center;
    margin: 5px;
    .title{
            font-size: 16px;
            font-weight:700;
    }
    .features{
            font-size:12px;
            color:#ababab;
            padding: 1px;
    }
    .price{
            font-size:18px;
           
            color:#ff422c;
    }
  }
}
</style>