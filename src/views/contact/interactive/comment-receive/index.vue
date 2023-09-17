<template>
  <div class="comment-receive-box">
    <goBackBar title-text="收到的评论及回复" @handle-left="router.go(-1);"/>
    <div class="main-box">
      <div class="dto-item" v-for="dtoItem in dtoList.values" :key="dtoItem.dtoId">
        <div class="left">
          <img :src="dtoItem.senderAvatar" class="avatar"/>
          <p>用户<strong>&nbsp;{{ dtoItem.senderName }}&nbsp;</strong>回复了你的{{ dtoItem.dtoType === 1 ? '动态' : '评论' }}</p>
          <div class="sub"><p>{{ dtoItem.content }}</p></div>
        </div>
        <div class="right">
          <p>{{ dtoItem.targetContent }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import type { commentReceiveDto } from '@/interfaces/contact';
// import { getUserInfoByUidApi } from '@/apis/user/index';
import goBackBar from '@/components/go-back-bar/index.vue';

const route = useRoute();
const router = useRouter();
const dtoList = reactive<Array<commentReceiveDto>|any>([]);
const isLoading = ref(true);

onMounted(async () => {
  let list: any = route.query.list;
  list = JSON.parse(list);
  dtoList.values = list;

  isLoading.value = false;
  // console.log('route', dtoList.values);
});

</script>

<style lang="less" scoped>
.comment-receive-box {
  width: 100%;
  overflow: hidden;
  .main-box {
    color: #0a1629;
    margin-top: 55px;
    font-size: 22px;
    overflow: auto;
    .loading-box {
      margin-top: 30px;
      text-align: center;
    }
    .dto-item {
      width: 100%;
      display: flex;
      height: 80px;
      background: #f1f1f1;
      margin-bottom: 10px;
      .left {
        padding-left: 12px;
        padding-top: 6px;
        font-size: 16px;
        box-sizing: border-box;
        overflow: hidden;
        width: 70%;
        .sub {
          margin-top: 5px;
          font-size: 14px;
          font-weight: 900;
        }

        .avatar {
          display: block;
          width: 34px;
          height: 34px;
          margin-right: 10px;
          float: left;
          border-radius: 50%;
        }
        p {
          margin-top: 5px;
        }
      }
      .right {
        padding: 10px;
        background: #e7e7e7;
        font-size: 14px;
        box-sizing: border-box;
        overflow: hidden;
        width: 30%;
      }
    }
  }
}
</style>