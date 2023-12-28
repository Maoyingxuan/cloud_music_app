<template>
    <div></div>
    <MLITop :playList = "state.playList" />
</template>
<script>
// import MusicList from '@/components/home/MusicList.vue'
import { useRoute } from 'vue-router'
import { reactive, onMounted } from "vue"
import {getMusicItem} from '@/request/api/musicItem.js'
import MLITop from '@/components/MusicItem/MLITop.vue'
export default ({
    setup() {
        const state = reactive({
            playList:[]
        })
        onMounted(async ()=>{
            try{
            let id = useRoute().query.id
            let res = await getMusicItem(id)
            console.log(res.data.playlist);
            state.playList = res.data.playlist
            sessionStorage.setItem('itemDetail',JSON.stringify(state))  
            }catch(error){
                console.log(error)
            }
            
        })
        return {state}
    },
    components:{
        MLITop
    }
})
</script>
