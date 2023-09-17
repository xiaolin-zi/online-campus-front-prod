<template>
  <div class="interactive-box">
    <goBackBar title-text="互动" @handle-left="() => { router.go(-1); }"/>
    <div class="main-box">

      <div class="interactive-item" 
        v-for="item in itemList" 
        :key="item.text" 
        @click="item.cb(item.toPath)">
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
import type { Dynamic, likeReceiveDto, commentReceiveDto } from '@/interfaces/contact';

const router = useRouter();
const globalStore = useGlobalStore();

const dynamicList = reactive<any>([]);

const allLikes = reactive<Array<likeReceiveDto>|any>([]);
const allComments = reactive<Array<commentReceiveDto>|any>([]);

// 跳转到收到的赞页面
const toLikeReceive = (toPath: string) => {
  console.log('toLikeReceive');
  initLikeReceiveData();
  router.push({ path: toPath, query: { list: JSON.stringify(allLikes) } });
}

// 跳转到收到的评论及回复页面
const toCommentReceive = (toPath: string) => {
  console.log('toCommentReceive');
  initCommentReceive();
  router.push({ path: toPath, query: { list: JSON.stringify(allComments) } });
}

const itemList = reactive([
  { 
    text: '收到的赞', 
    iconName: 'good-job', 
    toPath: '/campus/contact/interactive/like-receive', 
    cb: toLikeReceive
  },
  { 
    text: '收到的评论', 
    iconName: 'comment', 
    toPath: '/campus/contact/interactive/comment-receive', 
    cb: toCommentReceive
  }
]);


const getMyContacts = async () => {
  const uid = globalStore.userinfo.uid;
  const { data: listRes } = await searchOnesDynamicApi(uid);
  if (listRes && listRes.code === 0) {
    dynamicList.values = listRes.data;
    console.log('searchOnesDynamicApi', dynamicList);
  }
}

// 初始化收到的赞数据
const initLikeReceiveData = () => {
  let dynamicArr = toRaw(dynamicList.values);
  let my_uid = globalStore.userinfo.uid;
  for (let i = 0; i < dynamicArr.length; ++i) {
    let photosText = '';
    for (let k = 0; k < dynamicArr[i].photos.length; ++k) {
      photosText += '[图片]';
    }

    for (let j = 0; j < dynamicArr[i].likeId.length; ++j) {
      // console.log(dynamicArr[i].likeId[j]);
      if (my_uid !== dynamicArr[i].likeId[j]) {
        let likeReceiveDtoInstance: likeReceiveDto = {
          dtoId: dynamicArr[i]._id + `-${j}`,
          likeId: dynamicArr[i].likeId[j],
          likeName: dynamicArr[i].likeName[j],
          content: dynamicArr[i].content + photosText,
          cid: dynamicArr[i]._id
        }

        allLikes.push(likeReceiveDtoInstance);
      }
    }
  }
  // console.log('initLikeReceiveData', JSON.stringify(allLikes));
}

// 初始化收到的评论及回复数据
const initCommentReceive = () => {
  let dynamicArr = toRaw(dynamicList.values);
  for (let i = 0; i < dynamicArr.length; ++i) {
    let comments = dynamicArr[i].comments;
    let photosText = '';
    for (let k = 0; k < dynamicArr[i].photos.length; ++k) {
      photosText += '[图片]';
    }

    for (let j = 0; j < comments.length; ++j) {
      let commentReceiveDtoInstance: commentReceiveDto = {
        dtoId: comments[j].uuid,
        content: comments[j].content,
        senderId: comments[j].sender,
        senderName: comments[j].senderName,
        senderAvatar: comments[j].senderImage,
        sendTime: comments[j].createTime,
        targetContent: dynamicArr[i].content + photosText,
        cid: dynamicArr[i]._id,
        dtoType: 1,
      };

      if (comments[j].receiver !== null && comments[j].receiver !== '') {
        // console.log(comments[j].receiver);
        commentReceiveDtoInstance.dtoType = 2;
        for (let k = 0; k < comments.length; ++k) {
          if (comments[k].uuid === comments[j].receiver) {
            commentReceiveDtoInstance.targetContent = comments[k].content;
            break;
          }
        }
      }
      
      allComments.push(commentReceiveDtoInstance);
    }
  }
  // console.log('initCommentReceive', JSON.stringify(allComments));
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