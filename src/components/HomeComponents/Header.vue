<template>
  <!-- 页面头部组件， -->
  <div class="headerContain">
   
        <!-- 搜索栏 -->
          <van-search
            v-model="value"
            shape="round"
            placeholder="Search menu,restaurant or etc"
            show-action
            autofocus
            @search="onSearch"
          >
          <template #action>
            <div @click="onClickButton">|&nbsp&nbsp搜索</div>
          </template>

          </van-search>
  </div>
  
  </template>
  
  <script setup lang="ts">
//   import {ref} from 'vue'
//   import { useRouter,useRoute } from 'vue-router'
//   import { RouterLink } from 'vue-router';
//   //引入本地图片函数
//    const getImageUrl = (name:string) => {
//         return new URL(`../../assets/${name}`, import.meta.url).href
//     }
//   //控制发布按钮
//   interface ActionItem {
//   name: string;
// }

//     const show = ref(false)
//     const actions: ActionItem[] = [
//           { name: '发布交易' },
//           { name: '发布兼职' },
//           { name: '发布招募' },
//         ];
   
//     // tab标签页
//     const activeName = ref('deal')
//     //标签跳转路由逻辑

//     const router = useRouter()
//     const onClickTab = ({ name }) =>router.push(name)  
    // }

    import { ref } from 'vue';
    import { showToast } from 'vant';

    const value = ref('');
    const onSearch = (val:string) => showToast(val);
    const onClickButton = () => showToast(value.value);
  </script>
  
  <style lang="less">
  .headerContain{
    display: flex;
    justify-content: center;
    //吸顶定位
    position:sticky;
    top: 0;
    z-index: 999;
    background-color: #fff;
    .van-search{
      width: 90%;
      border: 2px solid #e5e5e5;
      border-radius:40px;
      --van-search-content-background:white;
      --van-search-padding:0 10px;
      margin: 20px 0 10px 0;
      .van-search__action{
        padding-right: 20px;
        
      }
      
    }

  }

    
  
  
  </style>
  