<template>
<img :src="musicList.al.picUrl" alt="" class='bgimg'>
    <div class='detailTop'>
        <div class="detailTopLeft">
            <div>
            <svg class = "icon" aria-hidden="true">
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
</template>
<script>
import { Vue3Marquee } from 'vue3-marquee'
// import 'vue3-marquee/dist/style.css'
export default({
     components: {
     Vue3Marquee,
  },
    mounted()
    {
        console.log(this.musicList);
    },
    props:['musicList']
})
</script>

<style lang="less" scoped>
.bgimg {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  filter: blur(70px);
}
.detailTop {
  width: 100%;
  height: 1rem;
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
</style>