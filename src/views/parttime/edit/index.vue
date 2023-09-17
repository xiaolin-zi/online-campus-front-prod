<template>
  <div class="main">
    <van-nav-bar class="header-box">
      <template #left>
        <van-icon name="arrow-left" size="22" color="#0a1629" @click="goBack"/>
      </template>
      <template #title>
        <p class="title">编辑兼职</p>
      </template>
    </van-nav-bar>

      <div class="main-container wrap backgroundModule main-fullScreen">
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
                  <el-form-item label="创建时间" prop="createTime">
                      <el-date-picker v-model="ruleForm.createTime" type="datetime" placeholder="Select date and time" />
                  </el-form-item>
                  <el-form-item label="截止时间" prop="deadline">
                      <el-date-picker v-model="ruleForm.deadline" type="datetime" placeholder="Select date and time" />
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
                          <el-radio-group v-model="radio3" class="ml-4">
                              <el-radio label="1" size="small">代购</el-radio>
                              <el-radio label="2" size="small">跑腿</el-radio>
                              <el-radio label="3" size="small">学习</el-radio>
                              <el-radio label="4" size="small">宣传</el-radio>
                              <el-radio label="5" size="small">技术</el-radio>
                              <el-radio label="6" size="small">家教</el-radio>
                              <el-radio label="7" size="small">助理</el-radio>
                              <el-radio label="8" size="small">其他</el-radio>
                          </el-radio-group>
                      </div>

                  </el-form-item>
                  <el-form-item label="详情" prop="jobContent">
                      <el-input v-model="ruleForm.jobContent" classification="textarea" />
                  </el-form-item>

                  <el-form-item>
                      <el-button classification="primary" @click="submitForm(ruleFormRef)">提交</el-button>
                      <el-button classification="primary" @click="goBack">取消</el-button>
                      <el-button @click="resetForm(ruleFormRef)">重置</el-button>
                  </el-form-item>
              </el-form>
              <el-dialog v-model="dialogVisible" title="Tips" width="90%" :before-close="handleClose">
                  <span>是否强制更新信息？</span>
                  <template #footer>
                      <span class="dialog-footer">
                          <el-button @click="dialogVisible = false">取消</el-button>
                          <el-button type="primary" @click="update()">
                              确定
                          </el-button>
                      </span>
                  </template>
              </el-dialog>
          </div>
      </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, reactive } from "vue";
import type { FormInstance, FormRules } from 'element-plus';
import { ElMessage, ElMessageBox } from 'element-plus';
import { updateJobInfoApi, forceUpdateJobInfoApi, getJobDetailApi } from '@/apis/parttime/index';
import { useRoute, useRouter } from "vue-router";
import type { aPDetailData, editData, aPDetailResponseData } from '@/interfaces/parttime';
const route = useRoute();
const radio3 = ref('1');
const jobId: any = route.params.id;
let aPDetail = ref<aPDetailData>({});
const router = useRouter();
const dialogVisible = ref(false)
const getData = async () => {
  let result: aPDetailResponseData | any = await getJobDetailApi(jobId);
  console.log(result);
  aPDetail.value = result.data.data;
}
interface RuleForm {
  jobTitle: string
  salary: number
  workingDays: number
  term: string
  location: string
  recruitNum: string
  createTime: string
  deadline: string
  classification: string[]
  jobContent: string
}
const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
  jobTitle: aPDetail.value.jobTitle || '0',
  salary: aPDetail.value.salary || 0,
  workingDays: aPDetail.value.workingDays || 0,
  term: aPDetail.value.term === 0 ? '短期' : '长期',
  location: aPDetail.value.location === 0 ? '佛山校区' : '广州校区',
  recruitNum: `${aPDetail.value.recruitNum}`,
  createTime: aPDetail.value.createTime || '',
  deadline: aPDetail.value.deadline || '',
  classification: [],
  jobContent: aPDetail.value.jobContent || '',
})
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

const rules = reactive<FormRules<RuleForm>>({
  jobTitle: [
      { required: true, message: '请输入兼职职位名称', trigger: 'blur' },
  ],
  createTime: [
      { required: true, message: '请输入创建时间', trigger: 'blur' },
  ],
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
      },
  ],

  classification: [
      {
          type: 'array',
          required: true,
          message: '请选择至少一个',
          trigger: 'change',
      },
  ],
  jobContent: [
      { required: true, message: '请输入兼职详情', trigger: 'blur' },
  ],
})
const options = Array.from({ length: 10000 }).map((_, idx) => ({
  value: `${idx + 1}`,
  label: `${idx + 1}`,
}))
const classificationMapping: { [key: string]: number } = {
  代购: 0,
  跑腿: 1,
  学习: 2,
  宣传: 3,
  技术: 4,
  家教: 5,
  助理: 6,
  其他: 7
};

const orderList = reactive<editData>({
  jobId: aPDetail.value.jobId,
  jobTitle: ruleForm.jobTitle,
  jobContent: ruleForm.jobContent,
  salary: ruleForm.salary,
  status: aPDetail.value.status,
  deadline: ruleForm.deadline,
  location: ruleForm.location === '佛山校区' ? 0 : 1,
  recruitNum: parseInt(ruleForm.recruitNum),
  term: ruleForm.term === '短期' ? 0 : 1,
  classification: classificationMapping[ruleForm.classification[0]],
  workingDays: ruleForm.workingDays
});
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
  })
}
const post = async () => {
  let result: any = await updateJobInfoApi(orderList);
  console.log(result)
  if (result.data.code == 0) {
      ElMessage({
          showClose: true,
          type: "success",
          message: "发布成功"
      });
  } else if (result.data.code == 1) {
      console.log(result.data.msg)

      dialogVisible.value = true
  };
}
//强制更新兼职信息
const forceupdateJobasync = async () => {
  let result: any = await forceUpdateJobInfoApi(orderList);
  console.log(result)
  if (result.data.code == 0) {
      ElMessage({
          showClose: true,
          type: "success",
          message: "强制更新成功"
      });
  }
}
const goBack = () => {
  router.go(-1);
  // 使用Vue Router的go方法返回上一个页面
};
const update = () => {
  forceupdateJobasync();
  dialogVisible.value = false

}
onMounted(() => {
  getData();
})
const handleClose = (done: () => void) => {
  ElMessageBox.confirm('确定关闭吗?')
      .then(() => {
          done()
      })
      .catch(() => {
          // catch error
      })
}
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

.editTopicModule {
  background: #fff;
  padding-right: 45px;
  margin: 25px auto;
}
</style >