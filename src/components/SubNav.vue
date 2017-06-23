<template lang="html">
<div class="subnav has-header">
  <div class="quickNav" v-if="mold==='quickNav'">
    <ul>
      <li>
        <router-link :to="'movie'">影院热映</router-link>
      </li>
      <li>
        <router-link :to="'movie'">欧美新碟榜</router-link>
      </li>
      <li>
        <router-link :to="'/register'">注册帐号</router-link>
      </li>
      <li>
        <router-link :to="'/login'">登录豆瓣</router-link>
      </li>
    </ul>
  </div>

  <div class="navBottom" v-if="mold==='navBottom'">
    <ul>
      <li>
        <router-link :to="'/register'">注册帐号</router-link>
      </li>
      <li>
        <router-link :to="'/login'">登录豆瓣</router-link>
      </li>
      <li>
        <router-link :to="'movie'">使用桌面版</router-link>
      </li>
      <li>
        <router-link :to="'movie'">使用豆瓣App</router-link>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {

  props:{
    mold:{
      type:String,
      default:'quickNav'
    }
  }

}
</script>

<style lang="less" scoped>
.subnav {
  padding: 18px 18px 0;
  ul{
    overflow: hidden;
    li{
      float: left;
      width: 50%;
      padding: 3px;
      box-sizing: border-box;
      font-size: 15px;
      a{
        background-color: #f6f6f6;
        color: #494949;
        display: block;
        text-align: center;
        line-height: 20px;
        padding: 12px 0;
        border-radius: 2px;
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: normal;
      }
    }
  }
}
</style>
