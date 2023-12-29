<template>
    <div></div>
    <MLITop :playList = "state.playList" />
    <MLIList :musicList = "state.musicList" :subscribedCount = "state.subscribedCount"/>
</template>
<script>
// import MusicList from '@/components/home/MusicList.vue'
import { useRoute } from 'vue-router'
import { reactive, onMounted } from "vue"
import {getMusicItem,getMusic} from '@/request/api/musicItem.js'
import MLITop from '@/components/MusicItem/MLITop.vue'
import MLIList from '@/components/MusicItem/MLIList.vue'
export default ({
    setup() {
        const state = reactive({
            playList:{},
            musicList:[],
            subscribedCount:0
        })
        onMounted(()=>{
            init()
        })
        async function init(){
        try{
            let id = useRoute().query.id
            let res = await getMusicItem(id)
            console.log(res.data.playlist);
            state.playList = res.data.playlist
            state.subscribedCount = state.playList.subscribedCount
            let music = await getMusic(id)
            console.log(music)
            state.musicList = music.data.songs
            sessionStorage.setItem('itemDetail',JSON.stringify(state))  
            }catch(error){
                console.log(error)
            }
        }
        return {state}
    },

    components:{
        MLITop
    }
})
</script>
<style scoped>
  .MLITop .MLIList{
      z-index: 1;
  }
</style>