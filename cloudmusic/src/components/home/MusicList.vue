<template>
    <div class = "musicList">
        <div class = "musicTop">
            <div class = "title">发现好歌单</div>
            <div class = "more">查看更多</div>
        </div>
        <div class = "musicContent">
            <van-swipe :loop="false" :width="150" class = "swiper" :show-indicators="false">
            <van-swipe-item v-for="item in musicList" :key = "item">
                <img :src="item.picUrl" alt="">
                <span class = "playCount">
                    <svg class = "icon" aria-hidden="true">
                    <use xlink:href = "#icon-bofangliang"></use>
                    </svg>
                    {{changeCount(item.playCount)}}
                </span>
                <span class = "name">
                    {{item.name}}
                </span>
            </van-swipe-item>
        </van-swipe>

        </div>
    </div>
</template>
<script>
import {getMusicList} from '@/request/api/home'
export default{
    data(){
        return{
            musicList:[]
        }
    },
    methods:{
        async getMusicList(){
            let res = await getMusicList()
            this.musicList = res.data.result
        },
        changeCount:function(num){
            if(num>=100000000){
                return(num/100000000).toFixed(1)+'亿'
            }else if(num>=10000){
                return(num/10000).toFixed(1)+'万'
            }
        }        
    },
    mounted()
    {
        this.getMusicList()
    }
}
</script>

<style scoped>
    .musicList{
        width:100%;
        height: 300px;
        padding: 10px;
    }
    .musicTop{
        display: flex;
        width: 100%;
        height: 30px;
        justify-content: space-between;
        margin-bottom: 10px;
    }
    .title{
        font-size: 20px;
        font-weight:900;
    }
    .more{
        border:1px solid #ccc;
        text-align: center;
        line-height: 30px;
        padding: 0 10px;
        border-radius: 20px;
    }
    .musicContent{
        width: 100%;
        height: 180px;
    }
    .van-swipe-item {
      padding-right: 0.2rem;
      position: relative;
      height: 3.8rem;
      }
    img{
        width: 100%;
        height: 2.4rem;
        border-radius: 0.2rem;
    }
    .playCount {
        position: absolute;
        z-index: 100;
        right: 0.3rem;
        color: white;
        margin-top: 0.06rem;
    }
    .icon {
          width: 0.3rem;
          height: 0.3rem;
        }
    .name {
        bottom: 0px;
        }
</style>