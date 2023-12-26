<template>
    <div>歌单详情页</div>
</template>
<script>
// import MusicList from '@/components/home/MusicList.vue'
import { useRoute } from 'vue-router'
import { reactive, onMounted } from "vue"
import {getMusicItem} from '@/request/api/musicItem.js'
export default ({
    setup() {
        const state = reactive({
            playList:[]
        })
        onMounted(async ()=>{
            // console.log(useRoute());
            let id = useRoute().query.id
            // console.log(id);
            let res = await getMusicItem(id)
            state.playList = res.data.playList
        })
        return {state}
    },
})
</script>
