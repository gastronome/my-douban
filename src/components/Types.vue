<template lang="html">
<div class="type">
  <h2>分类浏览</h2>
  <ul>
    <li v-for="item in types.items">
      <a :href=" types.baseUri + item.href ">{{item.title}}</a>
      <span></span>
    </li>
    <li></li>
  </ul>
</div>
</template>

<script>
export default {
  props:{
    types:Object
  }
}
</script>

<style lang="less" scoped>
.type {
  width: 100%;
  padding-left: 16px;
  h2{
    line-height: 70px;
  }
  ul{
    overflow: hidden;
    box-sizing: border-box;
    border-bottom: 1px solid #eee;
    li{
      float: left;
      width: 50%;
      box-sizing: border-box;
      border-top: 1px solid #eee;
      border-right: 1px solid #eee;
      &:nth-child(2n){
        padding-left: 16px;
        border-right: none;
      }
      a{
        color: #42bd56;
        line-height: 50px;
      }
      span{
        color: #d3d3d3;
        float: right;
        width: 8px;
        height: 8px;
        margin-top: 20px;
        margin-right: 20px;
        border-top: 1px solid #ccc;
        border-right: 1px solid #ccc;
        transform: rotate(45deg);
      }
    }
  }
}

</style>
