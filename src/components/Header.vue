<template>
  <div class="header">
    <div class="headerleft">
      <span class="allName">erkelost</span>
      <i class="iconfont icon-wangyiyunyinleclick" @click="changeTheme"></i>
      <router-link to="" tag="div">
        <span
          class="item"
          v-for="(item, index) in titleList"
          :key="index"
          @click.stop="changeItem(index)"
          :class="{ active: currentIndex === index }"
        >
          {{ item }}
        </span>
      </router-link>
    </div>
    <div class="headercenter">
      <input type="text" v-if="flag" ref="input" />
      <i class="iconfont icon-sousuo" @click.stop="onfocus"></i>
    </div>

    <!-- if else 的  true  和  false ****************************************************** -->
    <div class="headerright" v-if="!user.profile">
      <!--  v-if="user.profile.nickname" -->
      <span @click.stop="login">登陆</span>
      <span>注册</span>
    </div>
    <div class="headerright" v-else>
      <img class="img" :src="user.profile.avatarUrl" alt="" />
      <span>{{ user.profile.nickname }}</span>
      <span @click="remove">退出</span>
    </div>

    <!-- <div class="headerright">
      <img class="img" :src="user.profile.avatarUrl == undefined?'../assets/css/a.png':user.profile.avatarUrl" alt="">
      <span @click.stop="login">{{user.profile.nickname ? user.profile.nickname : '登陆'}}</span>

    </div> -->
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      titleList: [
        "发现音乐",
        "我的音乐",
        "朋友",
        "商城",
        "音乐人",
        "下载客户端",
      ],
      currentIndex: 0,
      index: 0,
      themes: ["theme", "theme1", "theme2"],
      flag: false,
      user: {},
    };
  },
  //不限于使用this.$router.push
  // created() {
  //   //读取本地数据
  //   let pro = localStorage.getItem("profile");
  //   console.log(typeof pro);
  //   // console.log(profile);
  //   if (pro) {
  //     //必须要现转化成json数据 我服了 *************************************************************
  //     this.user = JSON.parse(pro);
  //   }
  //   // console.log(JSON.parse(this.user));
  //   console.log(this.user);
  //   console.log(typeof this.user);
  //   console.log(this.user instanceof String);
  //   console.log(typeof this.user.profile);
  // },
  //watch 可以重新刷新 侦听器  限于this.$router.push
  watch: {
    $route() {
      //读取本地数据
      let pro = localStorage.getItem("profile");
      // console.log(typeof pro);
      // console.log(profile);
      if (pro) {
        //必须要现转化成json数据 我服了 *************************************************************
        this.user = JSON.parse(pro);
      }
      // console.log(JSON.parse(this.user));
      // console.log(this.user);
      // console.log(typeof this.user);
      // console.log(this.user instanceof String);
      // console.log(typeof this.user.profile);
    },
  },
  methods: {
    remove() {
      window.localStorage.removeItem("profile");
      this.user.profile = false 
      this.$router.push('/FindMusic')
    },
    changeItem(index) {
      this.currentIndex = index;
      console.log(this.currentIndex);
      if (this.currentIndex == 0) {
        this.$router.push("/FindMusic");
      }
      if (this.currentIndex == 1) {
        this.$router.push("/MyMusic");
      }
    },
    changeTheme() {
      this.index++;
      if (this.index >= this.themes.length) {
        this.index = 0;
      }
      document.documentElement.setAttribute(
        "data-theme",
        this.themes[this.index]
      );
    },
    onfocus() {
      this.flag = !this.flag;
      this.$nextTick(() => {
        this.$refs.input.focus();
      });
    },
    login() {
      this.$router.push("/LogIn");
    },
  },
};
</script>
<style scoped lang="scss">
@import "../assets/css/variable";
@import "../assets/css/mixin";
.allName {
  background: linear-gradient(to right, rgb(250, 162, 139), rgb(139, 162, 255));
  -webkit-background-clip: text;
  color: transparent;
  letter-spacing: 5px;
}
.header {
  font-size: 20px;
  width: 100%;
  height: 80px;
  position: fixed;
  z-index: 999;
  //  background: lightpink;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  @include bg_color();
  color: #ccc;
}
.headercenter {
  width: 20%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  i {
    font-size: 25px;
    transition: all 2.5s ease-in-out;
  }
  input {
    margin-right: 20px;
    border: none;
    height: 20px;
  }
}
.headerright {
  width: 20%;
  text-align: center;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  span {
    margin-left: 30px;
  }
}
.headerleft {
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.allName {
  font-family: "Kirang Haerang", cursive;
  font-size: 50px;
  text-transform: uppercase;
}
.icon-wangyiyunyinleclick {
  font-size: 25px;
  // color:rgb(255, 37, 37);
}
.item {
  font-size: 16px;
  cursor: pointer;
  margin-left: 30px;
}
.active {
  padding-bottom: 20px;
  border-bottom: 3px solid #fff;

  // color: red;
  // font-size: 20px;
}
.wallPaper {
  display: flex;
}
.img {
  width: 50px;
  height: 50px;
}
@media screen and (max-width:1350px) {
  .item{
    display: none;
  }
}
</style>