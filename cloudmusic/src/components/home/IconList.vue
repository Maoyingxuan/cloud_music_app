<template>
    <div class = "iconList">
        <div class="iconItem">
            <svg class = "icon" aria-hidden="true">
            <use xlink:href = "#icon-meirituijian"></use>
            </svg>
            <span>每日推荐</span>
    </div>
    <div class="iconItem">
            <svg class = "icon" aria-hidden="true">
            <use xlink:href = "#icon-gedan"></use>
            </svg>
            <span>歌单</span>
    </div>
    <div class="iconItem">
            <svg class = "icon" aria-hidden="true">
            <use xlink:href = "#icon-shupin_huaban"></use>
            </svg>
            <span>私人FM</span>
    </div>
    <div class="iconItem">
            <svg class = "icon" aria-hidden="true">
            <use xlink:href = "#icon-31paixingbang"></use>
            </svg>
            <span>排行榜</span>
    </div>
</div>
</template>
<style>
    .iconList{
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: space-around;
        align-items:center;
        margin-top: 10px;
    }
    .iconItem{
        width: 25%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        
    }
    .icon{
            width: 50px;
            height: 50px;
        }

</style>