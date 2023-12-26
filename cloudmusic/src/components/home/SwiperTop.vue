<template>
<div>
<van-swipe :autoplay="3000" lazy-render>
  <van-swipe-item v-for="image in state.images" :key="image">
    <img :src="image.pic" />
  </van-swipe-item>
  </van-swipe>

</div>




</template>
<style>
    .van-swipe{
        width: 100%;
        padding: 10px;
    }
    img{
    width: 100%;
    height: 160px;
         } 
    .van-swipe__indicator--active{
        background-color: #000;
    }
</style>
<script>
import { reactive,onMounted } from 'vue'
import {getBanner} from '@/request/api/home'
export default {
  setup() {
      const state = reactive({
          images:[]
      })
    onMounted(async()=>{
        let res = await getBanner()
        // console.log(res);
        state.images = res.data.banners
    })   
    return { state };
  },
};

</script>
