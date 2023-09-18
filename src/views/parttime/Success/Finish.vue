<template>
    <div class="head">
        <header class="message-title">
            <div class="head-left">
                <el-icon class="arrow-icon" @click="goBack">
                    <ArrowLeft />
                </el-icon>
            </div>

        </header>
    </div>
    <div calss="order">
        <span>已完成</span>
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



.order {
    justify-content: center;
    /* 水平居中 */
    align-items: center;
    /* 垂直居中 */
    font-size: 30px;
    margin-top: 20px;
}
</style>