import service from '..'
// 获取轮播图图片
export function getBanner(){
    return service({
        method:'Get',
        url:'/banner?type=2'
    })
}
// 发现好歌单
export function getMusicList(){
    return service({
        method:'Get',
        url:'/personalized?limit=10'
    })
}