<template>
    <div>
       <goBack/> 

       <div class="myBalance">
        <div><van-icon name="gold-coin" color="#ffc403" size="50"/></div>
        <div class="count">我的余额<br><p>15.61</p></div>
       </div>

       <div class="balance-button">
        <van-button type="primary" size="large" color="#73ca76">充值</van-button>
       <van-button plain type="primary" size="large" color="#73ca76">余额明细</van-button>
       </div>
    </div>
</template>

<script setup lang="ts">
import goBack from '@/components/NavBars/goback.vue'
</script>

<style scoped lang="less">
.myBalance{
    display: flex;
    flex-direction: column;
    height: 160px;
    justify-content: space-around;
    align-items: center;
    margin: 50px;
    .count{
        font-size: 12px;
        text-align: center;
        p{
            font-size: 40px;
            font-weight: 700;
            padding: 5px;
        }
    }
}
.balance-button{
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .van-button{
      --van-button-large-height:40px;
      width: 35%;
      margin:0 20px 15px 20px;      
      border-radius:8px;
    }
}
</style>