<template>
<div>
    <TopNav/>
    <SwiperTop/>
</div>

</template>

<script>
import TopNav from '@/components/home/TopNav.vue'
import SwiperTop from '@/components/home/SwiperTop.vue'
export default{
name:"home",
components:{
  TopNav,
SwiperTop,
}
}
</script>
