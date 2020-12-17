<template>
   <div>
    <div>
        <NormalPlayer></NormalPlayer>
    </div>
    <div class="mini">
        <MiniPlayer></MiniPlayer>
    </div>
   </div>
</template>

<script>

import MiniPlayer from '../components/Player/MiniPlayer'
import NormalPlayer from '../components/Player/NormalPlayer'
    export default {
        name:"Player",
        components:{
            NormalPlayer,
            MiniPlayer
        }
    }
</script>

<style lang="scss" scoped>
  
   .mini{
       z-index: 9999;
   }
</style>