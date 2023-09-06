<template>
  <div class="post-bubble-box">
    <!-- 加号 -->
    <router-link to="/campus/dashboard/post">
      <div class="bubble-container">
        <div class="custom-bubble">
          <van-icon name="plus" class="bubble-icon" />
        </div>
      </div>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<style scoped lang="less">
.post-bubble-box {
  width: 100%;
  /* 发布图标 */
  .bubble-container {
    position: fixed;
    bottom: 70px; /* 距离屏幕底部的距离 */
    right: 20px; /* 距离屏幕右侧的距离 */
    .custom-bubble {
      background-color: #73ca76; 
      border-radius: 50%; 
      width: 40px; 
      height: 40px; 
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* 添加阴影效果 */
      .bubble-icon {
        color: #ffffff;
        font-size: 20px; 
      }
    }
  }
}
</style>