<template>
  <div class="obj">
        <!-- <div class="item"> -->
          <!-- <BetterScroll> -->
          <Banner :banners="banners"></Banner>
        <Personalized :personalized="personalized" :title="'热门推荐'" @select="fatherSelectItem" :type="'personalized'"></Personalized>
        <Personalized :personalized="newablum" :title="'最新专辑'" @select="fatherSelectItem" :type="'album'"></Personalized>
        <songList :newsong="newsong" :date="date"></songList>
        <router-view></router-view>
        <!-- </BetterScroll> -->
        <!-- </div> -->
  </div>
</template>

<script>
import { getBanner, getNewAblum, getPersonalized,getNewSong } from "../api/index";
import Banner from "../components/Banner";
import Personalized from '../components/Personalized';
import SongList from '../components/SongList'
import BetterScroll from '../components/BetterScroll'
export default {
  name: "FindMusic",
  components: {
    Banner,
    Personalized,
    SongList,
    BetterScroll
  },
  data() {
    return {
      banners:[],
      personalized:[],
      newablum:[],
      newsong:[],
      date:0,
      profile:{}
    };
  },
  methods: {
    fatherSelectItem(id,type){
      this.$router.push({
        path:`/findmusic/detail/${id}/${type}`
      })
    }
  },
  created() {
    //读取本地数据
    let profile = localStorage.getItem('profile')
    // console.log(profile);
    if(profile){
        this.profile = profile
    }
    // console.log(JSON.parse(this.profile));
    getBanner()
      .then((data) => {
        // console.log(data);
        this.banners = data.banners
      })
      .catch(function (err) {
        console.log(err);
      });
      getPersonalized()
      .then((data) => {
        // console.log(data);
        // this.banners = data.banners
        this.personalized = data.result//.splice(0,6)

        // console.log(this.personalized);
      })
      .catch(function (err) {
        console.log(err);
      });
       getNewAblum()
      .then((data) => {
        // console.log(data.albums);
        // this.banners = data.banners
        this.newablum = data.albums.splice(0,6)
        // console.log(this.newablum);
      })
      .catch(function (err) {
        console.log(err);
      });
       getNewSong()
      .then((data) => {
        // console.log(data.albums);
        // this.banners = data.banners
        // this.newablum = data.albums//.splice(0,6)
        // console.log(this.newablum);
        this.newsong =  data.result
        // this.date = data.result[0].song.duration
        // console.log(this.date);
        // console.log(this.newsong);
      })
      .catch(function (err) {
        console.log(err);
      });
  },
};
</script>

<style lang="scss" scoped>
.obj {
  position: relative;
  top: 80px;
  left: 0;
  right: 0;
  bottom: 0;
}
.item{
  height: 2000px;
}
.content{
  
}
</style>