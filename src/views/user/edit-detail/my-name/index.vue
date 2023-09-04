<template>
  <div class="edit-box">
      <div>
          <van-nav-bar
          left-text=""
          title="更改姓名"
          :border=false
          :safe-area-inset-top=true
          @click-left="onClickLeft"
      >
              <template #left>
                  <van-icon name="arrow-left" size="18" color="black" />
              </template>
              <template #right>
                  <button style="
                  background-color: #73ca76;
                  color: white;
                  border: none;
                  border-radius: 5px;
                  width: 55px;
                  height: 28px;">保存</button>
              </template>
          </van-nav-bar>
      </div>
      <div class="box-input">
          <input type="text" placeholder="输入新的名字吧~">
      </div>
  </div>
</template>

<script setup lang="ts">
const onClickLeft = () => history.back();
</script>

<style scoped lang="less">
.edit-box{
  height: 100%;
  width: 100%;
  background-color: rgba(245,244,244);
  .van-nav-bar{
  --van-nav-bar-text-color:gray;
  --van-nav-bar-arrow-color:black;
  }
  .box-input{
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 20px;
      input{
          width: 100%;
          background-color: rgba(245,244,244);
          border: none;
          border-bottom: 1px solid 
          #73ca76;
          font-size: 14px;
          padding: 0 15px 5px;
      }
      
      
  }
}

</style>