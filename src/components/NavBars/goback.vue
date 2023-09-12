<template>
<!-- 左边带有箭头和返回字体的顶部返回栏组件封装，背景为白色，箭头与字体颜色为黑色 -->
  <div>
    <van-nav-bar
      left-text="返回"
      :border=false
      :safe-area-inset-top=true
      @click-left="onClickLeft">
      <template #left>
        <van-icon name="arrow-left" size="22" color="black" />
      </template>
    </van-nav-bar>
  </div>
</template>

<script setup lang="ts">
const onClickLeft = () => history.back();
</script>

<style scoped lang="less">
.van-nav-bar{
  --van-nav-bar-background:#f6f6f6;
}
</style>