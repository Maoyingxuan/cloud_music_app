<template>
    <div class = "topNav">
        <div class="topleft">
            <svg class = "icon" aria-hidden="true">
            <use xlink:href = "#icon-danlieliebiao"></use>
            </svg>
        </div>
            
    <div class="topContent">
        <span>我的</span>
        <span class = "active">发现</span>
        <span>云村</span>
        <span>视频</span>
    </div>
    <div class = "topright">
        <svg class = "icon" aria-hidden="true" @click="$router.push('/Search')">
      <use xlink:href = "#icon-sousuo"></use>
    </svg>
    </div>
                
    </div>
</template>
<style>
    .topNav{
        width: 100%;
        padding: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;

    }
    .topContent{
        width: 65%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 18px;
        }
        .active{
            font-weight: 900;
        }
         .icon {
          width: 0.4rem;
          height: 0.4rem;
        }
</style>
