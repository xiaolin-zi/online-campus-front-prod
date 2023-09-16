<template>
  <div class="comment-receive-box">
    <goBackBar title-text="收到的评论及回复" @handle-left="router.go(-1);"/>
    <div class="main-box">

    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import goBackBar from '@/components/go-back-bar/index.vue';

const router = useRouter();
</script>

<style lang="less" scoped>
.comment-receive-box {
  width: 100%;
  overflow: hidden;
  .main-box {
    margin-top: 55px;
  }
}
</style>