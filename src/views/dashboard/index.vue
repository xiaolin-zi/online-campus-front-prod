<!-- <template>
  <div class="test-index-box">
    <div class="title">
      <p>这是首页(测试版)</p>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="less" scoped>
.test-index-box {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .title {
    text-align: center;
    font-size: 40px;
    color: #6f6f6f;
  }
}
</style> -->
<!-- 首页 -->
<template>
  <Header/>
  <Banner/>
  <!-- tab标签页按钮 -->
  <div class="home-tab">
      <RouterLink to="/campus/dashboard">
        <span>交易</span>
      </RouterLink>
      
      <RouterLink to="/campus/dashboard/adjunct">
        <span>兼职</span>
      </RouterLink>
    </div>

  <Main/>

  </template>
  
  <script setup lang="ts">
  import Header from "@/components/HomeComponents/Header.vue";
  import Main from '@/components/HomeComponents/Main.vue'
  import Banner from '@/components/HomeComponents/Banner.vue'
  import { RouterLink } from "vue-router";
  </script>
  
  <style lang="less">
body{
    
  .home-tab{
    height: 50px;
    width: 100%;
    font-size: 18px;
    display: flex;
    justify-content:flex-start;
    align-items: center;
    margin-bottom: 5px;
      span{
        margin-left: 20px;
        color: black;
      } 
    }
  }
  
  </style>
  