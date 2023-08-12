<template>
  <div class="deal-card">
    <div class="card-img"></div>
      <img src="../../assets/晚霞.jpg" alt="">
    <div class="card-message"></div>

  </div>
</template>

<script setup lang="ts">

// 假定的静态数据：其中url为商品卡片点击后跳转的详情页面路由地址
const items = [
  {
    name: '商品1',
    image: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
    price:'8888',
    label:['5G','大屏幕','好手机'],
    url:''
  },
  {
    name: '商品2',
    image: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
    price:'8888',
    label:['液晶屏','超清'],
    url:''
  },
  {
    name: '商品3',
    image: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-3.jpeg',
    price:'8888',
    label:['5G','大屏幕','好手机'],
    url:''
  },
  {
    name: '商品4',
    image: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
    price:'8888',
    label:['5G','大屏幕'],
    url:''
  },
  {
    name: '商品5',
    image: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
    price:'8888',
    label:['5G','大屏幕'],
    url:''
  },
  {
    name: '商品6',
    image: 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-3.jpeg',
    price:'8888',
    label:['5G','大屏幕'],
    url:''
  }
]
</script>

<style scoped lang="less">
.deal-card{
  display: grid;;
  grid-template-rows: 4fr 3fr;
  height: 160px;
  width: 45%;
  margin: 0 18px 12px 18px;
  border: 1px solid rgb(213, 213,213,0.3) ;
  border-radius:8px;
  .card-img{
    background-color:pink;
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
      img{
      object-fit:contain;

    }
  
}

}
</style>