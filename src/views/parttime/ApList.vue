<template>
  <header class="message-title">
    <div class="head-left">
      <el-icon @click="goBack" class="arrow-icon">
        <ArrowLeft />
      </el-icon>
    </div>
  </header>
  <div class="adjunct-card" v-for="(item, index) in aPList.values" v-bind:key="item.applicationId" ref="index">
    <div class="card-left">
      <div class="title">用户名：{{ item.applicantId }}</div>
      <div class="name-button"><span>用户信息</span></div>
    </div>
    <div class="card-right">

      <div class="tag-container">
        <div class="navbar" v-show="item.status == 1">已通过</div>
        <div class="navbar" v-show="item.status == 2">已拒绝</div>
        <el-button ref="index" type="primary" :color="'#73C975'" @click="changeR(item.applicationId)"
          v-show="item.status == 0" class="action-button">
          {{ getStatusText(item.status) }}</el-button>
        <el-button ref="index" type="primary" :color="'#73C975'" @click="changeA(item.applicationId)"
          v-show="item.status == 0" class="action-button">{{
            getStatusTextB(item.status)
          }}</el-button>
      </div>
      <div class="time">创建时间：{{ item.createTime }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref, onMounted, reactive } from 'vue';
import { passApply, searchApplyList, rejectApply } from '@/apis/parttime/index';
import { useRouter, useRoute } from 'vue-router';
import type { aPListRecords, aPListResponseData } from '@/interfaces/parttime';

const router = useRouter();
const route = useRoute()
//const router = useRouter();
const jobId: any = route.params.id
const aPList = reactive<aPListRecords|any>([]);

const myButtonA = ref<HTMLButtonElement | null>(null);
const buttonTextA: Ref<string[]> = ref([]);

//const applicationId = ref<string>("1685204476537044993");

const getStatusText = (status: number) => {
  if (status === 0) {
    return '通过';
  } else if (status === 1) {
    return '已通过';
  }
}
const getStatusTextB = (status: number) => {
  if (status === 2) {
    return '已拒绝';
  } else if (status === 0) {
    return '拒绝';
  }
}
/* const getrejectApply = async (applicationId: string) => {
  let result = await rejectApply(applicationId);
  //console.log(result)
  //console.log(result.data)
  //console.log(result.data.data)
  console.log(result);
  if (result.data.code == 0) {
    router.push("/Reject/");

  }
} */
const getapData = async () => {
  let result: aPListResponseData | any = await searchApplyList((jobId));
  console.log(jobId)
  //console.log(result.data)
  //console.log(result.data.data)
  console.log(result);
  aPList.values = result.data.data;
  console.log(aPList.values.length)


}
onMounted(() => {
  getapData();
})

/* const pass = async (id: string) => {
  const result = await passApply(id)
  console.log(id)
  console.log(result)
  //console.log(result.data) 
  if (result.data.code == 0) {
    router.push("/Pass/");

  }

} */

const changeA = async (applicationId: string) => {
  let result = await rejectApply(applicationId);
  //console.log(result)
  //console.log(result.data)
  //console.log(result.data.data)
  console.log(result);
  if (result.data.code == 0) {
    router.push("/Reject/");

  }
  console.log(applicationId)
  //console.log(rejectApplyList.applicationId);
  //getrejectApply(applicationId);

};
const changeR = async (id: string) => {
  const result = await passApply(id)
  console.log(id)
  console.log(result)
  //console.log(result.data) 
  if (result.data.code == 0) {
    router.push("/Pass/");

  }
};
const goBack = () => {
  router.go(-1);
  // 使用Vue Router的go方法返回上一个页面
};
</script>

<style scoped lang="less">
* {
  box-sizing: border-box;
}

.message-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ccc;

  .arrow-icon {
    cursor: pointer;
    margin-right: 10px;
    color: #0A1629
  }

}

.adjunct-card {
  display: grid;
  grid-template-columns: 2fr 3fr; //把兼职简介分左右区域
  height: 70px;
  margin: 3px;
  background-color: #fff;
  border: 1px solid rgb(213, 213, 213, 0.3);
  border-radius: 8px;

  .card-left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    // background-color: #fff;
    padding: 10px;
    //  border-radius: 8px;
    //box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    //width: 40%;

    .title {
      font-size: 16px;
      font-weight: bold;
    }

    .name-button {
      font-size: 15px;
      color: #0f0e0e;
      // margin-left: 120px;
      margin-top: 10px;
      margin-bottom: 6px;

      span {
        border: 1px solid #6384b5;
        border-radius: 3px;
        padding: 2px 5px;
        margin-right: 8px;
        background-color: #9fa5ae;

      }
    }
  }

  .card-right {
    display: flex;
    flex-direction: column;
    //justify-content: space-between;
    align-items: flex-end;
    // background-color: #ffffff38;
    padding: 10px;

    // border-radius: 8px;
    //box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    //width: 60%;
    .tag-container {
      display: flex;
      justify-content: flex-end;
      align-items: center;

      .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #f5f5f5;
        font-size: 16px;
        padding: 10px 20px;
      }

    }


    .time {
      margin-top: 10px;
      font-size: 12px;
      color: #ababab;
      justify-content: flex-end;
    }
  }
}
</style>