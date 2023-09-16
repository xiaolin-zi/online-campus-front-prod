<template>
  <div class="detail-box">
    <goBackBar title-text="动态详情" @handle-left="() => { router.go(-1); }"/>
    <div class="main-box">
      {{ curId }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import goBackBar from '@/components/go-back-bar/index.vue';
import type { Dynamic } from '@/interfaces/contact';
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const curId = route.params.id;

onMounted(() => { console.log(curId); });
</script>

<style lang="less" scoped>
.detail-box {
  width: 100%;
  overflow: hidden;
  .main-box {
    margin-top: 55px;
  }
}
</style>