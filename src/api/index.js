//这个js文件就是请求各种借口地址的
import network from './network'
//轮播图
export const getBanner = () => network.get('banner?type=0')
//热门推荐
export const getPersonalized = () => network.get('personalized')
//最新专辑
export const getNewAblum = () => network.get('album/newest')
//最新音乐
export const getNewSong = () => network.get('personalized/newsong')
//歌单详情
export const getPlayList = (data) => network.get('playlist/detail',data)
//手机登录
export const getCellPhone = (data) => network.get('login/cellphone',data)
//所有歌曲详情
export const getSongDetail = (data) => network.get('song/detail',data)
//专辑内容
export const getNewAlbum = (data) => network.get('album',data)

