<template>
  <Header/>
  <Banner/>
  <!-- tab标签页按钮 -->
  <div class="home-tab">
    <van-tabs 
      v-model:active="activeTab" 
      color="#73c975" 
      swipeable>
      <van-tab 
        v-for="tab in tabList" 
        :key="tab.name" 
        :title="tab.title" 
        :name="tab.name" 
        :to="tab.toPath">
        <router-view/>
      </van-tab>
    </van-tabs>
  </div>

  <PostBubble/>
</template>
  
<script setup lang="ts">
import Header from "@/components/HomeComponents/Header.vue";
import PostBubble from '@/components/post-bubble/index.vue';
import Banner from '@/components/HomeComponents/Banner.vue';
import { ref, reactive } from 'vue';

const tabList = reactive([
  { title: '交易', name: 'trade', toPath: '/campus/dashboard/deal' },
  { title: '兼职', name: 'parttime', toPath: '/campus/dashboard/adjunct' }
]);
const activeTab = ref(0);

</script>
  
<style lang="less" scoped>
</style>
  