<template>
  <div class="adjunct-card" v-for="item in partTimeList.values" v-bind:key="item.jobId" @click="toPage(item.jobId)">
    <div class="card-left">
      <div class="first">
        <el-image :src="item.userImage" style="width: 38px; height: 38px; border-radius: 5px" />

      </div>
      <div class="tag-container">
        <div class="title">{{ item.jobTitle }}</div>
        <span v-if="item.location === 0">佛山校区</span>
        <span v-else="item.location===1">广州校区</span>
      </div>
    </div>
    <div class="card-right">
      <div class="price">薪资：{{ item.salary }}</div>
      <div class="company">
        {{ getStatusText(item.status) }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref, reactive } from "vue";
import { lazyLoading } from '@/apis/parttime/index'
import { useRouter } from "vue-router";
import type { lazyListRecords } from '@/interfaces/parttime';

const getStatusText = (status: number) => {
  if (status === 0) {
    return '开启';
  } else if (status === 1) {
    return '关闭';
  } else if (status === 2) {
    return '招满';
  } else {
    return '完成';
  }
}
const router = useRouter();
const partTimeList = reactive<lazyListRecords>([]);
const num = ref<number>(2);
const getData = async () => {
  let result = await lazyLoading(num.value)
  partTimeList.values = result.data.data
  console.log(result.data.data)
}
onMounted(() => {
  getData();
})

const toPage = (id: string) => {
  router.push("/campus/parttime/detail/" + id);
};
</script>

<style scoped lang="less">
body {
  display: flex;
  justify-content: center;
  /* 水平居中 */
  align-items: center;
  /* 垂直居中 */

  .adjunct-card {
    display: grid;
    grid-template-columns: 3fr 2fr; //把兼职简介分左右区域
    height: 90px;
    margin: 12px;
    background-color: #fff;
    border: 1px solid rgb(213, 213, 213, 0.3);
    border-radius: 8px;

    .card-left {
      display: flex;
      // grid-template-rows: repeat(3, 1fr);
      align-items: center;
      margin: 8px;

      .tag-container {
        display: grid;
        // margin-top: 15px;
        font-size: 12px;
        color: #ababab;

        .title {
          // margin-top: 8px;
          margin-left: 15px;
          font-size: 18px;
          font-weight: 700;

        }

        span {
          border: 1px solid #ababab;
          border-radius: 3px;
          padding: 2px 5px;
          margin-left: 15px;
          margin-top: 4px;
          margin-right: 8px;
        }
      }

    }

    .card-right {
      display: grid;
      grid-template-rows: repeat(3, 1fr);
      align-items: center;
      font-size: 16px;
      margin: 8px;
      text-align: end;

      .price {
        font-size: 18px;

        color: #FA4926;

      }

      .time {
        font-size: 12px;
        color: #ababab;

      }

      .company {

        display: flex;
        align-items: center;
        justify-content: flex-end;
        font-size: 14px;
        color: #3b3b3b;

        .company-logo {
          width: 20px;
          height: 20px;
          border: 1px solid rgb(213, 213, 213);
          border-radius: 50%;
          overflow: hidden;
          margin-right: 5%;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }

  }

}
</style>