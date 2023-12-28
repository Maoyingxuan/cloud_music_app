<template>
    <div class="FooterMusic">
        <div class="footerLeft">
      <img :src="playList[playListIndex].al.picUrl" alt="" />
      <div>
        <p>{{playList[playListIndex].al.name}}</p>
        <span>横滑切换上下首哦</span>
      </div>
    </div>
    <div class="footerRight">
            <svg @click="play" class = "icon" aria-hidden="true" v-if="isbtnShow">
            <use xlink:href = "#icon-bofang"></use>
            </svg>
            <svg @click="pause" class = "icon" aria-hidden="true" v-else>
            <use xlink:href = "#icon-zanting"></use>
            </svg>
            <svg class = "icon" aria-hidden="true">
            <use xlink:href = "#icon-danlieliebiao"></use>
            </svg>
    </div>
    <audio ref="audio" :src=" `https://music.163.com/song/media/outer/url?id=${playList[playListIndex].id}.mp3`"></audio>
    </div>
</template>
<script>
import {mapMutations, mapState} from 'vuex'
export default {
        mounted(){
            console.log(this.$refs);
        },
    methods:{
        play:function()
        {
            this.$refs.audio.play()
            this.updateisbtnShow(false)
            console.log(this.isbtnShow);
        },
        pause:function()
        {
            this.$refs.audio.pause()
            this.updateisbtnShow(true)
            console.log(this.isbtnShow);
        },
            ...mapMutations(['updateisbtnShow'])
    },
    computed:{
            ...mapState(['playList','playListIndex','isbtnShow'])
        },

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
}
</style>