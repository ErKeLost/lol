<template>
    <div class="bottom">
      <div class="left">
          <img :src="currentSong.picUrl" alt="">
          <div>
              <p>{{currentSong.name}}</p>
              <p>{{currentSong.singer}}</p>
          </div>
      </div>
      <div class="center">
          <div class="oppo">
              <i class="iconfont icon-gengduo"></i>
              <i class="iconfont icon-shangyishoushangyige rr"></i>
              <i class="iconfont icon-iconset0481" @click="isplay" v-show="!this.isPlaying"></i>
              <i class="iconfont icon-icon_bofang" @click="isplay" v-show="this.isPlaying"></i>
              <i class="iconfont icon-xiayigexiayishou rr"></i>
              <i class="iconfont icon-diantai rr"></i>
          </div>
          <div class="ii">
            <span>00:00</span>
            <div class="progressbar">
                <div class="progressline">
                    <div class="progressdot"></div>
                </div>
            </div>
            <span>00:00</span>
          </div>
      </div>
      <div class="right">
          <i class="iconfont"></i>
          <i class="iconfont"></i>
          <i class="iconfont"></i>
          <i class="iconfont"></i>
      </div>
    </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
    export default {
        name:"PlayerBottom",
        methods: {
            ...mapActions([
                'setIsPlaying'
            ]),
            isplay(){
              this.setIsPlaying(!this.isPlaying)
            }
        },
        computed:{
            ...mapGetters([
                'isPlaying',
                'currentSong'
            ])
        }
    }
</script>

<style lang="scss" scoped>
i{
    font-weight: bold;
}
.left{
    width: 20%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.oppo{
    display: flex;
    justify-content: center;
    align-items: center;
    .icon-gengduo{
        font-size: 22px;
    }
    .rr{
        font-size: 25px;
    }
    .icon-iconset0481{
        font-size: 30px;
    }
    .icon-icon_bofang{
        font-size: 30px;
    }
}
i{
  margin: 0 20px;  
}
.ii{
    width: 100%;
    display: flex;
    align-items: center;
    .progressbar{
        margin: 0 20px;
    }
}
img{
    width: 50px;
    height: 50px;
}
   .bottom{
       width: 100%;
       height: 10vh;
       display: flex;
       align-items: center;
   }
   .progressbar{
       width: 700px;
       height: 5px;
       background: rgb(255, 255, 255);
       .progressline{
           width: 50%;
           height: 5px;
           background: rgb(143, 143, 143);
           position: relative;
           .progressdot{
               width: 10px;
               height: 10px;
               background: rgb(61, 61, 61);
               position: absolute;
               right: 0;
               top: -2px;
               border-radius: 50%;
           }
       }
   }
</style>