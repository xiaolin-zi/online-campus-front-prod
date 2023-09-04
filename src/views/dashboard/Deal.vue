<template>
 <div class="row" v-for="item in 6">
  <div class="deal-card" v-for="item in 2">
    <div class="card-img">
      <img src="../../assets/晚霞.jpg" alt="">
    </div>
    <div class="card-message">
      <div  class="title">实用的家具套餐</div>
        <div  class="features">应届生·三个月·不加班</div>
        <div class="price">￥666</div>
    </div>
  </div>
 </div>
</template>

<script setup lang="ts">


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