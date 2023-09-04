<template>
    <div class="user-detail">
    <div>
        <van-nav-bar
            right-text="保存"
            :border=false
            :safe-area-inset-top=true
            title="编辑个人资料"
            @click-left="onClickLeft"
            @click-right="onClickRight"
        >
        <template #left>
            <van-icon name="cross" size="18" color="black" />
        </template>
        </van-nav-bar>
    </div>

    <div class="user-messages">
        <div class="box-top">
            <van-uploader :after-read="afterRead" >
                <div class="user-avatar">
                    <img src="../../assets/img/avatar1.jpg" alt="">
                    <div class="icon-box">
                        <van-icon name="photograph" color="#ffff"
                        size="18px"/>
                    </div>
                </div>
            </van-uploader>
        </div>

        <div class="box-bottom">
            <van-cell-group inset border>
                <van-cell title="姓名" value="遮詹" is-link/>
                <van-cell title="简介" value="未设置" is-link />
                <van-cell title="性别" value="男"  is-link/>
                <van-cell title="生日" value="未设置"  is-link/>
                <van-cell title="学校" value="填写学校，发现校友" is-link/>
                <van-cell title="年级" value="填写年级" is-link/>
            </van-cell-group>
        </div>

    </div>
    </div>
</template>

<script setup lang="ts">
import { showToast } from 'vant';

const onClickLeft = () => history.back();
const onClickRight = () => showToast('保存');

const afterRead = (file: any) => {
      // 此时可以自行将文件上传至服务器
      console.log(file.file.name);
      
    };
</script>

<style scoped lang="less">
.user-detail{
    // background-color:black;
    .van-nav-bar{
    --van-nav-bar-text-color:gray;
    --van-nav-bar-arrow-color:black;
    }
    .box-top{
    display: flex;
    height: 110px;
    margin: 30px 20px 30px 20px;
    // background-color: pink;
    align-items: center;
    .user-avatar{
      display: flex;
      position:relative;
      height: 90px;
      width: 90px;
      align-items: center;
      margin-left: 15px;
        img{
        object-fit: cover;
        border-radius: 50%;
        width:100%;
        height: 100%;
          }
      .icon-box{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: black;
        width: 30px;
        height: 30px;
        position: absolute;
        bottom: 0;
        right: 0;
        border-radius: 50%;
        opacity: 0.8;
    }
    }
}
    .box-bottom{
       .van-cell-group{
        --van-cell-font-size:16px;
        --van-cell-line-height:30px;

       } 
    }
}
</style>