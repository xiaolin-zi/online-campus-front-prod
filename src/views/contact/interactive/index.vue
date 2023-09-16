<template>
  <div class="interactive-box">
    <goBackBar title-text="互动" @handle-left="() => { router.go(-1); }"/>
    <div class="main-box">

      <div class="interactive-item" 
        v-for="item in itemList" 
        :key="item.text" 
        @click="() => { router.push(item.toPath); }">
        <div class="icon-box">
          <van-icon :name="item.iconName" color="#f6f6f6" size="28"/>
        </div>
        <p>{{ item.text }}</p>
        <div class="right-icon">
          <van-icon name="arrow" color="#0a1629" size="28"/>
        </div>
      </div>

      <van-empty
        :image="emptyImage"
        image-size="100"
        description="发布了帖子和回复后才能收到提醒哦"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted, toRaw } from 'vue';
import { useRouter } from 'vue-router';
import emptyImage from '@/assets/img/custom-empty-image.png';
import goBackBar from '@/components/go-back-bar/index.vue';
import { useGlobalStore } from '@/stores/useGlobalStore';
import { searchOnesDynamicApi } from '@/apis/contact/dynamic';
import type { Dynamic } from '@/interfaces/contact';

const router = useRouter();
const globalStore = useGlobalStore();

const itemList = reactive([
  { text: '收到的赞', iconName: 'good-job', toPath: '/campus/contact/interactive/like-receive' },
  { text: '收到的评论', iconName: 'comment', toPath: '/campus/contact/interactive/comment-receive' }
]);
const dynamicList = reactive<any>([]);
const allLikes = reactive<any>([]);
const allComments = reactive<any>([]);

interface likeReceiveDto {
  likeId: string,
  likeName: string,
}

interface commentReceiveDto {
  senderId: string,
  senderName: string,
}

const getMyContacts = async () => {
  const uid = globalStore.userinfo.uid;
  const { data: listRes } = await searchOnesDynamicApi(uid);
  if (listRes && listRes.code === 0) {
    dynamicList.values = listRes.data;
    console.log('searchOnesDynamicApi', dynamicList);
    initData();
  }
}

const initData = () => {
  let dynamicArr = toRaw(dynamicList.values);
  console.log('initData', dynamicArr);
  for (let i = 0; i < dynamicArr.length; ++i) {
    console.log(dynamicArr[i]._id);
  }
  
}

onMounted(getMyContacts);

</script>

<style lang="less" scoped>
.interactive-box {
  width: 100%;
  height: 100%;
  background-color: #eee;
  overflow: hidden;
  .main-box {
    overflow: hidden;
    margin-top: 51px;

    .interactive-item {
      background: #fff;
      cursor: pointer;
      width: 100%;
      position: relative;
      display: flex;
      // border: 1px solid #f00;
      align-items: center;
      margin-bottom: 10px;
      height: 70px;
      .icon-box {
        width: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 10px;
        margin-right: 10px;
        height: 50px;
        border-radius: 50%;
        background: #eeba1c;
      }
      p {
        font-size: 20px;
      }
      .right-icon {
        position: absolute;
        right: 10px;
      }
    }
  }
}
</style>