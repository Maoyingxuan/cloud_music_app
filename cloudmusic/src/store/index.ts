import { createStore } from 'vuex'

export default createStore({
  state: {
    playList:[{
      al:{
        id: 131343771,
        name: "9¾",
        pic: 109951166541156980,
        picUrl: "https://p1.music.126.net/sHq_J8BKeBdu1YFedO8Ejw==/109951166541156978.jpg",
        pic_str: "109951166541156978"
      },
      id: 1857534437,
    }],
    playListIndex:0, //默认下标0
    isbtnShow:true,//播放
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
  }
},
  actions: {
  },
  modules: {
  }
})
