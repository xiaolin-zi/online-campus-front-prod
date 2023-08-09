<template>
  <div>
    <van-tabbar v-model="active" active-color="#ffe304">
        <van-tabbar-item name="home" icon="wap-home">首页</van-tabbar-item>
        <van-tabbar-item name="friends" icon="friends">交际</van-tabbar-item>
        <van-tabbar-item name="chat" icon="chat">消息</van-tabbar-item>
        <van-tabbar-item name="manager" icon="manager">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const active = ref('home')
</script>

<style scoped>

</style>