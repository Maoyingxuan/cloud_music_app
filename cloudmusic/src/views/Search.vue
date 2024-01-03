<template>
    <div class = 'searchTop'>
        <svg class = "icon" aria-hidden="true" @click="$router.go(-1)">
            <use xlink:href = "#icon-fanhui"></use>
        </svg>
        <input type="text" placeholder="Talor Swift" v-model="searchKey" @keydown.enter="enterKey">
    </div>
    <div class='searchHistory'>
        <p class="searchSpan">历史</p>
        <span v-for="item in keyWorldList" :key='item' class="spanKey">
            {{item}}
        </span>
        <svg class = "icon" aria-hidden="true"  @click="delHistory">
            <use xlink:href = "#icon-shanchu"></use>
        </svg>
    </div>
</template>
<script>
export default {
  data() {
    return {
      keyWorldList: [],
      searchKey: "",
    };
  },
mounted() {
    this.keyWorldList = JSON.parse(localStorage.getItem("keyWorldList"))
      ? JSON.parse(localStorage.getItem("keyWorldList"))
      : [];
  },
  methods: {
    enterKey:function () {
      if (this.searchKey !== "") {
        this.keyWorldList.unshift(this.searchKey);
        //   去重
        this.keyWorldList = [...new Set(this.keyWorldList)];
        // 固定长度
        if (this.keyWorldList.length > 10) {
          this.keyWorldList.splice(this.keyWorldList.length - 1, 1);
        }
        localStorage.setItem("keyWorldList", JSON.stringify(this.keyWorldList));
        // let res = await getSearchMusic(this.searchKey);
        // // console.log(res);
        // this.searchList = res.data.result.songs;
        this.searchKey = "";
      }
    },
    delHistory: function () {
      localStorage.removeItem("keyWorldList");
      this.keyWorldList = [];
    },
  },
};
</script>
<style lang="less" scoped>
.searchTop{
    width: 100%;
    height: 1rem;
    padding: 0 .2rem ;
    display: flex;
    align-items: center;
    input{
        margin-left: .4rem;
        border:none;
        border-bottom: 1px solid #999;
        width: 90%;
        padding:.1rem;
    }
}
.searchHistory {
  width: 100%;
  padding: 0.2rem;
  position: relative;
  .searchSpan {
    font-weight: 700;
  }
  .spanKey {
    padding: 0.1rem 0.2rem;
    background-color: rgb(185, 169, 169);
    border-radius: 0.4rem;
    margin: 0.1rem 0.2rem;
    display: inline-block;
  }
  .icon {
    width: 0.3rem;
    height: 0.3rem;
    position: absolute;
    right: 0.2rem;
  }
}
 .itemList {
    width: 100%;
    padding: .2rem;
    .item {
      width: 100%;
      height: 1.4rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .itemLeft {
        width: 85%;
        height: 100%;
        display: flex;
        align-items: center;
        .leftSpan {
          display: inline-block;
          width: 0.2rem;
          text-align: center;
        }
        div {
          p {
            width: 4.54rem;
            height: .4rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-weight: 700;
          }
          span{
            font-weight: 400;
            font-size: .24rem;
            color: #999;
          }
          margin-left: 0.3rem;
        }
      }
      .itemRight{
        width: 20%;
        height: 100%;
        display: flex;
        // justify-content: space-between;
        align-items: center;
        position: relative;
        .icon{
          fill: #999;
        }
         .bofang{
            position: absolute;
            left: 0;
          }
         .liebiao{
            position: absolute;
            right: 0;
          }
      }
    }
  }
</style>