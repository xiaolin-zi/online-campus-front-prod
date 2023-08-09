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
<template>
  <Header/>
  <Banner/>
  <Main/>
  <Navbar/>
  </template>
  
  <script setup lang="ts">
  import Header from "@/components/HomeComponents/Header.vue";
  import Main from '@/components/HomeComponents/Main.vue'
  import Banner from '@/components/HomeComponents/Banner.vue'
  import Navbar from '@/components/HomeComponents/Navbar.vue'
  
  </script>
  
  <style>
  body{
    background-color: #f6f6f6;
  }
  
  
  </style>
  