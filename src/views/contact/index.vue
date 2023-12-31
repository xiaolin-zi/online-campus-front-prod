<template>
  <div class="contact-dashboard-box">
    <van-nav-bar class="header-box">
      <template #left>
        <p class="title">{{ contactIndexTitle }}</p>
      </template>
      <template #right>
        <van-icon name="search" size="25" color="#0a1629" @click="toSearch"/>
        &nbsp;&nbsp;&nbsp;
        <van-icon name="bell" size="25" color="#0a1629" :dot="true" @click="toInteractive"/>
        <van-image round class="avatar"
          fit="cover"
          :src="userinfo.userImage"
          @click="toMyDetail"/>
      </template>
    </van-nav-bar>

    <div class="main-box">
      <van-tabs 
        v-model:active="activeTab" 
        color="#73c975"
        :shrink="true" 
        :swipeable="true">
        <van-tab title="好友" name="friend">
          <div class="main-friend-box">
            <van-loading size="24px" v-if="isLoading" class="loading-box" text-size="20px">Loading...</van-loading>
            <van-empty image="network" description="网络出错啦!" v-show="isNetworkError && !isLoading && showOnFriendBox"/>
            <van-empty description="一片空白......" v-show="contactList.values.length === 0 && !isLoading"/>

            <dynamicItem
              v-for="item in contactList.values" 
              :key="item._id" 
              :item="item"
              @on-comment="showSheetFn"
              @on-like="insertLike"
              @on-dislike="cancelLike"
              @on-share="handleShare"/>
          </div>
        </van-tab>
        <van-tab title="同城" name="city">
          <div class="main-city-box">
            <van-loading size="24px" v-if="isLoading" class="loading-box" text-size="20px">Loading...</van-loading>
            <van-empty image="network" description="网络出错啦!" v-show="isNetworkError && !isLoading && showOnCityBox"/>
            <van-empty description="一片空白......" v-show="contactList.values.length === 0 && !isLoading"/>

            <dynamicItem
              v-for="item in cityContactList.values" 
              :key="item._id" 
              :item="item"
              @on-comment="showSheetFn"
              @on-like="insertLike"
              @on-dislike="cancelLike"
              @on-share="handleShare"/>
          </div>
        </van-tab>
      </van-tabs>

      <van-share-sheet
                v-model:show="showShareSheet"
                title="立即分享给好友"
                :options="options"
                @select="onOptionSelect"/>
    </div>

    <van-floating-bubble axis="xy" magnetic="x" icon="edit" @click="toAdd"/>
    <van-back-top bottom="100px" right="20px"/>

    <van-action-sheet 
      :show="showSheet" 
      :title="sheetTitle" 
      @cancel="showSheet = false">
      <div class="sheet-box">
        <div class="sheet-main">
          <commentItem
            v-for="item in commentList.values"
            :key="item.uuid" 
            :item="item"
            :dynamic="targetDynamic.value"
            @on-delete="handleCommentDelete"
            @on-reply-finish="handleReplyFinish"/>
        </div>
        <van-field class="comment-field-box" v-model="commentContent" rows="1" autosize type="textarea" placeholder="说点什么吧...">
          <template #button>
            <van-button size="small" color="#73c975" @click="sendComment">发送</van-button>
          </template>
        </van-field>
      </div>
    </van-action-sheet>
  </div>
</template>

<script setup lang="ts">
import dynamicItem from '@/components/dynamic-item/index.vue';
import commentItem from '@/components/comment-item/index.vue';
import { searchDynamicApi, searchCityWideApi, insertLikeApi, deleteLikeApi, sendCommentApi, deleteCommentApi } from '@/apis/contact/dynamic';
import { storeToRefs } from 'pinia';
import { showConfirmDialog, showToast } from 'vant';
import { reactive, ref, onMounted, toRaw, nextTick } from 'vue';
import { useRouter } from 'vue-router';
import { useGlobalStore } from '@/stores/useGlobalStore';
import type { Dynamic } from '@/interfaces/contact';
import { getIpInfo } from '@/utils/location';

// 获取当前的 userinfo (user个人信息)
const { userinfo } = storeToRefs(useGlobalStore());

const contactIndexTitle = ref('交际圈');

const contactList = reactive<any>([]); // 动态列表
const cityContactList = reactive<any>([]); // 同城动态列表
const commentList = reactive<any>([]); // 评论列表

const isLoading = ref(true); // 是否正在加载
const isNetworkError = ref(false); // 是否为网络错误

const showSheet = ref(false); // 是否展示评论区
const sheetTitle = ref('评论区'); // 评论区标题
const commentContent = ref('');  // 评论输入框

const targetDynamic = reactive<any>({}); // 目标动态
const activeTab = ref('friend');

const showOnFriendBox = ref(false);
const showOnCityBox = ref(false);

const router = useRouter();

const showShareSheet = ref(false);
const options = ref([
  { name: 'QQ', icon: 'qq' },
  { name: '微博', icon: 'weibo' },
  { name: '复制链接', icon: 'link' },
]);
const onOptionSelect = (option: any) => {
  showToast(option.name);
  showShareSheet.value = false;
}


onMounted(() => {
  // console.log('on Mounted.');
  refreshFn();
  // contactIndexTitle.value = `${userinfo.value.username} 交际圈`;
});

// onUpdated(() => {
//   console.log('on Updated.');
// });

// 获取所有动态
const getAllContacts = async () => {
  try {
    const { data: listRes } = await searchDynamicApi();
    // console.log('listRes', listRes);
    if (listRes && listRes.code === 0) {
      contactList.values = listRes.data;
    }
  } catch(err: any) {
    showOnFriendBox.value = true;
    isNetworkError.value = true;
  } finally {
    isLoading.value = false;
  }
}
// 获取所有同城动态
const getAllCityContacts = async() => {
  try {
    const { data: res } = await getIpInfo();
    let curCity = res.city;

    const { data: listRes } = await searchCityWideApi(curCity);
    // const { data: listRes } = await searchCityWideApi('广州市');
    // console.log('city listRes', listRes);
    if (listRes && listRes.code === 0) {
      cityContactList.values = listRes.data;
    }
  } catch(err: any) {
    showOnCityBox.value = true;
    isNetworkError.value = true;
  } finally {
    isLoading.value = false;
  }
}

const refreshFn = () => {
  getAllContacts();
  getAllCityContacts();
}

// 展示评论区
const showSheetFn = (item: Dynamic) => {
  let itemRaw = toRaw(item);
  targetDynamic.value = itemRaw; // 先把要评论的动态贴文给获取到
  // console.log(itemRaw);
  sheetTitle.value = `评论区(${itemRaw.comments.length})`;
  commentList.values = itemRaw.comments;
  nextTick(() => { showSheet.value = true; });
}

// 发送评论
const sendComment = () => {
  if (commentContent.value.trim().length === 0) {
    showToast('输入内容不能为空!');
    return;
  }
  // console.log(toRaw(targetDynamic.value));
  const { _id } = toRaw(targetDynamic.value);
  showConfirmDialog({ title: '提示', message: '确认发送评论?' }).then(async () => {
    let addCommentForm = {
      dynamicId: _id,
      senderId: userinfo.value.uid,
      senderName: userinfo.value.username,
      senderImage: userinfo.value.userImage,
      content: commentContent.value
    };
    // console.log('直接评论', addCommentForm);
    const { data: sendRes } = await sendCommentApi(addCommentForm);
    // console.log('sendRes', sendRes);
    if (sendRes && sendRes.code === 0) {
      showToast('发送评论成功~');
      refreshFn();
      showSheet.value = false;
    } else {
      showToast('OOPS! 内部小错误,请稍后重试!');
    }
    commentContent.value = '';
  }).catch(() => { showToast('已取消操作~'); });
}
const handleReplyFinish = async () => {
  showSheet.value = false;
  refreshFn();
}

// 点赞或取消点赞
const insertLike = async (dynamicId: string) => {
  // console.log('handle like: ', dynamicId, username.value);
  const { data: res } = await insertLikeApi(dynamicId, userinfo.value.username);
  if (res && res.code === 0) {
    showToast('点赞成功~');
    refreshFn(); // 刷新
    
  } else {
    showToast('OOPS! 内部小错误,请稍后重试!');
  }
}
const cancelLike = async (dynamicId: string) => {
  // console.log('handle like: ', dynamicId, username.value);
  const { data: res } = await deleteLikeApi(dynamicId, userinfo.value.username);
  if (res && res.code === 0) {
    showToast('已取消点赞~');
    refreshFn(); // 刷新
  } else {
    showToast('OOPS! 内部小错误,请稍后重试!');
  }
}
// 删除某一条评论
const handleCommentDelete = (deleteCommentForm: any) => {
  // console.log('handleCommentDelete', deleteCommentForm);
  showConfirmDialog({ title: '提示', message: '确认删除评论?' }).then(async () => {
    const { data: res } = await deleteCommentApi(deleteCommentForm);
    if (res && res.code === 0) {
      showToast('删除成功~');
      refreshFn();
      showSheet.value = false;
    } else {
      showToast('OOPS! 内部小错误,请稍后重试!');
    }
  }).catch(() => { showToast('已取消操作~'); });
}
// 分享操作
const handleShare = (link: string) => {
  showToast(link); // 获取贴文链接
  showShareSheet.value = true; // 展示分享面板
}

// 跳转到动态搜索
const toSearch = () => {
  router.push('/campus/contact/search');
}

// 跳转到写动态
const toAdd = () => {
  router.push('/campus/contact/add');
}

const toInteractive = () => {
  router.push('/campus/contact/interactive');
}

const toMyDetail = () => {
  router.push('/campus/user/detail');
}

</script>

<style lang="less" scoped>
@font-face {
  font-family: 'klavika-light';
  src: url('../../assets/font/klavika-light.otf');
}
@font-face {
  font-family: 'klavika-bold';
  src: url('../../assets/font/klavika-bold.otf');
}

.contact-dashboard-box {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  background: #fff;

  .header-box {
    width: 100%;
    z-index: 100;
    overflow: hidden;
    top: 0;
    position: fixed;
    height: 50px;
    background: #f6f6f6;

    .title {
      font-family: 'klavika-bold';
      line-height: 50px;
      text-align: center;
      color: #0a1629;
      font-size: 22px;
    }
    .avatar {
      cursor: pointer;
      // border: 1px solid #0a1629;
      margin-left: 18px;
      width: 30px;
      height: 30px;
    }
  }

  .main-box {
    box-sizing: border-box;
    overflow: auto;
    width: 100%;
    height: 100%;
    // height: 3100px;
    margin-top: 50px;
    margin-bottom: 100px;

    .main-friend-box {
      width: 100%;

      .loading-box {
        color: #0a1629;
        text-align: center;
      }
    }
  }

  .sheet-box {
    position: relative;
    width: 100%;
    height: 640px;
    margin-bottom: 60px;
    overflow: auto;

    .sheet-main {
      width: 100%;
      box-sizing: border-box;
      height: 100%;
      overflow: auto;
    }

    .comment-field-box {
      position: fixed;
      width: 100%;
      bottom: 0;
      background: #fbfafa;
    }
  }
}
</style>
