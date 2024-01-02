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
    <div class="detailContent">
        中间
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
      <div class = "footerContent"></div>
      <div class = "footer">
        <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-shangyishoushangyige"></use>
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
        <use xlink:href="#icon-xiayigexiayishou"></use>
      </svg>
      </div>

    </div>
    </div>
</template>
<script>
import { Vue3Marquee } from 'vue3-marquee'
import { mapMutations } from 'vuex'
// import 'vue3-marquee/dist/style.css'
export default{
    components: {
    Vue3Marquee,
  },
    mounted()
    {
        console.log(this.musicList);
    },
    props:['musicList','isbtnShow','play'],
    methods:{
        backHome: function () {
      // this.isLyricShow = false;
      this.updateDetailShow();
      // console.log("1");
    },
      ...mapMutations(['updateDetailShow'])
    }
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
.detailContent {
  width: 100%;
  height: 9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
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
    }
    .bofang {
      width: 1rem;
      height: 1rem;
    }
  }
}
</style>