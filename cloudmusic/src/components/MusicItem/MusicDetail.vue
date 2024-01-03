<template>
<div>
<img :src="musicList.al.picUrl" alt="" class='bgimg'>
    <div class='detailTop'>
        <div class="detailTopLeft">
            <div>
            <svg class = "icon" aria-hidden="true" @click="backHome">
            <use xlink:href = "#icon-fanhui"></use>
            </svg>
            </div>
            <div class='leftMarquee'>
                <Vue3Marquee style="color:#fff" >{{musicList.al.name}}</Vue3Marquee>
                <!-- <p>{{musicList.al.name}}</p> -->
                <span v-for="(item) in musicList.ar" :key = "item">
                    {{item.name}}
                </span>
            </div>
        </div>
        <div class="tailTopRight">
            <svg class = "icon" aria-hidden="true">
            <use xlink:href = "#icon-fenxiang"></use>
            </svg>
        </div>
    </div>
    
        <!-- 显示歌词 -->
        <div class = 'musicLyric' ref = "musicLyric">
          <!-- {{lyricList.lyric}} -->
          <p v-for = "item in lyric" :key = "item" :class = "{active:(currentTime*1000>=item.time && currentTime*1000 <item.pre )}">
            {{item.lrc}}
          </p>
        </div>
        
        <!-- 底部组件分为三部分 -->
    <div class = "detailFooter"> 
      <div class = "footerTop">
        <!-- 四个图标 喜欢 下载 评论 列表 -->
        <svg class = "icon" aria-hidden="true">
            <use xlink:href = "#icon-aixin"></use>
            </svg>
        <svg class = "icon" aria-hidden="true">
            <use xlink:href = "#icon-xiazai"></use>
            </svg>
        <svg class = "icon" aria-hidden="true">
            <use xlink:href = "#icon-pinglun1"></use>
            </svg>
        <svg class = "icon" aria-hidden="true">
            <use xlink:href = "#icon-liebiao"></use>
            </svg>

      </div>
      <div class = "footerContent">
        <!-- 进度条 -->
        <input type="range" class="range" min = "0" max = "duration" v-model="currentTime" step ="0.05">
      </div>
      <div class = "footer">
        <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-shangyishoushangyige" @click="goPlay(-1)"></use>
      </svg>
      <svg
        class="icon bofang"
        aria-hidden="true"
        @click="play"
        v-if="isbtnShow"
      >
        <use xlink:href="#icon-bofang"></use>
      </svg>
      <svg class="icon bofang" aria-hidden="true" v-else @click="play">
        <use xlink:href="#icon-zanting"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xiayigexiayishou" @click="goPlay(1)"></use>
      </svg>
      </div>

    </div>
    </div>
</template>
<script>
import { Vue3Marquee } from 'vue3-marquee'
import { mapMutations,mapState } from 'vuex'
// import 'vue3-marquee/dist/style.css'
export default{
    components: {
    Vue3Marquee,
  },
    mounted()
    {
        // console.log(this.musicList);
        this.addDuration()
    },
    props:['musicList','isbtnShow','play',"addDuration"],
    methods:{
        backHome: function () {
      // this.isLyricShow = false;
      this.updateDetailShow();
      // console.log("1");
    },
      goPlay: function (num) {
      let index = this.playListIndex + num;
      if (index < 0) {
        index = this.playList.length - 1;
      } else if (index == this.playList.length) {
        index = 0;
      }
      this.updatePlayListIndex(index);
    },
      ...mapMutations(['updateDetailShow','updatePlayListIndex'])
    },
    
    computed:{
      ...mapState(['lyricList','currentTime','playListIndex','playList','duration']),
      lyric:function()
      {
        let arr;
              if (this.lyricList.lyric) {
        arr = this.lyricList.lyric.split(/[(\r\n)\r\n]+/).map((item, i) => {
          let min = item.slice(1, 3);
          let sec = item.slice(4, 6);
          let mill = item.slice(7, 10);
          let lrc = item.slice(11, item.length);
          let time =
            parseInt(min) * 60 * 1000 + parseInt(sec) * 1000 + parseInt(mill);
          if (isNaN(Number(mill))) {
            mill = item.slice(7, 9);
            lrc = item.slice(10, item.length);
            time =
              parseInt(min) * 60 * 1000 + parseInt(sec) * 1000 + parseInt(mill);
          }
          // console.log(min,sec,Number(mill),lrc);
          return { min, sec, mill, lrc, time };
        });
        arr.forEach((item, i) => {
          if (i === arr.length - 1 || isNaN(arr[i + 1].time)) {
            item.pre = 100000;
          } else {
            item.pre = arr[i + 1].time;
          }
        });
      }
      return arr
      }
    },
    watch:{
        currentTime:function(){
        let p = document.querySelector("p.active")
        if(p.offsetTop>300){
          this.$refs.musicLyric.scrollTop = p.offsetTop - 300
        }
        if(newValue === this.duration){
          if(this.playListIndex === this.playListIndex -1)
          {
            this.updatePlayListIndex(0)
            this.play()
          }else{
            this.updatePlayListIndex(this.playListIndex+1)
          }
        }
      }
    },
}


</script>

<style lang="less" scoped>
.bgimg {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  filter: blur(70px);
}
.detailTop {
  width: 100%;
  height: 2rem;
  display: flex;
  padding-top:1rem;
  padding-left: 0.3rem;
  padding-right:0.3rem ;
  justify-content: space-between;
  align-items: center;
  fill: #fff;
  .detailTopLeft {
    display: flex;
    align-items: center;
    .leftMarquee {
      width: 2rem;
      height: 100%;
      margin-left: 0.4rem;
      span {
        color: #999;
      }
      .icon {
        width: 0.3rem;
        height: 0.3rem;
        fill: #999;
      }
    }
  }
}
.musicLyric {
  width: 100%;
  height: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.2rem;
  overflow: scroll;
  p {
    color: rgb(190, 181, 181);
    margin-bottom: 0.3rem;
  }
  .active {
    color: #fff;
    font-size: 0.5rem;
  }
}
.detailFooter {
  width: 100%;
  height: 3rem;
  position: absolute;
  bottom: 0.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .footerTop {
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .icon {
       width: 0.6rem;
       height: 0.6rem;
       fill: rgb(245, 234, 234);
    }
  }
  .range {
    width: 100%;
    height: 0.06rem;
  }
  .footer {
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .icon {
      fill: rgb(245, 234, 234);
      width:0.8rem;
      height:0.8rem;
    }
    .bofang {
      width: 1rem;
      height: 1rem;
    }
  }
}
</style>