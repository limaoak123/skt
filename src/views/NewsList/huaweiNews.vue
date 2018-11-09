<template>
  <div>
    <newscom></newscom>
    <div class="categroyContent">
      <div class="top">
        <p class="p-img">
          <img :src="'https:'+'//res.vmallres.com/pimages//'+allList[0].share_thumbnail" alt="">
        </p>
        <p class="p-name">{{allList[0].title}}</p>
        <p class="p-promotion">{{allList[0].summary}}</p>
        <p class="p-other">
          <span>{{allList[0].createTime | dateFormat}}</span>
          <em>{{allList[0].viewAmount}}</em>
        </p>
      </div>
      <ul>
        <!-- <li>
          <a href="">
            <p class="p-img">
              <img src="https://res.vmallres.com/pimages///cop/2018110710473681/1541558856081.jpg" alt="">
            </p>
             <div>
              <p class="p-name">【#立冬#已至】不管在哪里，请务必照顾好自己</p>
              <p class="p-other">
                <span>2018/11/08</span>
                <em>331</em>
              </p>
            </div>
          </a>
        </li> -->
        <li v-for="(item ,index) in allList" :key='item.id' v-if='index >= 1'>
          <a href="">
            <p class="p-img">
              <img :src="'https:'+'//res.vmallres.com/pimages//'+item.share_thumbnail" alt="">
            </p>
            <div>
              <p class="p-name">{{item.title}}</p>
              <p class="p-other">
                <span>{{item.createTime | dateFormat}}</span>
                <em>{{item.viewAmount}}</em>
              </p>
            </div>
          </a>
        </li>
        <!-- <li>
          <a href="">
            <p class="p-img">
              <img src="https://res.vmallres.com/pimages///cop/2018110710473681/1541558856081.jpg" alt="">
            </p>
            <div>
              <p class="p-name">【#立冬#已至】不管在哪里，请务必照顾好自己</p>
              <p class="p-other">
                <span>2018/11/08</span>
                <em>331</em>
              </p>
            </div>
          </a>
        </li> -->
      </ul>
    </div>

    <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
  </div>
</template>
<script>
import newscom from "../home/newscom.vue";
export default {
  data() {
    return {
      allList: [],
      lastList: [],
      pageIndex: 1
    };
  },
  components: {
    newscom
  },
  created() {
    this.getAll();
  },
  methods: {
    getAll() {
      const api_proxy = "https://bird.ioliu.cn/v1/?url=";
      this.$axios
        .get(
          api_proxy +
            // "https://m.vmall.com/content/index/more.json?pageNumber=1&contentType=1&type="
            "https://m.vmall.com/content/index/more.json" +
            "?pageNumber=" +
            this.pageIndex +
            "&contentType=1&type=5"
        )
        .then(result => {
          var allList = result.data.contentGoodStuffDetailList;
          this.allList = this.allList.concat(allList);
          // this.lastList = allList.un
          console.log(result.data.contentGoodStuffDetailList);
        });
    },
    getMore() {
      // 加载更多
      this.pageIndex++;
      this.getAll();
    }
  }
};
</script>
<style lang="scss" scoped>
@import '../../lib/css/mui.css';
@import '../../lib/css/icons-extra.css';
.categroyContent {
  .top {
    .p-img {
      text-align: center;
      position: relative;
      img {
        width: 100%;
        border: 0;
        max-width: 100%;
        height: 222px;
        vertical-align: top;
      }
    }
    .p-name {
      font-size: 16px;
      line-height: 1;
      color: #000;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin: 10px;
    }
    .p-promotion {
      font-size: 12px;
      color: #656565;
      padding: 0 10px;
      line-height: 16px;
      word-break: break-all;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
    }
    .p-other {
      border-top: 1px solid #eee;
      margin: 20px;
      // line-height: 1.5rem;
      color: #b8b8b8;
      position: relative;
      span {
        font-size: 12px;
      }
      em {
        background: url(../../img/eye.png) no-repeat left center;
        background-size: 18px 18px;
        padding-left: 20px;
        float: right;
        font-size: 12px;
      }
    }
  }
  ul {
    background-color: #fff;
    margin: 0;
    padding: 0;
    li {
      margin-bottom: 5px;
      list-style: none;
      // height: 80px;
      a {
        display: block;
        display: flex;
        .p-img {
          flex: 4;
          margin: 0;
          font-size: 0;
          height: 92px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        div {
          flex: 6;
          // height: 100px;
          background: #f8f8f8;
          .p-name {
            color: #000;
            font-size: 14px;
            padding: 8px;
            word-break: break-all;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .p-other {
            margin: 0 10px;
            color: #b8b8b8;
            position: relative;
            span {
              font-size: 12px;
            }
            em {
              background: url(../../img/eye.png) no-repeat left center;
              background-size: 18px 18px;
              padding-left: 20px;
              float: right;
              font-size: 12px;
            }
          }
        }
      }
    }
  }
}
</style>

