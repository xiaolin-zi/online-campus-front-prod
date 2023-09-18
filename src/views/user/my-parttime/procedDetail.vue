<template>
    <div class="body">
        <div class="head">
            <header class="message-title">
                <div class="head-left">
                    <el-icon class="arrow-icon" @click="goBack">
                        <ArrowLeft />
                    </el-icon>
                </div>
                <div class="head-center">
                    <p>执行订单详情</p>
                </div>
            </header>
        </div>
        <div class="center1">
            <div class="content">{{ ProcedingDetail.jobContent }}</div>
        </div>
        <div class="center2">
            <div class="li">
                <div class="lili">
                    <span class="left">工作地点:</span>
                    <span v-if="ProcedingDetail.location === 0">工作地点:佛山校区</span>
                    <span v-else="ProcedingDetail.location===1">工作地点:广州校区</span>
                </div>
                <div class="lili">
                    <span class="left">工作天数:</span>
                    <span class="right">{{ ProcedingDetail.workingDays }}天</span>
                </div>
                <div class="lili">
                    <span class="left">创建时间:</span>
                    <span class="right">{{ ProcedingDetail.createTime }}</span>
                </div>
                <div class="lili">
                    <span class="left">更新时间:</span>
                    <span class="right">{{ ProcedingDetail.updateTime }}</span>
                </div>
                <div class="lili">
                    <span class="left">截止时间:</span>
                    <span class="right">{{ ProcedingDetail.deadline }}</span>
                </div>
                <div class="lili">
                    <span class="left">发布者:</span>
                    <span class="right">{{ ProcedingDetail.publisherUserName }}</span>
                </div>
                <div class="lili">
                    <span class="left">发布者联系电话:</span>
                    <span class="right">{{ ProcedingDetail.publisherTelephone }}</span>
                </div>
                <div class="lili">
                    <span class="left">申请人:</span>
                    <span class="right">{{ ProcedingDetail.applicantUserName }}</span>
                </div>
                <div class="lili">
                    <span class="left">申请者联系电话:</span>
                    <span class="right">{{ ProcedingDetail.applicantTelephone }}</span>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="delete">
                <span @click="goOperate">确认完成</span>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted, reactive } from "vue";
import { getOperationDetail, updateOperationStatus } from '@/apis/parttime/index'
import type { ProcedingDetailData, operationData } from '@/interfaces/parttime'
import { ElMessage } from 'element-plus';
import { useRoute, useRouter } from "vue-router";
const route = useRoute()
const router = useRouter()
const operationId: any = route.params.id
const ProcedingDetail = ref<ProcedingDetailData>({});
const operationList = reactive<operationData>({
    operationId: operationId,
    jobId: ProcedingDetail.value.jobId,
    status: ProcedingDetail.value.status
});
const getData = async () => {
    let result = await getOperationDetail((operationId));
    //console.log(result.data.data)
    console.log(result)
    ProcedingDetail.value = result.data.data;
    //console.log(result[0])
}
const goOperate = () => {
    Operate();
};

const Operate = async () => {
    let result = await updateOperationStatus((operationList));
    //console.log(result.data.data)
    console.log(result)
    if (result.data.code == 0) {
        router.push("/Finish/");
    } else if (result.data.code == 1) {
        ElMessage.error("您无权修改订单状态")
    }

}
const goBack = () => {
    router.go(-1);
    // 使用Vue Router的go方法返回上一个页面
};
onMounted(() => {
    getData();
})
</script>
<style scoped lang="less">
.body {
    display: block;

    .message-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
        border-bottom: 1px solid #ccc;
    }

    .arrow-icon {
        cursor: pointer;
        margin-right: 10px;
        color: #0A1629
    }

    .head-center {
        text-align: center;
        flex-grow: 1;
        color: #0A1629
    }


    .center1 {
        margin-top: 30px;
        padding-bottom: 0.8rem;
        padding-left: 0.8rem;
        padding-right: 0.8rem;
        display: flex;

        .content {
            font-size: 0.933333rem;
            color: rgb(21, 21, 21);
            line-height: 1.4rem;
            margin-top: -0.2rem;
            word-break: break-all;

        }
    }

    .center2 {
        width: 23.4rem;
        padding-right: 0.8rem;
        padding-left: 0.8rem;
        padding-bottom: 0.866667rem;
        background-color: rgb(255, 255, 255);
        display: flex;
        align-items: flex-start;
        flex-direction: column;

        .li {
            width: 23.4rem;
            background-color: rgb(255, 255, 255);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            font-size: 0.866667rem;

            .lili {
                width: 23.4rem;
                background-color: rgb(255, 255, 255);
                font-size: 0.8rem;

                .left {
                    display: inline-block;
                    color: rgb(153, 153, 153);
                    width: 6.8rem;
                    line-height: 1.4rem;
                    font-size: 0.8rem;
                    vertical-align: middle;
                }

                .right {
                    color: rgb(51, 51, 51);
                    line-height: 1.66667rem;
                    font-size: 0.8rem;
                    vertical-align: middle;
                }
            }
        }

    }

    .footer {
        width: 25rem;
        background-color: rgb(255, 255, 255);
        text-align: right;

        .delete {
            margin-top: 60px;
            position: relative;
            display: inline-block;

            height: 8vw;
            line-height: 7.73333vw;
            padding-left: 3.73333vw;
            padding-right: 3.73333vw;
            border: .26666vw solid #73C975;
            min-width: 20.8vw;
            font-size: 3.46666vw;
            color: #73C975;
            border-radius: 4.4vw;
            text-align: center;
            vertical-align: middle;
        }
    }
}
</style>