import { createStore } from 'vuex'
import {getMusicLyric} from '@/request/api/musicItem.js'
export default createStore({
  state: {
    playList:[{
      al:{
        id: 91237927,
        name: "罗生门（Follow）",
        pic: 109951165076380460,
        picUrl: "https://p2.music.126.net/yN1ke1xYMJ718FiHaDWtYQ==/109951165076380471.jpg",
        pic_str: "109951165076380471"
      },
      id: 1456890009,
      name:"罗生门（Follow）",
      ar:[{
        name:'Wiz_H张子豪'
      }]
    }],
    playListIndex:0, //默认下标0
    isbtnShow:true,//播放
    detailShow:false,//歌曲详情页
    lyricList:{},
    currentTime:0 ,
    duration:0,
  },
  getters: {
  },
  mutations: {
    updateisbtnShow:function(state,value){
      state.isbtnShow = value
  },
  updatePlayList:function(state,value){
    {
      state.playList = value
    }
  },
  updatePlayListIndex:function(state,value){
    state.playListIndex = value
  },
  updateDetailShow:function(state){
    // console.log("2");    
    state.detailShow = !state.detailShow
    // console.log(state.detailShow);
  },
  updateLyricList:function(state,value){
    state.lyricList = value
  },
  updateCurrentTime:function(state,value){
    state.currentTime = value
    // console.log(state.currentTime);
    
  },
  updateDuration:function(state,value){
    state.duration = value
    console.log(state.duration);
  }
},
  actions: {
    getLyric:async function(context,value){
      let res = await getMusicLyric(value)
      console.log(res);
      context.commit("updateLyricList",res.data.lrc)
    }
  },
  modules: {
  }
})
