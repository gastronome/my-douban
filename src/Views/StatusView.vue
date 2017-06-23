<template lang="html">
  <div class="status-view has-header">
    <banner></banner>
    <card></card>
    <p class="moreStatus"><a href="#">显示更多广播</a></p>
    <download-app></download-app>
  </div>
</template>

<script>
import Banner from '../components/Banner'
import Card from '../components/Card'
import DownloadApp from '../components/DownloadApp'

export default {
  // data(){
  //   return {
  //     items: new Array(10)
  //   }
  // },
  components:{
    Banner,
    Card,
    DownloadApp
  }
}
</script>

<style lang="less" scoped>
.moreStatus {
  margin-top: 30px;
  text-align: center;
  a{
    color: #42bd56;
    font-weight: 500;
  }
}
</style>
