<template>
    <div class="BannerContainer">
        <van-swipe :autoplay="3000" indicator-color="#76ca73" loop>
            <van-swipe-item v-for="image in images" :key="image">
                <img :src="image" />
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script setup lang="ts">
const getImageUrl = (name:string) => {
        return new URL(`../../assets/${name}`, import.meta.url).href
        }
  const images = [
      getImageUrl('校门.jpg'),
      getImageUrl('夕阳.jpg'),
      getImageUrl('晚霞.jpg'),
    ];
  
</script>

<style lang="less" scoped>
.BannerContainer{
    display: flex;
    margin:10px 20px;
    height: 140px;
    justify-content: center;
    .van-swipe{
        display: flex;
        color: #fff;
        font-size: 20px;
        justify-content: center;
        align-items: center;
        background-color: white;
        border-radius: 10px;

        img{
            object-fit:contain;
            width: 100%;
        }

  } 
}
</style>