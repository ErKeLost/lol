<template>
    <div class="left">
        <div class="it">
            <div  @click="back">
            <i class="iconfont icon-houtui" ></i>
        </div>
        <div class="center">
            <img class="g" src="../../assets/img/needle.png" alt="" ref="down">
            <img class="c" src="../../assets/img/disc.png" alt="" ref="circle">

        </div>
            <img :src="currentSong.picUrl" alt="" class="url" ref="aa">

        </div>
        <div class="item">
            <i class="iconfont icon-xihuan rr a"></i>
            <i class="iconfont icon-yichang rr b"></i>
            <i class="iconfont icon-download rr e"></i>
            <i class="iconfont icon-iconfontzhizuobiaozhun20 rr d"></i>
            
        </div>
    </div>
</template>

<script>
import {mapActions ,mapGetters} from 'vuex'
    export default {
        name:"PlayerLeft",
        methods: {
            ...mapActions([
                'setFullPlayer',
                'setMiniPlayer'
            ]),
            // back(){
            //     window.history.back()
            //     console.log("bb");
            // }
            back(){
                // this.$store.dispatch('setFullPlayer',false)
                this.setFullPlayer(false)
                this.setMiniPlayer(true)
            }
        },
        computed:{
            ...mapGetters([
                'isPlaying',
                'currentSong'
            ])
        },
        watch:{
            isPlaying(newValue,old){
                if(newValue){
                    setTimeout(() => {
                    this.$refs.circle.classList.add('active')
                    this.$refs.aa.classList.add('active')
                    },1000)
                    this.$refs.down.classList.add('activ')
                }else{
                    this.$refs.circle.classList.remove('active')
                    this.$refs.aa.classList.remove('active')

                    this.$refs.down.classList.remove('activ')

                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.item i{
    color: black;

    font-weight: bold;
}
.url{
    width: 250px;
    height: 250px;
    position: absolute;
    top: 230px;
    // z-index: 9;
    border-radius: 50%;
    // top: 0;
    left: 34%;
    // transform: translateX(-50%);
    &.active{
        animation: oo 5s linear infinite;
    }
}
@keyframes oo {
    from{
           transform: rotate(0deg);

    }
    to{
           transform: rotate(360deg);

    }
    
}
   .left{
       width: 50%;
       height:90vh;
       display: flex;
       flex-direction: column;
       justify-content: center;
    //    align-items: center;
   }
   .icon-houtui{  
       top: 2vh;
       left: 2vh;
       position: absolute;
       color: white;
       font-size: 40px;
   }
   .center{
       height: 40vh;
       display: flex;
       flex-direction: column;
       align-items: center;
   }
   .it{
       height: 60%;
       width: 100%;
       position: relative;
   }
   .g{
       width: 172px;
       z-index: 9;
       height: 254px;
       transform: rotate(-30deg);
       transform-origin: 20px -20px;
       transition: all 1s ease;
    //    animation: down 1s linear;
    //    animation-play-state: paused;

       &.activ{
        transform: rotate(0deg);
       }
   }
   .item{
       height: 40%;
       width: 100%;
       display: flex;
       justify-content: space-around;
       align-items: center;
    //    color: black;
   }
   .c{ 
      
       width: 400px;
       height: 400px;
       position: relative;
       top: -90px;
       animation: sport 5s linear infinite;
       animation-play-state: paused;
       &.active{
           animation-play-state: running;
       }
   }
   .rr{
       font-size: 30px;
       color: white;
   }
   .a{
       left: 8%;
   }
   .b{
       left: 18%;
   }
   .e{
       left: 28%;
   }
   .d{
       left: 38%;
   }
   @keyframes sport {
       from{
           transform: rotate(0deg);
       }
       to{
           transform: rotate(360deg);
       }
       
   }
   @keyframes down {
       from{
           transform: rotate(-30deg);
       }
       to{
           transform: rotate(0deg);
       }

       
   }
</style>