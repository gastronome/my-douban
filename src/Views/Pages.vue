<template lang="html">
<div class="">
  <header-bar @openTlion="open"></header-bar>
  <router-view></router-view>
  <talion v-show="talion" @closeTalion="close"></talion>
</div>
</template>

<script>
import HeaderBar from '../components/Header-bar'
import Talion from '../Views/Talion'

export default {
  data(){
    return {
      talion:false
    }
  },
  methods:{
    open(){
      this.talion = true;
    },
    close(){
      this.talion = false;
    }
  },
  components:{ HeaderBar, Talion }
}
</script>

<style lang="less" scoped>
</style>
