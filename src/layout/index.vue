<!-- 导航栏，全局 -->
<template>
  <div class="layout-box">
    <!-- 子路由出口 -->
    <div class="layout-main">
      <router-view/>
    </div>
    <van-tabbar v-model="active" class="tabber" active-color="#73ca76" route>
      <van-tabbar-item class="tab" to="/campus/dashboard">
        <template #icon>
          <van-icon name="wap-home-o" size="18"/>
        </template>
        <span>首页</span>
      </van-tabbar-item>
      <van-tabbar-item class="tab" to="/campus/contact">
        <template #icon>
          <van-icon name="eye-o" size="18" dot/>
        </template>
        <span>发现</span>
      </van-tabbar-item>
      <van-tabbar-item class="tab" to="/campus/message">
        <template #icon>
          <van-icon name="chat-o" size="18" dot/>
        </template>
        <span>消息</span>
      </van-tabbar-item>
      <van-tabbar-item class="tab" to="/campus/user"  >
        <template #icon>
          <van-icon name="contact" size="18" dot/>
        </template>
        <span>我的</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const active = ref(0);

</script>

<style lang="less" scoped>
.layout-box {
  width: 100%;
  height: 100%;
  overflow: hidden;

  .tabber {
    height: 50px;
    border-top: 1px solid #d3d3d3 ;
  }
}
</style>