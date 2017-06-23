<template lang="html">
  <div class="group-view has-header">
    <group title="同城交友" :items="tongcheng"></group>
    <group title="买买买" :items="buy"></group>
    <group title="旅游" :items="lvyou"></group>
    <group title="技术宅" :items="husttgeek"></group>
    <group title="来聊5毛钱的" :items="chat"></group>
    <download-app></download-app>
  </div>
</template>

<script>
import { mapState,mapActions } from 'vuex'

import Group from '../components/Group'
import DownloadApp from '../components/DownloadApp'

export default {

  computed:{
    ...mapState(
      {
        tongcheng: state => state.group.tongcheng,
        husttgeek: state => state.group.husttgeek,
        lvyou: state => state.group.lvyou,
        buy: state => state.group.buy,
        chat: state => state.group.chat,
      }
    )
  },
  methods:{
    ...mapActions(['getGroup'])
  },
  created(){
    this.getGroup()
  },
  components:{
    Group,
    DownloadApp
  }
}
</script>

<style lang="less" scoped>
</style>
