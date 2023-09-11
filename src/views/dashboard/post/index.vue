<template>
    <goBack/>

    <div :class="item.itemClass" v-for="item in postSelectList" :key="item.title">
      <button @click="() => { router.push(item.toPath); }">
        <div class="button-left">
          <span class="title-style">{{ item.title }}</span>
          <br>
          <span class="text-style">{{ item.text }}</span>
        </div>
        <div class="button-right">
          <van-icon name="arrow" />
        </div>
      </button> 
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import goBack from '@/components/NavBars/goback.vue'

const onClickLeft = () => history.back();
const router = useRouter();

const postSelectList = reactive([
  { title: '发布兼职', text: '好的兼职，都在这里', toPath: '/campus/parttime/postAdjunct', itemClass: 'post-adjunct' },
  { title: '发布交易', text: '30s快速发布交易', toPath: '', itemClass: 'post-deal' },
]);
</script>

<style scoped lang="less">
.post-adjunct {
  display: flex;
  color: black;
  justify-content: center;
  align-items: center;
  margin: 15px;
  button {
    display: flex;
    font-size:16px;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    width: 90%;
    height: 80px;
    background-color:#D4F4Df;
    border: none;
    border-radius: 10px;
    //设置点击效果
    transition: background-color 0.1s;
    .button-left {
      text-align: left;
      .title-style {
        font-size: 18px;
        font-weight: 700;
      }
      .text-style {
        font-size: 14px;
        color: gray;
      }
    }
    .button-right {
      text-align: right;
    }   
  }
  button:active {
    background-color: rgba(0,0,0,0.3);
  }
}
.post-deal {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px;
  color: black;
  button {
    display: flex;
    font-size:16px;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    width: 90%;
    height: 80px;
    background-color:#FEE0DA;
    border: none;
    border-radius: 10px;
    //设置点击效果
    transition: background-color 0.1s;
    .button-left {
      text-align: left;
      .title-style {
        font-size: 18px;
        font-weight: 700;
      }
      .text-style {
        font-size: 14px;
        color: gray;
      }
    }
  }
  button:active {
    background-color: rgba(0,0,0,0.3);
  }
}
</style>