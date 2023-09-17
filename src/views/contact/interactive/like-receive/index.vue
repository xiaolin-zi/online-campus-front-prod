<template>
  <div class="like-receive-box">
    <goBackBar title-text="收到的赞" @handle-left="router.go(-1);"/>
    
    <div class="main-box">
      <van-loading size="24px" v-if="isLoading" class="loading-box" text-size="20px">Loading...</van-loading>
      <div class="list-box" v-else>
        <div class="dto-item" v-for="dtoItem in dtoList.values" :key="dtoItem.dtoId">
          <div class="left">
            <img :src="dtoItem.likeAvatar" class="avatar"/>
            <p>用户<strong>&nbsp;{{ dtoItem.likeName }}&nbsp;</strong>点赞了你的动态</p>
          </div>
          <div class="right">
            <p>{{ dtoItem.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, toRaw, ref, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import type { likeReceiveDto } from '@/interfaces/contact';
import { getUserInfoByUidApi } from '@/apis/user/index';
import goBackBar from '@/components/go-back-bar/index.vue';

const route = useRoute();
const router = useRouter();
const dtoList = reactive<Array<likeReceiveDto>|any>([]);
const isLoading = ref(true);

onMounted(async () => {
  let list: any = route.query.list;
  list = JSON.parse(list);
  dtoList.values = list;

  for (let i in list) {
    const { data: res } = await getUserInfoByUidApi(list[i].likeId);
    // console.log('avatar res', res);
    if (res.code === 0) {
      dtoList.values[i].likeAvatar = res.data.userImage;
    }
  }
  isLoading.value = false;
  // console.log('route', dtoList.values);
});

</script>

<style lang="less" scoped>
.like-receive-box {
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
        font-size: 18px;
        box-sizing: border-box;
        overflow: hidden;
        width: 70%;

        .avatar {
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