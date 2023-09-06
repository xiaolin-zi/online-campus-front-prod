<template>
    <goBack />
    <RouterLink to="">
        <div class="post-adjunct">
        <button>
            <div class="button-left">
                
                <span style="font-size:18px;font-weight: 700;">发布兼职</span>
                <br>
                <span style="font-size:14px;color:gray">好的兼职，都在这里</span>
            </div>
            <div class="button-right">
                <van-icon name="arrow" />
            </div>
        </button> 
    </div>
    </RouterLink>
    

    <RouterLink to="">
        <div class="post-deal">
        <button>
            <div class="button-left">
                
                <span style="font-size:18px;font-weight: 700;">发布交易</span>
                <br>
                <span style="font-size:14px;color:gray">30s快速发布交易</span>
            </div>
            <div class="button-right">
                <van-icon name="arrow" />
            </div>
        </button>
    </div>
    </RouterLink>
    
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import goBack from '@/components/NavBars/goback.vue'
  const onClickLeft = () => history.back();
</script>

<style scoped lang="less">


.post-adjunct{
    display: flex;
    color: black;
    justify-content: center;
    align-items: center;
    margin: 15px;
    button{
        display: flex;
        font-size:16px;
        justify-content: space-between;
        align-items: center;
        padding: 15px;
        width: 90%;
        height: 80px;
        background-color:#D4F4Df;
        border: none;
        border-radius: 10px;
        //设置点击效果
        transition: background-color 0.1s;
        
        .button-left{
            text-align: left;
        }
        .button-right{
            text-align: right;
        }
        
    }
    button:active{
            background-color: rgba(0,0,0,0.3);
        }
}
.post-deal{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px;
    color: black;
    button{
        display: flex;
        font-size:16px;
        justify-content: space-between;
        align-items: center;
        padding: 15px;
        width: 90%;
        height: 80px;
        background-color:#FEE0DA;
        border: none;
        border-radius: 10px;
         //设置点击效果
         transition: background-color 0.1s;
        .button-left{
            text-align: left;
        }
        
    }
    button:active{
            background-color: rgba(0,0,0,0.3);
        }
}

</style>