<template lang="html">
  <div class="book-view has-header">
    <scroller title="最受关注图书 | 虚构类" type="cover" :items = "fictional"></scroller>
    <scroller title="最受关注图书 | 非虚构类" type="cover" :items = "nonfictional"></scroller>
    <scroller title="豆瓣纸书" type="cover" :items = "bookstore">
      <div class="promItem" slot="promItem">
        <img src="../assets/book_zw.jpg" alt="">
        <div class="info">
          <div class="name">
            <h3>造物</h3>
            <span>¥ 68</span>
          </div>
          <p>改变世界的万物图典，3000幅图里的发明与冒险</p>
        </div>
      </div>
    </scroller>
    <scroller title='发现好图书' type="txt" :items="bookTags"></scroller>
    <types :types="bookTypes"></types>
    <download-app></download-app>

  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import Scroller from '../components/Scroller'
import Types from "../components/Types"
import DownloadApp from "../components/DownloadApp"

export default {
  computed:{
    ...mapState({
      fictional: state => state.book.fictional,
      nonfictional: state => state.book.nonfictional,
      bookstore: state => state.book.bookstore,
      bookTags:state => state.book.bookTags,
      bookTypes:state => state.book.bookTypes
    })
  },

  methods:{
    ...mapActions(['getBook'])
  },

  created(){
    this.getBook()
  },

  components:{
    Scroller,
    Types,
    DownloadApp
  }
}
</script>

<style lang="less" scoped>
.promItem {
  padding:0 18px;
  margin-bottom: 10px;
  display: flex;
  img {
    width: 100px;
    height: 133px;
    margin-right: 20px;
  }
  .name{
    display: flex;
    h3{
      flex-grow: 1;
      font-size: 20px;
      color: #494949;
      margin: 10px 0;
      max-width: 100%;
      line-height: 22px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-wrap: normal;
    }
    span{
      margin: 10px 0;
      color: #E76648;
      font-size: 16px;
      line-height: 22px;
    }
  }
  p{
    font-size: 13px;
    font-weight: 300;
    line-height: 1.5;
    color: #9B9B9B;
  }
}
</style>
