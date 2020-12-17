<template>
  <div v-show="this.isFullPlayer">
     <div class="player">
    <img :src="currentSong.picUrl" alt="">

       <div class="flex">
       <PlayerLeft></PlayerLeft>
       <PlayerRight></PlayerRight>
       </div>
       <PlayerBottom></PlayerBottom>
    </div>
  </div>
</template>

<script>
import PlayerLeft from '../Player/PlayerLeft'
import PlayerRight from '../Player/PlayerRight'
import PlayerBottom from '../Player/PlayerBottom'
import { mapGetters } from 'vuex';
  export default {
    name:"NormalPlayer",
        components:{
            PlayerLeft,
            PlayerRight,
            PlayerBottom
        },
        computed:{
          ...mapGetters([
            'isFullPlayer',
            'currentSong'
          ])
        }
  }
</script>

<style lang="scss" scoped>
img{
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -9;
  object-fit: cover;
  // opacity: .8;
  filter: blur(10px);
}
 .player{
       position: fixed;
       top: 0;
       bottom: 0;
       left: 0;
       right: 0;
       background:white;
       z-index: 9999;
   }
   .flex{
       display: flex;
   }
</style>