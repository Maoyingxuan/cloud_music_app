<template>
  <FootMusic/>
  <router-view/>
</template>
<script>
import FootMusic from '@/components/MusicItem/FootMusic.vue'
export default {
  components:{
    FootMusic
  }
}
</script>
<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.icon{
  width: 0.4rem;
  height: 0.4rem;
}
a{
  color:black;
}
</style>
