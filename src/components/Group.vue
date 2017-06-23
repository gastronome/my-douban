<template lang="html">
  <div class="group" @click="locateTo">
      <div class="content">
        <h2>{{title}}</h2>
        <div class="info">
          <img :src="items.avatar" alt="">
          <h2>{{items.name}}</h2>
          <span>{{items.member_role}}人</span>
        </div>
        <p>{{items.desc}}</p>
      </div>
      <h3><a href="#">更多相关小组</a></h3>
  </div>
</template>

<script>
export default {
  methods:{
    locateTo(){
      window.location = this.items.alt
    }
  },
  props:['items','title']
}
</script>

<style lang="less" scoped>
.group {
  padding: 0 20px;
  .content{
    padding: 18px 0;
    h2{
      font-size: 18px;
      color: #111;
      line-height: 24px;
      font-weight: 500;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .info{
      display: flex;
      margin: 10px 0;
      align-items: center;
      img {
        vertical-align: middle;
        width: 40px;
        margin-right: 12px;
        border: 1px solid #f5f5f5;
      }
      h2{
        flex-grow: 1;
      }
      span {
        color: #ccc;
        font-size: 14px;
        padding-left: 10px;
        white-space: nowrap;
        box-sizing: border-box;
      }
    }
    p {
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: #ccc;
    }
  }
  h3{
    text-align: center;
    font-size: 16px;
    line-height: 42px;
    border-top: 1px solid #f5f5f5;
    border-bottom: 1px solid #f5f5f5;
    a{
      color: #42bd56;
      &:first-child{
        margin-right: 20px;
      }
    }
  }
}
</style>
