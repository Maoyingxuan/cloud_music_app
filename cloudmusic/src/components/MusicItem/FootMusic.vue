<template>
    <div class="FooterMusic">
        <div class="footerLeft" @click="updateDetailShow">
      <img :src="playList[playListIndex].al.picUrl" alt="" />
      <div>
        <p>{{playList[playListIndex].al.name}}</p>
        <span>横滑切换上下首哦</span>
      </div>
    </div>
    <div class="footerRight">
        <div class = "srcbox" >
            <svg @click="play" class = "icon" aria-hidden="true" v-if="isbtnShow">
            <use xlink:href = "#icon-bofang"></use>
            </svg>
            <svg @click="play"  class = "icon" aria-hidden="true" v-else>
            <use xlink:href = "#icon-zanting"></use>
            </svg>
        </div>
            
            <svg class = "icon" aria-hidden="true">
            <use xlink:href = "#icon-danlieliebiao"></use>
            </svg>
    </div>
    <audio ref="audio"   :src=" `https://music.163.com/song/media/outer/url?id=${playList[playListIndex].id}.mp3`"></audio>
    <van-popup class = "popup" v-model:show="detailShow" position="right" :style = "{ height:'100%', width:'100%'}">
    <MusicDetail/>
    </van-popup>
    </div>
</template>
<script>
import {mapMutations, mapState} from 'vuex'
import {MusicDetail} from '@/components/MusicItem/MusicDetail.vue'
export default {
        mounted(){
            console.log(this.$refs);
        },
        methods:{
    play: function () {
      // 判断音乐是否播放
    //   console.log("1");
      if (this.$refs.audio.paused) {
        this.$refs.audio.play();
        this.updateisbtnShow(false);
        // this.updateTime(); //播放就调用函数进行传值
      } else {
        this.$refs.audio.pause();
        this.updateisbtnShow(true);
        // clearInterval(this.interVal); //暂停清除定时器
      }
    },
            ...mapMutations(['updateisbtnShow','updateDetailShow'])
    },
    computed:{
            ...mapState(['playList','playListIndex','isbtnShow','detailShow'])
        },
        watch:{
            playListIndex:function(){
                this.$refs.audio.autoplay = true
                if(this.$refs.audio.paused){
                    this.updateisbtnShow(false)
                }
            },
            playList: function () {
                if (this.isbtnShow) {
                    this.$refs.audio.play();
                    this.updateisbtnShow(false);
      }
    },
        },
        components:{MusicDetail}

}
</script>
<style lang="less" scoped>
.FooterMusic {
  width: 100%;
  height: 1.4rem;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  border-top: 1px solid #999;
  display: flex;
  padding: 0.2rem;
  justify-content: space-between;
  .footerLeft {
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    img {
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
    }
  }
  .footerRight {
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icon {
      width: 0.6rem;
      height: 0.6rem;
    }
  }
  .popup{
      z-index: 999;
  }
}
</style>