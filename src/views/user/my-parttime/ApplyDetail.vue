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
                    <p>申请详情</p>
                </div>
                <div class="head-right" @click="goDelete">
                    <span>删除记录</span>
                </div>
            </header>
        </div>
        <div class="center1">
            <div class="content">{{ Applied.jobContent }}</div>
        </div>
        <div class="center2">
            <div class="li">
                <div class="lili">
                    <span class="left">工作地点</span>
                    <span v-if="Applied.location === 0">佛山校区</span>
                    <span v-else="Applied.location===1">广州校区</span>
                </div>
                <div class="lili">
                    <span class="left">工作天数</span>
                    <span class="right">{{ Applied.workingDays }}天</span>
                </div>
                <div class="lili">
                    <span class="left">招募人数</span>
                    <span class="right">{{ Applied.recruitNum }}人</span>
                </div>
                <div class="lili">
                    <span class="left">创建时间</span>
                    <span class="right">{{ Applied.createTime }}</span>
                </div>
                <div class="lili">
                    <span class="left">更新时间</span>
                    <span class="right">{{ Applied.updateTime }}</span>
                </div>
                <div class="lili">
                    <span class="left">截止时间</span>
                    <span class="right">{{ Applied.deadline }}</span>
                </div>
                <div class="lili">
                    <span class="left">发布者</span>
                    <span class="right">{{ Applied.publisherUserName }}</span>
                </div>
                <div class="lili">
                    <span class="left">发布者联系电话</span>
                    <span class="right">{{ Applied.publisherTelephone }}</span>
                </div>
            </div>
        </div>

    </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import { getApplyDetailApi, deleteApplyApi } from '@/apis/parttime/index'
import type { AppliedDetailData } from '@/interfaces/parttime'
import { ElMessage } from 'element-plus';
import { useRoute, useRouter } from "vue-router";
const route = useRoute()
const router = useRouter()
const applicationId: any = route.params.id
const Applied = ref<AppliedDetailData>({});

const getData = async () => {
    let result = await getApplyDetailApi((applicationId));
    //console.log(result.data.data)
    console.log(result)
    Applied.value = result.data.data;
    //console.log(result[0])
}
const goDelete = () => {
    Delete();
};

const Delete = async () => {
    let result = await deleteApplyApi((applicationId));
    //console.log(result.data.data)
    console.log(result)
    if (result.data.code == 0) {
        router.push("/Delete/");
    } else if (result.data.code == 1) {
        ElMessage.error("申请已通过，删除失败")
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

    .head-right {
        text-align: right;

        color: #73C975
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


}
</style>
