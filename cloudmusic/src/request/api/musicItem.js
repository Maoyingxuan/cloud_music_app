import service from '..'
// 获取歌单详情
export function getMusicItem(id){
    return service({
        method:'Get',
        url:`/playlist/detail?id=${id}`
    })
}