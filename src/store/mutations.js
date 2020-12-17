import {
  SET_FULL_SCREEN
} from './mutations-type'
import {
  SET_MINI_SCREEN,
  SET_IS_PLAYING,
  SET_SONG_DETAIL
} from './mutations-type'
export default {
  //   changeFullPlayer(state,flag){
  //     state.isFullPlayer = flag
  // }
  [SET_FULL_SCREEN](state, flag) {
    state.isFullPlayer = flag
  },
  [SET_MINI_SCREEN](state, flag) {
    state.isMiniPlayer = flag
    // console.log("aaa");
  },
  [SET_IS_PLAYING](state, flag) {
    state.isPlaying = flag
  },
  [SET_SONG_DETAIL](state, list) {
    state.songs = list
  },
}