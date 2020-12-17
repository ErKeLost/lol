<template>
  <div class="mini" v-show="this.isMiniPlayer">
    <div class="player">
      <div class="left" @click="goon">
        <img src="../../assets/img/1.jpg" alt="">
        <div class="name">
          <h3>演员</h3>
          <p>薛之谦</p>
        </div>
      </div>
      <div class="right">
        <i class="iconfont icon-iconset0481" @click="change" v-show="!this.isPlaying"></i>
        <i class="iconfont icon-icon_bofang" @click="change" v-show="this.isPlaying"></i>
        <i class="iconfont icon-bofangliebiao"></i>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
  export default {
    name:"MiniPlayer",
    methods: {
      ...mapActions([
        'setFullPlayer',
        'setMiniPlayer',
        'setIsPlaying'
      ]),
      goon(){
        this.setFullPlayer(true)
        this.setMiniPlayer(false)
      },
      change(){
        this.setIsPlaying(!this.isPlaying)
      }
    },
    computed:{
      ...mapGetters([
        'isMiniPlayer',
        'isPlaying'
      ])
    }
  }
</script>

<style lang="scss" scoped>
i{
  display: inline-block ;
}
  .mini{
    position: fixed;
    left: 0;
    bottom:0;
    width: 100%;
    height:90px;
    background: #bfa;
    display: flex;
    align-items: center;
    z-index: 99999;
   .player{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left{
      display: flex;
      img{
        width: 50px;
        height: 50px;
        margin-right: 30px;
      }
      .name{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    }
    .right{
      margin-left: 100px;
     i{
       font-size: 40px;
       margin-right: 50px;
     }
    }
   }
  }
</style>