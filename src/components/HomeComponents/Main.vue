<template>
  <div class="main">
  
    <router-view />
    <!-- 加号 -->
  <div class="bubble-container">
    <div class="custom-bubble">
      <van-icon name="plus" class="bubble-icon" />
    </div>
  </div>
  </div>
  
</template>

<script setup lang="ts">

</script>

<style scoped lang="less">
.main{
  width: 100%;
  height: 350px;
  overflow: auto;
  /* 悬浮气泡容器 */
.bubble-container {
  position: fixed;
  bottom: 70px; /* 距离屏幕底部的距离 */
  right: 20px; /* 距离屏幕右侧的距离 */
    /* 自定义悬浮气泡的样式 */
    .custom-bubble {
        background-color: #73ca76; /* 修改为你想要的颜色值 */
        border-radius: 50%; /* 使气泡变为圆形 */
        width: 40px; /* 修改为你想要的宽度 */
        height: 40px; /* 修改为你想要的高度 */
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* 添加阴影效果 */
            
        .bubble-icon {
            color: #ffffff; /* 修改为你想要的颜色值 */
            font-size: 20px; /* 修改为你想要的图标大小 */
       }
  }
 }
}
</style>