<template>
<div class="user-box">
  <div class="box-top">
    <div class="user-avatar">
        <img :src="userCard.userImage" alt="">
    </div>
    <div class="user-name">
      <h3>{{ userCard.consignee }}</h3>
      <span>这个人很懒，什么也没留下~</span>
    </div>
    <van-icon name="setting-o" size="28"/>
  </div>

  <div class="box-balance">
        <span>18<br><p>卡券</p></span>
        <RouterLink to="user/Balance">
          <span>{{ userCard.balance }}<br><p>余额</p></span>
        </RouterLink>
        <span>100<br><p>信用分</p></span>
        <span><van-icon name="gold-coin-o" size="25" /><p>充值</p></span>
    </div>

  <div class="box-orders1">
    <div class="orders-top1">
      <p>{{ contentText }}</p>
      <button @click="buttonContentToggle"><van-icon name="exchange" size="20"/>{{ buttonText }}</button>
    </div>
    
    <!-- 我的兼职 -->
    <div v-if="isBottom1Visible" class="orders-bottom orders-bottom1">
      <span @click="() => { router.push('/campus/user/my-parttime/posted'); }">15<br><p>我的发布</p></span>
      <span>18<br><p>我的申请</p></span>
      <span>8<br><p>执行中</p></span>
      <span>5<p>已完成</p></span>
    </div>

    <!-- 我的交易，页面刷新默认显示我的交易-->
    <div v-else class="orders-bottom orders-bottom2">
      <span>18<br><p>我的发布</p></span>
      <span>15<br><p>我的申请</p></span>
      <span>12<br><p>执行中</p></span>
      <span>8<p>已完成</p></span>
    </div>
  </div>

  <div class="box-function">
    <span><van-icon name="clock-o" size="20"/><br><p>浏览历史</p></span>
    <span><van-icon name="notes-o"  size="20"/><br><p>我的帖子</p></span>
    <span><van-icon name="like-o" size="20" @click="toCollect"/><br><p>收藏夹</p></span>
    <RouterLink to="user/detail">
      <span><van-icon name="envelop-o" size="20"/><p>个人资料</p></span>
    </RouterLink>
  </div>

  <div class="box-buttons">
    <van-button size="large" to="user/account">账号与安全</van-button>
    <van-button size="large" @click="handleLogout">退出登录</van-button>
  </div>
</div>
</template>

<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router';
import { ref, reactive, onMounted } from 'vue';
import { getDetailApi, logoutApi } from '@/apis/user/index'
import { clearMessageCacheApi } from '@/apis/message/index'
import { showConfirmDialog, showToast } from 'vant';
import { useGlobalStore } from '@/stores/useGlobalStore';

const globalStore = useGlobalStore();
const router = useRouter();

//我的交易和我的兼职切换逻辑
const contentText = ref('我的交易');
const buttonText = ref('我的兼职');
const outsideClass = ref('box-orders2');
const insideClass = ref('orders-top2');

const buttonStatus = ref(false);
const isBottom1Visible = ref(false);
const buttonContentToggle = () => {
  //控制页面是否渲染，不能仅仅更换内容因为后期点击后跳转的是不同的页面
  isBottom1Visible.value = !isBottom1Visible.value

  if(buttonStatus.value){
    contentText.value = '我的交易'
    buttonText.value = '我的兼职'
    buttonStatus.value = !buttonStatus.value
  }
  else if(!buttonStatus.value){
    contentText.value = '我的兼职'
    buttonText.value = '我的交易'
    buttonStatus.value = !buttonStatus.value
  }
}

//调用getDetail接口渲染用户信息
const userCard = ref<any>([]);
const getUser = async () => {
  const { data: res } = await getDetailApi();
  console.log('getUser', res);
  userCard.value = res.data;
  console.log(userCard.value);
}

onMounted(getUser);

const handleLogout = () => {
  showConfirmDialog({
    title: '提示',
    message: '确认退出登录?'
  }).then(async () => {
    const { data: res } = await clearMessageCacheApi();
    console.log('clearMessageCache', res);
    if (res.code === 0) {
      // 先清除消息缓存然后再清理token
      const { data: res2 } = await logoutApi();
      
      if (res2.code === 0) {
        globalStore.$reset();
        showToast('你已成功退出~');
        router.push('/login');
      } else showToast('OOPS! 内部小错误,请稍后重试!');
    } else showToast('OOPS! 内部小错误,请稍后重试!');

  }).catch(() => showToast('已取消操作'));
}

const toCollect = () => {
  const uid = globalStore.userinfo.uid;
  router.push(`/campus/user/collect/${uid}`);
}

</script>

<style lang="less" scoped>
.user-box{
  font-size: 16px;
  height:620px;
  width: auto;
  // background-color:rgb(250,246,238,0.5);
  background: linear-gradient(to bottom, #ffffff ,#f5f4f4);
  background-color: rgba(245,244,244);
  overflow: auto;//清除浮动
  .box-top{
    display: flex;
    height: 70px;
    padding: 30px 20px 20px 20px;
    align-items: center;
    .user-avatar{
      display: flex;
      height: 60px;
      width: 60px;
      align-items: center;
      border-radius:6px;
      margin-left: 10px;
      img{
        object-fit: cover;
        border-radius: 6px;
        width:100%;
        height: 100%;
      }
    }
    .user-name{
      margin-left: 20px;
      h3{
        
        font-weight: 700;
        margin:0 0 5px 0;
      }
      span{
        font-size: 12px;
        color: rgb(151, 151, 151);
      }
    }
    .van-icon{
      margin-left: 50px;
    }
  }
  
  .box-balance {
    
    display: flex;
    height: 60px;
    justify-content: space-between;
    align-items: center;
    margin: 0 40px 8px;
    text-align: center;
    span{
      font-size: 20px;
      color: black;//覆盖routerlink默认的蓝色
      p{
        font-size:14px;
      }
    } 
  }
  .box-orders1 {
    height: 100px;
    background-color: white;
    margin: 0 20px 15px;
    border: 1px solid rgba(208, 190, 165, 0.8);
    border-radius: 10px;
    background-color: rgb(251, 247, 235);
    overflow: auto;
    .orders-top1 {
      display: flex;
      height: 35%;
      padding:0 10px;
      justify-content:space-between;
      align-items: center;
      p{
        font-weight: 700;
      }
      button{
        display: flex;
        font-size: 12px;
        width: 100px;
        height: 25px;
        background-color: rgba(208, 190, 165);
        border: none;
        border-radius: 20px;
        justify-content: space-evenly;
        align-items: center;
      }
    }

    .box-orders2 {
      height: 100px;
      background-color: white;
      margin: 0 20px 15px;
      border: 1px solid #abdfac;
      border-radius: 10px;
      background-color:#f6fcf6;
      overflow: auto;
      .orders-top2 {
        display: flex;
        height: 35%;
        padding:0 10px;
        justify-content:space-between;
        align-items: center;
        p{
          font-weight: 700;
        }
        button{
          display: flex;
          font-size: 12px;
          width: 100px;
          height: 25px;
          background-color: #abdfac;
          border: none;
          border-radius: 20px;
          justify-content: space-evenly;
          align-items: center;
        }
      }
    }


    .orders-bottom {
      display: flex;
      height: 60%;
      // padding: 0 10px 10px 10px;
      justify-content:space-around;
      align-items:center;
      text-align: center;
      span{
        font-size: 18px;
        p{
          font-size: 12px;
        }
      }
    }
  }
  
  .box-function {
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    height: 70px;
    margin: 0 20px 15px;
    background-color: white;
    border-radius: 10px;
    span{
      color: black;
      p{
      font-size: 12px;
    }
    }
  }

  .box-buttons {
    --van-cell-line-height:36px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    .van-button{
      --van-button-large-height:55px;
      margin:0 20px 15px 20px;      
      border-radius:10px;
    }
    
   
  }
}
</style>