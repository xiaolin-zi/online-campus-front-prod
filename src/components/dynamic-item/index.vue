<template>
  <div class="dynamic-item-box">
    <div class="main-box">
      <div class="left-box">
        <van-image :src="item.promulgatorImage" round class="avatar"/>
      </div>
      <div class="right-box">
        <div class="author">
          <p v-text="item.promulgatorName"></p>
        </div>
        <div class="content-box">
          <!-- <p v-html="item.content"></p> -->
          <van-text-ellipsis
            :content="item.content" 
            rows="25"
            expand-text="展开" 
            collapse-text="收起"/>
        </div>
      </div>
    </div>
    <div class="img-box">
      <van-image 
        :src="photo" 
        class="photo" 
        fit="cover"
        @click="photoPreview(photo)"
        v-for="photo in item.photos" 
        v-bind:key="photo"/>
    </div>
    <div class="bottom-box">
      <div class="location-box">
        <p v-text="item.city"></p>
      </div>
      <div class="operate-box">
        <ul>
          <li @click="handleComment(item)"><van-icon name="chat-o" />&nbsp;{{ item.comments.length }}</li>
          <li @click="handleLikeOrDislike(item)">
            <van-icon name="good-job" v-if="likeIcon === true" color="#73c975"/>
            <van-icon name="good-job-o" v-else/>
            {{ item.likeId.length }}
          </li>
          <li>
            <van-popover v-model:show="showPopover" :actions="actions" @select="onActionSelect">
              <template #reference>
                <van-icon name="ellipsis"/>
              </template>
            </van-popover>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { useGlobalStore } from '@/stores/useGlobalStore';

import { showImagePreview, showToast } from 'vant';
import { storeToRefs } from 'pinia';
import { ref, onMounted, onUpdated } from 'vue';
import { useRouter } from 'vue-router';

import { Dynamic } from '@/interfaces/contact';

const props = defineProps<{ item: Dynamic }>();
const emit = defineEmits(['on-like', 'on-dislike', 'on-comment', 'on-share']);
const { userinfo } = storeToRefs(useGlobalStore());
const router = useRouter();
const likeIcon = ref(false);

const showPopover = ref(false);
const actions = ref([
  { text: '动态详情', icon: 'more-o' },
  { text: '分享动态', icon: 'share-o' },
  { text: '举报动态', icon: 'bulb-o' },
]);

const onActionSelect = (action: any) => {
  let text = action.text;
  if (text === '动态详情') router.push(`/campus/contact/dynamic-detail/${props.item._id}`);
  else if (text === '分享动态') emit('on-share', 'a link');
  else showToast(action.text);
  
  showPopover.value = false;
}

// 点赞图标切换
const likeIconToggle = () => {
  let dynamic: any = props.item;
  // console.log(props.item);
  // console.log(dynamic.likeId, uid.value);
  if (dynamic.likeId.indexOf(userinfo.value.uid) !== -1) {
    likeIcon.value = true;
  } else likeIcon.value = false;
}

// 图片预览
const photoPreview = (imgUrl: string) =>  {
  showImagePreview([imgUrl]);
}

// 评论功能
const handleComment = (item: any) => {
  emit('on-comment', item);
}

// 点赞或取消点赞
const handleLikeOrDislike = (item: any) => {
  if (likeIcon.value === true) emit('on-dislike', item._id);
  else emit('on-like', item._id);
}

// 生命周期相关
onMounted(likeIconToggle);
onUpdated(likeIconToggle);

</script>

<style lang="less" scoped>
.dynamic-item-box {
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  font-family: '黑体';
  overflow: hidden;

  .main-box {
    display: flex;
    box-sizing: border-box;
    width: 100%;
    .left-box {
      width: 50px;
      box-sizing: border-box;
      // border: 1px solid #808;
      height: 100%;
      float: left;
      .avatar {
        display: block;
        margin: 5px auto;
        width: 40px;
        height: 40px;
      }
    }
    .right-box {
      padding-top: 5px;
      margin-left: 5px;
      box-sizing: border-box;
      .author {
        font-size: 20px;
        line-height: 40px;
      }
      .content-box {
        font-size: 18px;
        width: 300px;
      }
    }
  }
  .img-box {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    box-sizing: border-box;
    // border: 1px solid #000;
    margin-left: 45px;
    .photo {
      width: 90px;
      height: 90px;
      margin-top: 5px;
      margin-left: 10px;
      border: 1px solid rgba(0, 0, 0, .1);
    }
  }
  .bottom-box {
    width: 100%;
    margin-left: 55px;
    margin-top: 5px;
    margin-bottom: 12px;
    .location-box {
      font-size: 8px;
      color: #b7b7b7;
    }
    .operate-box {
      ul {
        list-style: none;
        li {
          width: 90px;
          font-size: 18px;
          color: #0a1629;
          margin-right: 5px;
          line-height: 36px;
          text-align: center;
          display: inline-block;
          cursor: pointer;
        }
        li:hover {
          border-radius: 0.3em;
          color: #332233;
          font-weight: 900;
          background: #ccc;
        }
      }
    }
  }
}
</style>@/class/contact@/stores/useGlobalStore