<template>
    <div class="right">
     <div></div>
     <div class="lyric">
         <ul>
           <li>1a</li>
           <li>2a</li>
           <li>3a</li>
           <li>4a</li>
           <li>5a</li>
           <li>6a</li>
           <li>7a</li>
           <li>8a</li>
           <li>9a</li>
           <li>10a</li>
           <li>11a</li>
           <li>12a</li>
           <li>13a</li>
           <li>14a</li>
           <li>15a</li>
           <li>16a</li>
           <li>17a</li>
           <li>18a</li>
           <li>19a</li>
           <li>20a</li>
           <li>21a</li>
           <li>22a</li>
           <li>23a</li>
           <li>24a</li>
           <li>25a</li>
           <li>26a</li>
           <li>27a</li>
           <li>28a</li>
           <li>29a</li>
           <li>30a</li>
           <li>31a</li>
           <li>32a</li>
           <li>33a</li>
           <li>34a</li>
           <li>35a</li>
           <li>36a</li>
           <li>37a</li>
           <li>38a</li>
           <li>39a</li>
           <li>40a</li>
           <li>41a</li>
           <li>42a</li>
           <li>43a</li>
           <li>44a</li>
           <li>45a</li>
           <li>46a</li>
           <li>47a</li>
           <li>48a</li>
           <li>49a</li>
           <li>50a</li>
         </ul>
     </div>
    </div>
</template>

<script>
import BetterScroll from '../../components/BetterScroll'
    export default {
        name:"PlayerRight",
        components:{
            BetterScroll
        }
    }
</script>

<style lang="scss" scoped>
  .right{
      width: 50%;
      height: 90vh;
      overflow-y: auto;
  }
.right::-webkit-scrollbar {/*滚动条整体样式*/

        width: 7px;     /*高宽分别对应横竖滚动条的尺寸*/

        height: 1px;

    }

.right::-webkit-scrollbar-thumb {/*滚动条里面小方块*/

        border-radius: 10px;

         -webkit-box-shadow: inset 0 0 5px rgba(184, 44, 44, 0.2);

        background: #fba;

    }

.right::-webkit-scrollbar-track {/*滚动条里面轨道*/

        -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);

        border-radius: 10px;

        background: #EDEDED;

}
  ul{
      list-style: none;      
  }
  .lyric{
    //   height: 80%;
    position: relative;
    top: 170px;
    display: flex;
    justify-content: center;
    li{
        margin-bottom: 15px;
    }
  }
</style>