<template lang="html">
  <div class="card">
    <ul>
      <li>
        <h2 class="logo">
          <img src="../assets/douban-app-logo.png" alt="">
        </h2>
        <div class="right-content">
          <h2><strong><a href="#">豆小瓣</a></strong>写了日记</h2>
          <span class="time">2017-05-01 19:30:25</span>
          <div class="article">
            <h2>我是一个广播的标题</h2>
            <p>
              - 对豆瓣时间进行了多处体验优化； - 广播中将展示多个值得探讨的话题，你可以在这里看到友邻发起的新话...
            </p>
          </div>
          <div class="interact">
            <span class="btn like"><i>4</i></span>
            <span class="btn comment"><i>6</i></span>
            <span class="btn repost"><i>2</i></span>
            <span class="btn more" @click="show=!show">
              <span class="report" v-show="show"><a href="#">举报</a></span>
            </span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      show:false
    }
  }
}
</script>

<style lang="less" scoped>
.card {
  padding: 24px;
  height: 284px;
  justify-content: space-around;
  li{
    display: flex;
    .logo{
      margin-right: 8px;
      img{
        width: 48px;
        border-radius: 50%;
      }
    }
    .right-content {
      color: #b4b4b4;
      border-bottom: 1px solid #e8e8e8;
      h2{
        font-weight: 500;
        strong{
          font-size: 18px;
          line-height: 24px;
          margin-right: 4px;
          a{
            color: #494949;
          }
        }
      }
      .time{
        font-size: 13px;
        line-height: 30px;
      }
      .article {
        width: 100%;
        height: 108px;
        margin-top: 5px;
        padding: 16px;
        border: 1px solid #d8d8d8;
        border-radius: 2px;
        h2{
          font-size: 18px;
          line-height: 24px;
          margin-bottom: 5px;
          color: #494949;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        p{
          font-size: 13px;
          line-height: 16px
        }
      }
      .interact {
        line-height: 60px;
        span{
          margin-right: 20px;
          font-size: 14px;
          i{
            font-style: normal;
          }
        }
        .like:before {
          background: url(https://img3.doubanio.com/f/talion/7a0756b3b6e67b59ea88653bc0cfa14f61ff219d/pics/card/ic_like_gray.svg);
        }
        .comment:before {
          background: url(https://img3.doubanio.com/f/talion/ac8a7e0d5f471480549c7abf45fc0fa4c3b4184f/pics/card/ic_comment.svg);
        }
        .repost:before {
          background: url(https://img3.doubanio.com/f/talion/8604ef3950b947d55406e2a6f5cf6ca7f0b934e3/pics/card/ic_retweet_gray.svg);
        }
        .more:before {
          background: url(https://img3.doubanio.com/f/talion/be268c0a1adb577c8dfdcfbe48c818af3983ed62/pics/card/more.svg);
        }

        .more {
          float: right;
          margin-right: 0;
          position: relative;
          span{
            position: absolute;
            top: -40px;
            left: -72px;
            width: 60px;
            padding: 0 20px;
            line-height: 48px;
            text-align: center;
            font-size: 15px;
            border: 1px solid #d8d8d8;
            border-radius: 6px;
            background-color: #f6f6f6;
            a{
              color: #42bd56;
            }
          }
        }

        .btn:before{
          content: "";
          width: 20px;
          height: 20px;
          margin-right: 4px;
          background-position: center center;
          background-repeat: no-repeat;
          display: inline-block;
          margin-bottom: -4px;
        }
      }
    }
  }
}
</style>
