<template lang="html">
<div class="">
  <sub-nav mold="quickNav"></sub-nav>
  <list :items = "recommends":lastDate = "lastDate"></list>
  <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading">
    <loading slot="spinner"></loading>
  </infinite-loading>
  <!-- <p class="lastDate" v-show=" lastDate != toDay ">{{lastDate}}</p> -->
</div>
</template>

<script>
import { mapState,mapActions } from 'vuex'

import InfiniteLoading from 'vue-infinite-loading'
// import infiniteScroll from 'vue-infinite-scroll'

import SubNav from "../components/SubNav.vue"
import List from "../components/List.vue"
import Loading from "../components/Loading.vue"

// var count = 0;

export default {

  data(){
    return {
      scrollData:[],
      busy : false
    }
  },

  computed:{
    toDay(){
      return new Date().getFullYear() + '-' + ( new Date().getMonth() + 1 ) + "-" + new Date().getDate()
    },
    ...mapState(
      {
        recommends : state => state.activities.recommends,
        lastDate : state => state.activities.lastDate,
      }
    )
  },
  methods:{
    ...mapActions(['getEvents','loadMore']),

    // scrollMore: function() {
    //   this.busy = true;
    //
    //   setTimeout(() => {
    //     for (var i = 0, j = 10; i < j; i++) {
    //       this.scrollData.push({ name: count++ });
    //     }
    //     this.busy = false;
    //   }, 1000);
    // },

    onInfinite(){
      setTimeout( ()=>{
        this.loadMore()
        this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
      },1000)
    }

    // onInfinite() {
    //   setTimeout(() => {
    //     const temp = [];
    //     for (let i = this.list.length + 1; i <= this.list.length + 20; i++) {
    //       temp.push(i);
    //     }
    //     this.list = this.list.concat(temp);
    //     this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
    //   }, 1000);
  },

  created(){
    this.getEvents()
  },

  components:{
    SubNav,
    List,
    InfiniteLoading,
    Loading,
  },
  // directives: {infiniteScroll}
}
</script>

<style lang="less" scoped>
.lastDate {
  text-align: center;
  line-height: 52px;
  color: #111;
}
</style>
