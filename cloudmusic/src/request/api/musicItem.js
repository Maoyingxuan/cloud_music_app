import service from '..'
// 获取歌单详情
export function getMusicItem(data){
    return service({
        method:'Get',
        url:`/playlist/detail?id=${data}`
    })
}
// 获取歌单所有歌曲
export function getMusic(data){
    return service({
        method:'Get',
        url:`/playlist/track/all?id=${data}&limit=20&offset=0`
    })
}
// 获取歌词 /lyric?id=33894312
export function getMusicLyric(data){
    return service({
        method:'Get',
        url:`/lyric?id=${data}`
    })
}