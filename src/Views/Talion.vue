<template lang="html">
<div class="talion">
  <div class="top">
    <span @click="closeTalion">关闭</span>
    <form class="search" action="return false" method="post">
      <input type="search" name="" value="">
    </form>
  </div>
  <ul class="category">
    <li>
      <div class="movie">
        <h2>电影</h2>
        <span>影院热映</span>
      </div>
      <div class="TV">
        <h2>电视</h2>
        <span>正在热播</span>
      </div>
      <div class="book">
        <h2>图书</h2>
        <span>畅销排行</span>
      </div>
    </li>

    <li>
      <div class="city">
        <h2>同城</h2>
        <span>周末活动</span>
      </div>
      <div class="group">
        <h2>小组</h2>
        <span>志趣相投</span>
      </div>
      <div class="music">
        <h2>音乐</h2>
        <span>新碟榜</span>
      </div>
    </li>

    <li>
      <div class="read">
        <h2>阅读</h2>
        <span>电子书</span>
      </div>
      <div class="game">
        <h2>游戏</h2>
        <span>虚拟世界</span>
      </div>
      <div class="application">
        <h2>应用</h2>
        <span>玩手机</span>
      </div>
    </li>

    <li>
      <div class="thing">
        <h2>东西</h2>
        <span>心爱之物</span>
      </div>
      <div class="radio">
        <h2>FM</h2>
        <span>红心歌单</span>
      </div>
      <div class="market">
        <h2>市集</h2>
        <span>购买原创</span>
      </div>
    </li>
  </ul>
  <sub-nav mold="navBottom"></sub-nav>
</div>
</template>

<script>
import SubNav from "../components/SubNav"

export default {
  methods:{
    closeTalion(){
      this.$emit('closeTalion');
    }
  },

  components:{
    SubNav
  }
}
</script>

<style lang="less" scoped>
.talion{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #fff;
  z-index: 999;
  .top{
    width: 100%;
    height: 58px;
    padding: 0 18px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #f6f6f6;
    span{
      font-size: 16px;
      color: #42bd56;
      margin-right: 14px;
    }
    .search {
      flex-grow: 1;
      input{
        width: 100%;
        height: 31px;
        background-color: #f3f3f3;
        border-radius: 4px;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAABGdBTUEAALGPC/xhBQAABUlJREFUaAXdWT1oHEcU1unHR8ih0lZEKsWVkSrLkFaVQIYkJ93JBBUp0hm7sdMJbOlAnR0ICDdJk4AL6++wi8PChXAXMG6CMSmSTpZlFy7EmWBLQvm+5c3ydrTam9nblXQeWM2bN/N+vntvZ2afuro+sVZoB0+9Xv9qd3f3W+i4WCgUBg8ODgZB82HbAm8LvC3Qz/v6+h6Wy+V/g5kc/3gDWltbO7u/v38Njpbh17Cnby8Ast7T07M4OTn51lPWabkzoKWlpRKcuQkgP0FzyUn70Yua0HUHuu5OT083j17mP+MEaHl5eRLG70H9OX8TiRJvAOxqtVpdS1zlMZkICCAKKysrt6DvNukYvR/B24BTj9C/RCpt7e3t8Z3p6u3tHURq8n26ANlv0I/hOYMn0iB7AMZ8pVKpCR2Z9x3EORnoQIp9BuIPPJUYpdvg1Uql0v2JiYmdmPlDrEaj0d9sNmcwwR9owF4AMMsA/gNS8D97zmccC4jRQJotQVEEDIx+AG+hv7//5/Hx8fc+hsza9fX1z3d2dm5gPAs7RcNnT1CI1JV2IhULCGBuw9icNgZ6GylVnpqa+tPipxqurq5+jZSsQzgSLYCZwzs1n0ophA4B4gYA/gqjZJTCyF/d3d2XAWbT8LLoAepLgGpA14jRJ9GppN0oQqepkFszun/w6N2MkbmUNRjaYxNQz0DqSL3B+HyaLb2bSk3Dr3MTdAgG4w+SZplGxthjzx+KNmhL8c+JL4rlRoaAeANAmvHQ1G0hq3dGK7VpsbGg+fSFPmmeCx0CQi5fh4C+AWxzN3NRksUascXjwLQSfLpmBq59CAi/yHeWUC3t1mzpcRqKrZpeDJ94X/RqASDemiE1rCQ/8tBU42MhxSZvH6YNi29m3LIPAMkngF684XoD0ELt0mJzQ+uJ8U1PH6JNyl3UM9hheDc7kRZjO+JbK6cCQFBiPsrM+peGOIE+YjvGt0SXAkB4+SKAcC4EN+ZEyZwmbdu2b63MmpSLADKfAK2E85iPsR3xrZVNk3L8JglbsViMXInCiWMgYmx7+WJS7rX2FQfaF3p8nHSMba/ag4lQ5J2BUq8wZwk4xjYvqs7NRCgCCNIXnDVkv9C2/crHRAAIAs+1EHYW1gBOpNm2sW0/9XEkAMQioCU0xhqAxct9KDbHtCEAeqLHregAkFQ0X6jFZ6SgoVj5k2IzrAwBzCZqDH/7WDYpxwIFv+91u8WChmbkSYstVoTChvT7NRw4EiEgnNCLkGkquQGpzihWfqTY0p/hrCrRJ68WAmKtGVG6Y0nPsjpj8TIfio1ZS/FvqCm8s3gthyEgrkSI76IL932MizgX6ixktNSUcoEUSeq0pVTwGKmpsTMZAcQqC6J0FY++Cg0AVCMPUAKGZSydanT+xzTRoWAEEBlSD5snrdoIQD2DA5mlH3VRJ2yENTmx9whgHivbXmTsxQ/hZ5H+Afqq1obI5VoKFlv76GcA6oG27UrHAqIwi/UA8LsNShRnXqy3HE4N6khANCCRyvXfKQKEn/yX8fTImF0qUImAjPIc/+HF3YwbwGNkxBXQrDS1BerQpmBA6F42ivNIwTnw9eGrl/nQPDR/wTNiNgB5Z2bAY2RMI7j7AtbwEnunCGkN7fzTGD/IJtKY15lFAIg9NNuNlDcgDS7h3/rUyy9NHtKvAOQpnieuF812QLUFSIPLmk4L6tQC4g+UBtSpBpQG1KkH5AuqIwD5gOoYQK6gOgqQCyinmwIVnZaWcKMIvgw6DhB/WBsUDu2HQ0ND33Ou41KOTpsm51SVYEZHR3cN/5Pq/wfEdlFyq1lD2AAAAABJRU5ErkJggg==) no-repeat 50% #f3f3f3;
        background-size: 18px;
        font-size: 14px;
      }
    }
  }
  .category {
    border-bottom: 1px solid #f3f3f3;
    li{
      display: flex;
      text-align: center;
      margin: 24px 0;
      justify-content: space-around;
      h2{
        font-size: 24px;
        line-height: 28px;
        font-weight: 400;
      }
      span{
        font-size: 14px;
        line-height: 18px;
        color: #b3b3b3;
      }

      .movie{
        h2{
          color: rgb(35, 132, 232);
        }
      }
      .TV{
        h2{
          color: rgb(122, 106, 219);
        }
      }
      .book{
        h2{
          color: rgb(159, 120, 96);
        }
      }
      .city{
        h2{
          color: rgb(230, 70, 126);
        }
      }
      .group{
        h2{
          color: rgb(42, 184, 204);
        }
      }
      .music{
        h2{
          color: rgb(244, 143, 46);
        }
      }
      .read{
        h2{
          color: rgb(159, 120, 96);
        }
      }
      .game{
        h2{
          color: rgb(87, 116, 197);
        }
      }
      .application{
        h2{
          color: rgb(89, 108, 221);
        }
      }
      .thing{
        h2{
          color: rgb(225, 100, 77);
        }
      }
      .radio{
        h2{
          color: rgb(64, 207, 169);
        }
      }
      .market{
        h2{
          color: rgb(66, 189, 86);
        }
      }
    }
  }
  .subnav.has-header{
    margin-top: 0;
    li{
      a{
        color: rgb(66, 189, 86);
      }
    }
  }
}
</style>
