<template>
  <div class="layout-box">
    <div class="layout-main">
      <router-view/>
    </div>
    <van-tabbar v-model="active" class="tabber" active-color="#73c975" route>
      <van-tabbar-item
        v-for="item in tabbarItemList" 
        :key="item.title" 
        class="tab" 
        :to="item.toPath">
        <template #icon>
          <van-icon :name="item.iconName" size="18" dot/>
        </template>
        <span>{{ item.title }}</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue';

const active = ref(0);
// onMounted(() => { active.value = 0; });

const tabbarItemList = reactive([
  { toPath: '/campus/dashboard', iconName: 'wap-home-o', title: '首页' },
  { toPath: '/campus/contact', iconName: 'eye-o', title: '发现' },
  { toPath: '/campus/message', iconName: 'chat-o', title: '消息' },
  { toPath: '/campus/user', iconName: 'contact', title: '我的' }
]);

</script>

<style lang="less" scoped>
.layout-box {
  width: 100%;
  height: 100%;

  .tabber {
    background: #f6f6f6;
    height: 55px;
    .tab {
      background: #f6f6f6;
      color: #0a1629;
    }
    border-top: 1px solid #d3d3d3 ;
  }
}
</style>