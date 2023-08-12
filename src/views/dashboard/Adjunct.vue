<template>
    <!-- 这里先渲染10个，后期把10换成存放数据的store对象、数组名即可 -->
  <div class="adjunct-card" v-for="item in 10" :key="item">
    <!-- 卡片左边（占据3/5） -->
    <div class="card-left">
        <div  class="title">Java后端开发</div>
        <div  class="request">应届生·三个月·不加班</div>
        <div  class="tag-container">
            <span>实习生</span><span>可大一大二</span>
        </div>
    </div>
    <!-- 卡片右边（占据2/5）按照要求公司名字长度<=6 -->
    <div class="card-right">
        <div class="price">￥6k-10k/月</div>
        <div class="time">2023-08-09</div>
        <div class="company">
            <!-- 公司图标 -->
           <div class="company-logo">
            <img src="../../assets/要发财.png" alt="">
           </div>
           松树技术
        </div>
    </div>
  </div>
  <!-- 加号 -->
  <div class="bubble-container">
    <div class="custom-bubble">
      <van-icon name="plus" class="bubble-icon" />
    </div>
  </div>
  
</template>

<script setup lang="ts">

</script>

<style scoped lang="less">
body{  
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */

    .adjunct-card{
    display: grid;
    grid-template-columns:3fr 2fr;//把兼职简介分左右区域
    height: 90px;
    margin: 12px;
    background-color: #fff;
    border: 1px solid rgb(213, 213,213,0.3) ;
    border-radius:8px;
    .card-left{
        display: grid;
        grid-template-rows: repeat(3, 1fr); 
        align-items: center;
        margin: 8px;
    
        .title{
            font-size: 18px;
            font-weight:700;
            
            
        }
        .request{
            font-size:12px;
            color:#ababab;
            padding: 1px;
        }
        .tag-container {
            font-size:12px;
            color:#ababab;
            span{
                border: 1px solid #ababab;
                border-radius: 3px;
                padding: 2px 5px;
                margin-right:8px;
            }
        }
        
    }
    .card-right{
        display: grid;
        grid-template-rows: repeat(3, 1fr); 
        align-items: center;
        font-size:16px;
        margin: 8px ;
        text-align: end;

        .price{
            font-size:18px;
           
            color:#ff422c;

        }
        .time{
            font-size:12px;
            color:#ababab;
            
        }
        .company{

            display: flex;
            align-items:center;
            justify-content:flex-end;
            font-size:14px;
            color:#3b3b3b;
            .company-logo{
                width: 20px;
                height: 20px;
                border: 1px solid rgb(213, 213, 213);
                border-radius: 50%;
                overflow: hidden;
                margin-right:5%;
                    img{
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
            }
        }
    }

}
/* 悬浮气泡容器 */
.bubble-container {
  position: fixed;
  bottom: 70px; /* 距离屏幕底部的距离 */
  right: 20px; /* 距离屏幕右侧的距离 */
    /* 自定义悬浮气泡的样式 */
    .custom-bubble {
        background-color: #73ca76; /* 修改为你想要的颜色值 */
        border-radius: 50%; /* 使气泡变为圆形 */
        width: 40px; /* 修改为你想要的宽度 */
        height: 40px; /* 修改为你想要的高度 */
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* 添加阴影效果 */
            
        .bubble-icon {
            color: #ffffff; /* 修改为你想要的颜色值 */
            font-size: 20px; /* 修改为你想要的图标大小 */
       }
  }
 }
}



</style>