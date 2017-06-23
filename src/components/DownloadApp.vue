<template lang="html">
  <div class="dowload">
    <div class="logo">
      <img src="../assets/douban-app-logo.png" alt="">
      <div class="douban">
        <h2>豆瓣</h2>
        <p>我们的精神角落</p>
      </div>
    </div>
    <a href="#">去 App Store 免费下载 iOS客户端</a>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.dowload{
  margin: 50px 0 30px;
  text-align: center;
  .logo {
    margin: 20px auto 20px;
    display: inline-block;
    img{
      width: 48px;
      height: 48px;
      margin-right: 12px;
    }
    .douban{
      float: right;
      text-align: left;
      h2{
        font-size: 24px;
        line-height: 28px;
      }
      p{
        font-size: 12px;
        line-height: 20px;
      }
    }
  }
  a{
    color: #42bd56;
    display: block;
  }
}
</style>
