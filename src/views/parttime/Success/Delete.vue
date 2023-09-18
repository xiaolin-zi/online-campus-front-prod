<template>
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
        </header>
    </div>
    <div class="order">
        <div class="content">删除成功</div>
    </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter()
const goBack = () => {
    router.go(-2);
    // 使用Vue Router的go方法返回上一个页面
};
</script>

<style scoped lang="less">
.head {
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
    }

    .head-center {
        text-align: center;
        flex-grow: 1;
    }
}

.order {
    .content {
        position: relative;
        display: flex;
        font-size: 21px;
        margin: 40px 0px 0px;
        width: 100%;
        justify-content: center;
        align-items: center;
        text-align: center;
        visibility: visible;
        color: rgb(102, 102, 102);
        height: auto;
        overflow: hidden;
        max-width: none;
        -webkit-box-pack: center;
        -webkit-box-align: center;

    }
}
</style>