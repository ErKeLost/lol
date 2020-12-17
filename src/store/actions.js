import {
  SET_FULL_SCREEN,
  SET_MINI_SCREEN,
  SET_IS_PLAYING,
  SET_SONG_DETAIL
} from './mutations-type'
import { getSongDetail } from '../api/index'
export default {
  setFullPlayer({
    commit
  }, flag) {
    commit(SET_FULL_SCREEN, flag)
  },
  setMiniPlayer({
    commit
  }, flag) {
    commit(SET_MINI_SCREEN, flag)
  },
  setIsPlaying({
    commit
  },flag){
    commit(SET_IS_PLAYING, flag)
  },
 async setSongDetail({
    commit
  },ids){
    let result = await getSongDetail({ids:ids.join(',')})
    // console.log(result);
    let list = []
    result.songs.forEach(value => {
      let obj = {}
      obj.name = value.name
      let singer = ''
      value['ar'].forEach((item,index) => {
        if(index === 0){
          singer = item.name
        }else{
          singer += '-' + item.name
        }
      });
      obj.singer = singer
      obj.picUrl = value['al'].picUrl
      list.push(obj)
    });
    commit(SET_SONG_DETAIL, list)
  }
}