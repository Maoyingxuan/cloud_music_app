import service from '..'
// 获取轮播图图片
export function getBanner(){
    return service({
        method:'Get',
        url:'/banner?type=2'
    })
}