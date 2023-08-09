<template>
  <!-- 页面头部组件， -->
  <div class="headerContain">
    <van-row>
    <!-- logo -->
      <van-col>
        <van-image
          style="display: flex;"
          height="30"
          fit="contain"
          :src="getImageUrl('要发财.png')"
        />
      </van-col>
      <van-col span="18">
        <!-- 搜索栏 -->
        <form action="/">
          <van-search
            shape="round"
            placeholder="请输入搜索关键词"
            input-align="center"
          />
        </form>
      </van-col>
      <!-- 发布 -->
      <van-col>
        <van-button 
        style="display: flex;"
        is-link 
        @click="show=true" 
        icon="plus" round 
        type="primary" 
        color="#ffe304" 
        size="small"/>
        <van-action-sheet v-model:show="show" :actions="actions"  />
      </van-col>
    </van-row>
    <!-- tab标签页 -->
    <van-tabs 
     v-model:active="activeName" 
     color="#ffe304" 
     line-width="30px"
     @click-tab="onClickTab"
     >
          
          <van-tab title="交易" name="deal" ></van-tab>

          <van-tab title="兼职" name="adjunct"></van-tab>
         
      
     </van-tabs>
  </div>
  
  </template>
  
  <script setup lang="ts">
  import {ref} from 'vue'
  import { useRouter,useRoute } from 'vue-router'
  import { RouterLink } from 'vue-router';
  //引入本地图片函数
   const getImageUrl = (name:string) => {
        return new URL(`../../assets/${name}`, import.meta.url).href
    }
  //控制发布按钮
  interface ActionItem {
  name: string;
}

    const show = ref(false)
    const actions: ActionItem[] = [
          { name: '发布交易' },
          { name: '发布兼职' },
          { name: '发布招募' },
        ];
   
    // tab标签页
    const activeName = ref('deal')
    //标签跳转路由逻辑

    const router = useRouter()
    const onClickTab = ({ name }) =>router.push(name)
    
      
    // }


  </script>
  
  <style lang="less">
  .headerContain{
    //吸顶定位
    position:sticky;
    top: 0;
    z-index: 999;
    background-color: #fff;
    border-bottom: 1px solid #f2f2f2;
    .van-row{
      display: flex;
      justify-content: center;
      align-items: center; 
     }
  }

    
  
  
  </style>
  