<template>
    <div class="account-box">
        <van-nav-bar
            left-text=""
            title="账号与安全"
            :border=false
            :safe-area-inset-top=true
            @click-left="onClickLeft"
        >
        <template #left>
            <van-icon name="arrow-left" size="18" color="black" />
        </template>
    </van-nav-bar>

    <van-notice-bar left-icon="volume-o" mode="link">点击进行实名认证，提现更安心！</van-notice-bar>
    <div class="box-cells">
        <van-cell title="手机号" value="183******04" size="large" is-link />
        <van-cell title="邮箱号" value="317******@qq.com" size="large" is-link />
        <van-cell title="修改密码" value="" size="large" is-link />
        <van-cell title="注销账号" value="" size="large" is-link />
    </div>
   

</div>
</template>

<script setup lang="ts">
const onClickLeft = () => history.back();
</script>

<style scoped lang="less">

.account-box{
    width: 100%;
    height: 100%;
    background-color: rgba(245,244,244);
   
    .box-cells{
        margin: 10px 20px 0 20px;
        .van-cell{
            margin: 0 0 20px 0;
            border-radius: 8px;
            --van-cell-line-height:36px;
        }
    }
}
</style>