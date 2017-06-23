<template lang="html">
  <div class="scroller">
    <div class="title">
      <h2>{{title}}</h2>
      <a href="#">更多</a>
    </div>
    <div class="content">
      <slot name="promItem"></slot>
      <div class="listBox" >
        <ul class="coverList" v-if="type==='cover'">
          <li v-for="(item,index) in items" @click="locate(index)">
            <!-- <router-link :to="'subject/' + item.id" append> -->
              <img :src="item.images.large" alt="">
              <h3>{{item.title}}</h3>
              <slot name="subtitle">{{item.rating.average}}</slot>
            <!-- </router-link> -->
          </li>
        </ul>

        <ul class="txtList" v-if="type==='txt'">
          <li v-for="item in items">
            <a :href="item.href" v-if="!item.line" :style="{color: item.color,borderColor:item.color}">{{item.title}}</a>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
import Rating from './Rating.vue'

export default {

  methods:{
    locate(index){
      window.location = this.items[index].alt
    }
  },

  // props:{
  //   title:String,
  //   type:String,
  //   items:Array
  // },
  props:["title","type","items"],
  components:{
    Rating
  }
}
</script>

<style lang="less">
.scroller {
    width: 100%;
    padding-top: 10px;
    padding-bottom: 24px;
    background-color: #fff;
    overflow: hidden;
    .title{
      height: 36px;
      padding: 0 15px;
      display: flex;
      align-items: center;
      background-color: #fff;
      h2{
        font-size: 16px;
        line-height: 24px;
        color: #000;
        flex-grow: 1;
      }
      a{
        font-size: 14px;
        color: #42bd56;
      }
    }
    .listBox {
      margin-bottom: -30px;
    }
    .content {
      ul{
        padding: 8px 0 10px;
        &.coverList{
          display: flex;
          overflow-x: auto;
          overflow-y: hidden;
          white-space: nowrap;
          text-align: center;
          padding-left: 15px;
          li{
            width: 128px;
            margin-left: 3px;
            img{
              width: 128px;
              height: 180px;
            }
            h3{
              max-width: 100%;
              margin-top: 10px;
              margin-bottom: 6px;
              line-height: 16px;
              font-size: 16px;
              color: #111;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }
        }

        &.txtList {
          overflow-x: auto;
          white-space: nowrap;
          // overflow: hidden;
          li{
            display: inline-block;
            margin: 0 0 8px 16px;
            font-size: 16px;
            vertical-align: middle;
            a{
              height: 50px;
              line-height: 50px;
              padding: 0 16px;
              letter-spacing: 1.6px;
              border: solid 1px;
              border-radius: 4px;
              overflow: auto;
              display: block;
              text-align: center;
            }
          }
          li:empty {
            width: 100%;
            display: block;
            height: 1px;
            border: 0;
            margin: 0;
          }
        }
      }

    }
}


</style>
