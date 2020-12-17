export default{
  isFullPlayer(state){
    return state.isFullPlayer
  },
  isMiniPlayer(state){
    return state.isMiniPlayer
  },
  isPlaying(state){
    return state.isPlaying
  },
  songs(state){
    return state.songs
  },
  currentSong(state){
    let obj = {
      name:'',
      singer:'',
      picUrl:""
    }
    if(state.songs.length !== 0){
      obj = state.songs[state.currentIndex]
    }
    return obj
  }
}