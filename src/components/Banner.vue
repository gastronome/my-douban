<template lang="html">
  <div class="banner">
      <img src="../assets/promotion_bg.jpg" alt="">
      <div class="txtwrapper">
        <h3>打开App，回复广播</h3>
        <div class="download">
          <a class="quickDow">极速下载</a>
          <a class="open">打开</a>
        </div>
      </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.banner{
  position: relative;
  img{
    width: 100%
  }
  .txtwrapper {
    h3{
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 20px;
      font-size: 14px;
      line-height: 22px;
      color: #2CA532;
    }
    .download {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 10px;
      a{
        display: inline-block;
        text-align: center;
        font-size: 13px;
        font-weight: 500;
        line-height: 28px;
        padding: 0 14px;
        border: 1px solid #42bd56;
        border-radius: 4px;
        color: #42bd56;
        &.quickDow{
          margin-right: 4px;
          background-color: #42bd56;
          color: #fff;
        }
      }
    }
  }
}

</style>
