<template>
  <div class="all">
  <div class="item" v-if="erke == null">
   <div ref="box" class="box">
     <h1>私人音乐空间,听我想听的歌</h1>
     <h3>登录管理我的音乐,多终端同步</h3>
     <button @click="log" class="btn">立即登录</button>
   </div>
  </div>
  <div v-else class="obj">
    <img src="../assets/img/66.png" alt="">
  </div>
  </div>
</template>

<script>
import gsap from 'gsap'
import {TimelineLite} from 'gsap'
  export default {
    name:"MyMusic",
    data() {
      return {
        erke:{},
        profile:{}
        }
    },
    methods: {
      log() {
        this.$router.push('/Login')
      }
    },
    created(){
     let music =  localStorage.getItem('profile')
     this.erke = JSON.parse(music)
    //  console.log(this.erke);
    //  console.log(this.erke.profile);
    //  console.log(this.profile);
    },
    mounted(){
      const { box } = this.$refs
      const timeline = new TimelineLite({defaults:{ease:"power1.out"}})

    timeline.to(box, { y:'0%',duration:1.3,stagger:0.55,opacity:1,color:"#fba"})
    }
  }
</script>

<style lang="scss" scoped>
  .box{
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    justify-content: space-between;
  }
  h1{
    font-size: 60px;

  }
  h3{
    font-size: 30px;
  }
  button{
    font-size: 20px;
    padding: 15px 25px;
    background: red;
    border: none;
    color: white;
    border-radius: 5px;
  }
  .item{
position: relative;
  top: 80px;
  background: url("../assets/css/6.jpg") center center ;
  width: 100%;
  height: calc(100vh - 80px);
  // object-fit: cover;
  // object-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  }
  .obj{
    position: relative;
    top: 80px;
  }
  .box{
    transform: translateY(100%);
    opacity: 0;
    color: rgb(255, 0, 0);
  }
  .obj{
    // background: url('../assets/img/66.png');
    img{
      width: 100%;
      // height: calc(100% - 80px);
      // height:calc( 100vh - 84px);
      height: 300px;
      opacity: .8;
      object-fit: cover;
    }
  }
</style>