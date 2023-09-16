<template>
  <div class="like-receive-box">
    <goBackBar title-text="收到的赞" @handle-left="router.go(-1);"/>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import goBackBar from '@/components/go-back-bar/index.vue';

const router = useRouter();

</script>

<style lang="less" scoped>
.like-receive-box {

}
</style>