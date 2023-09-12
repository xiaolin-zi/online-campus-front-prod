<template>
  <div class="go-back-bar-box">
    <van-nav-bar class="header-box">
      <template #left>
        <van-icon name="arrow-left" size="22" color="#0a1629" @click="handleLeft"/>
        &nbsp;<p>{{ leftText }}</p>
      </template>
      <template #title>
        <p class="title">{{ titleText }}</p>
      </template>
    </van-nav-bar>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  leftText: { type: String, default: '' },
  rightText: { type: String, default: '' },
  titleText: { type: String, default: '' },
});
const emits = defineEmits(['handle-left','handle-right']);

const handleLeft = () => {
  emits('handle-left');
}
const handleRight = () => {
  emits('handle-right');
}

</script>

<style lang="less" scoped>
.go-back-bar-box {
  .header-box {
    width: 100%;
    z-index: 100;
    overflow: hidden;
    top: 0;
    position: fixed;
    height: 50px;
    background: #f6f6f6;
    .title {
      color: #0a1629;
      line-height: 50px;
      text-align: center;
      font-size: 22px;
    }
  }
}
</style>