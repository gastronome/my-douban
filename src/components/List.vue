<template lang="html">
<div class="list">
  <!-- <p class="lastDate" v-show=" lastDate != toDay ">{{lastDate}}</p> -->
  <template v-for="(item,index) in items">
    <div class="wrapper" @click = "locate(index)">
    <!-- <router-link :to="'/register'"> -->
      <div class="contents" >
        <div class="txt_pic" v-if="item.target.photos_count == 0">
          <div class="txt">
            <h2>{{item.title}}</h2>
            <p>{{item.target.desc}}</p>
          </div>
          <img :src="item.target.cover_url" alt="" class="cover">
        </div>

        <div class="pics" v-if="item.target.photos_count != 0">
          <div class="big"
          :style="{background:'url('+ item.target.cover_url  + ') center center/cover no-repeat'}">
          </div>
          <div class="small">
            <img :src="item.target.more_pic_urls[0]" alt="">
            <img :src="item.target.more_pic_urls[1]" alt="">
          </div>
        </div>
      </div>
      <p class="author">
        <span>by{{item.target.author.name}}</span>
        <span>{{item.source_cn}}</span>
      </p>
    <!-- </router-link> -->
  </div>

  </template>
</div>
</template>

<script>

export default {
  computed:{
    toDay(){
      return new Date().getFullYear() + '-' + ( new Date().getMonth() + 1 ) + "-" + new Date().getDate()
    },
  },
  methods:{
    locate(index){
      window.location = this.items[index].target.url
    }
  },
  props:['items',"lastDate"]
}
</script>

<style lang="less" scoped>
.list{
  padding: 0 18px;
  .wrapper{
    padding: 26px 0;
    border-bottom: 1px solid #d8d8d8;
  }
  .contents {
    //图片加文字的样式
    .txt_pic{
      display: flex;
        .txt{
          flex-grow: 1;
          margin-right: 24px;
          h2{
            font-size: 16px;
            color: #494949;
            font-weight: 500;
            line-height: 24px;
          }
          p{
            text-align: justify;
            word-wrap: break-word;
            color: #aaa;
            font-size: 12px;
            line-height: 1.5;
            display: -webkit-box;
            overflow: hidden;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
          }
        }
        .cover {
          width: 90px;
          height: 90px;
        }
      }

      // 纯图片的样式
      .pics{
        display: flex;
        justify-content: space-between;
        .big {
          flex-grow: 1;
          margin-right: 4px;
        }
        .small{
          // flex-grow: 1;
          display: flex;
          flex-direction: column;
          img{
            width: 80px;
            height: 80px;
          }
        }

      }
    }
    .author{
      display: flex;
      justify-content: space-between;
      font-size: 13px;
      color: #ccc;
      margin-top: 16px;
    }
  }

</style>
