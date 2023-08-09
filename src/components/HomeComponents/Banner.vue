<template>
    <div class="BannerContainer">
        <van-swipe :autoplay="2000" lazy-render>
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
    margin:8px;
    .van-swipe .van-swipe-item {
        display: flex;
        width: 100%;
        height: 100px;
        color: #fff;
        font-size: 20px;
        justify-content: center;
        align-items: center;
        background-color: white;

        img{
            object-fit:contain;
            width: 100%;
    }
  }
  
  
}
</style>