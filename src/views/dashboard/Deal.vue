<template>
    <div>
    <van-grid :column-num="2" gutter="15" clickable>
      <van-grid-item v-for="(item,index) in items" :key='index' :to='`${ item.url }`'>
        <van-image :src="item.image" />
        <span class="goodsName">{{ item.name }}</span>
        <span>
          <van-tag v-for="(labelItem,labelIndex) in item.label" :key='labelIndex' plain>{{ labelItem }}</van-tag>
        </span>
        <span class="goodsPrice">￥{{ item.price }}</span>
        
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
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
.van-grid-item__content {
display: grid;



  .goodsName{
  display: flex;
  font-size: 16px;
 
  color:black;
  margin-bottom: 5px;
}
 .goodsPrice{
  font-size: 18px;
 
  color:#ed5d47;
}
  .van-tag{
    margin-right: 5px;
  }
}

</style>