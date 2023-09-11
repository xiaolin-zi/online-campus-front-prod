<template>
  <div class="main">
    <div class="main-container wrap backgroundModule main-fullScreen">

      <van-nav-bar class="header-box">
        <template #left>
          <van-icon name="arrow-left" size="22" color="#0a1629" @click="goBack"/>
        </template>
        <template #title>
          <p class="title">发布兼职</p>
        </template>
      </van-nav-bar>

      <!-- <header class="message-title">
        <div class="head-left">
          <el-icon @click="goBack" class="arrow-icon">
            <ArrowLeft />
          </el-icon>
        </div>
        <div class="head-center">
          <p>发布兼职</p>
        </div>
      </header> -->


      <div class="editTopicModule">
        <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm"
          :size="formSize" status-icon>
          <el-form-item label="活动名称" prop="jobTitle">
            <el-input v-model="ruleForm.jobTitle" />
          </el-form-item>
          <el-form-item label="薪资" prop="salary">
            <el-input v-model="ruleForm.salary" />
          </el-form-item>
          <el-form-item label="工作天数" prop="workingDays">
            <el-input v-model="ruleForm.workingDays" />
          </el-form-item>
          <el-form-item label="截止时间" prop="deadline">
            <el-date-picker v-model="ruleForm.deadline" type="datetime" placeholder="Select date and time" format="YYYY/MM/DD HH:mm:ss" />
          </el-form-item>
          <el-form-item label="兼职任期" prop="term">
            <el-select v-model="ruleForm.term" placeholder="">
              <el-option label="短期" value="shanghai" />
              <el-option label="长期" value="beijing" />
            </el-select>
          </el-form-item>
          <el-form-item label="地点" prop="location">
            <el-select v-model="ruleForm.location" placeholder="地点">
              <el-option label="佛山校区" value="shanghai" />
              <el-option label="广州校区" value="beijing" />
            </el-select>
          </el-form-item>
          <el-form-item label="人数" prop="recruitNum">
            <el-select-v2 v-model="ruleForm.recruitNum" placeholder="选择人数" :options="options" />
          </el-form-item>
          <el-form-item label="兼职类型">
            <div class="my-4 flex items-center text-sm">
              <el-radio-group v-model="ruleForm.radio3" class="ml-4">
                <el-radio label="0" size="small">代购</el-radio>
                <el-radio label="1" size="small">跑腿</el-radio>
                <el-radio label="2" size="small">学习</el-radio>
                <el-radio label="3" size="small">宣传</el-radio>
                <el-radio label="4" size="small">技术</el-radio>
                <el-radio label="5" size="small">家教</el-radio>
                <el-radio label="6" size="small">助理</el-radio>
                <el-radio label="7" size="small">其他</el-radio>
              </el-radio-group>
            </div>
          </el-form-item>
          <el-form-item label="详情" prop="jobContent">
            <el-input v-model="ruleForm.jobContent" classification="textarea" />
          </el-form-item>
          <el-form-item>
            <el-button classification="primary" @click="submitForm(ruleFormRef)">发布</el-button>
            <el-button classification="primary" @click="goBack">取消</el-button>
            <el-button @click="resetForm(ruleFormRef)">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>  
<script lang="ts" setup>
import { ref, reactive } from 'vue';
import type { FormInstance, FormRules } from 'element-plus';
import { ElMessage } from 'element-plus';
import { addJobApi } from '@/apis/parttime/index';
import { useRouter } from 'vue-router';
import type { SendData } from '@/interfaces/parttime';
import { useGlobalStore } from '@/stores/useGlobalStore';

const router = useRouter();
const globalStore = useGlobalStore();

interface RuleForm {
  jobTitle: string,
  salary: string,
  workingDays: string,
  term: string,
  location: string,
  recruitNum: string,
  deadline: string,
  radio3: string,
  jobContent: string
}

const formSize = ref('default');
const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive<RuleForm>({
  jobTitle: '',
  salary: '',
  workingDays: '',
  term: '',
  location: '',
  recruitNum: '',
  deadline: '',
  radio3: '',
  jobContent: '',
})
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

const rules = reactive<FormRules<RuleForm>>({
  jobTitle: [
      { required: true, message: '请输入兼职职位名称', trigger: 'blur' },
  ],
  /*   createTime: [
        { required: true, message: '请输入创建时间', trigger: 'blur' },
    ], */
  deadline: [
      { required: true, message: '请输入截止时间', trigger: 'blur' },
  ],
  salary: [
      { required: true, message: '请输入薪资', trigger: 'blur' },
  ],
  workingDays: [
      { required: true, message: '请输入工作天数', trigger: 'blur' },
  ],
  location: [
      {
          required: true,
          message: '请选择兼职地点',
          trigger: 'change',
      },
  ],
  term: [
    {
      required: true,
      message: '请选择任期',
      trigger: 'change',
    },
  ],
  recruitNum: [
    {
      required: true,
      message: '请选择招募人数',
      trigger: 'change',
    }
  ],
  jobContent: [{ required: true, message: '请输入兼职详情', trigger: 'blur' }],
});

const options = Array.from({ length: 10000 }).map((_, idx) => ({
  value: `${idx + 1}`,
  label: `${idx + 1}`,
}));


const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      post()
    } else {
      ElMessage({
        showClose: true,
        type: "error",
        message: "信息未填完整"
      });
    }
  });
}
const post = async () => {
  const orderList = reactive<SendData>({
      publisherId: '1',
      jobTitle: ruleForm.jobTitle,
      jobContent: ruleForm.jobContent,
      salary: parseInt(ruleForm.salary, 10),
      deadline: ruleForm.deadline,
      location: ruleForm.location === '佛山校区' ? 0 : 1,
      recruitNum: parseInt(ruleForm.recruitNum),
      term: ruleForm.term === '短期' ? 0 : 1,
      classification: parseInt(ruleForm.radio3, 10),
      workingDays: parseInt(ruleForm.workingDays)
  });
  let result: any = await addJobApi(orderList);
  console.log(result);
  //  console.log(ruleForm.deadline)
  console.log(orderList);
  if (result.data.code === 0) {
    ElMessage.success('发布成功');
    router.push('/campus');
      /*  ruleForm.jobTitle = '',
           ruleForm.salary = '',
           ruleForm.workingDays = '',
           ruleForm.term = '',
           ruleForm.location = '',
           ruleForm.recruitNum = '',
           ruleForm.createTime = '',
           ruleForm.deadline = '',
           ruleForm.classification = [],
           ruleForm.jobContent = '' */
  } else {

  };
}
const goBack = () => {
  router.go(-1);
};
</script>


<style scoped lang="less">

.header-box {
  width: 100%;
  overflow: hidden;
  height: 50px;
  background: #f6f6f6;
  .title {
    color: #0a1629;
    font-family: '黑体';
    line-height: 50px;
    text-align: center;
    font-size: 22px;
  }
}

// .message-title {
//   display: flex;
//   background: #f6f6f6;
//   align-items: center;
//   justify-content: space-between;
//   padding: 10px;
//   border-bottom: 1px solid #ccc;

//   .arrow-icon {
//       cursor: pointer;
//       margin-right: 10px;
//       color: #0A1629
//   }

//   .head-center {
//     // border: 1px solid #f00;
//       text-align: center;
//       flex-grow: 1;
//       color: #0A1629
//   }
// }


.editTopicModule {
  // border: 1px solid #f00;
  background: #fff;
  padding-right: 45px;
  margin: 25px auto;

  .button {
      // position: relative;
      color: #0A1629;
      background: #73C975;
      // border: 1px solid #73C975;
      // outline: none;
      // display: inline-block;
      // padding-left: 25px;
      // padding-right: 25px;
      font-size: 16px;
      // line-height: 32px;
      // text-align: center;
      // cursor: pointer;
      //  border-radius: 3px 0px 0px 3px;
      margin: 0;
      text-decoration: none;

      &:hover {
          background: #73C975;
          border: 1px solid #73C975;
      }
  }
}
</style>