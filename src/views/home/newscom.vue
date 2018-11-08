<template>
 <div class="toptt">
    <header>
        <router-link id="btn-back" to="/"></router-link>
        <h3 id="pageTitle">商城头条</h3>
    </header>
    <div id="slider" class="mui-slider" style=" touch-action: none;">
        <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted" >
          <div class="mui-scroll">
            <a class="mui-control-item mui-active"  data-wid="tab-top-subpage-1.html" @click="all">
              全部
            </a>
            <a class="mui-control-item"  data-wid="tab-top-subpage-2.html" @click='huaweinews'> 
              华为新闻
            </a>
            <a class="mui-control-item"  data-wid="tab-top-subpage-3.html" @click='test'>
              产品评测
            </a>
            <a class="mui-control-item"  data-wid="tab-top-subpage-4.html" @click="classroom">
              玩机课堂
            </a>
            <a class="mui-control-item"  data-wid="tab-top-subpage-3.html" @click="buy">
              购机攻略
            </a>
          </div>
        </div>
      </div>
 </div>


</template>
<script>
import mui from "../../lib/js/mui.js";
// import axios from "axios";
export default {
  data() {
    return {};
  },
  methods: {
    huaweinews() {
      this.$router.push({ name: "huaweinews" });
    },
    test() {
      this.$router.push({ name: "test" });
    },
    classroom() {
      this.$router.push({ name: "classroom" });
    },
    buy() {
      this.$router.push({ name: "buy" });
    },
    all() {
      this.$router.push({ name: "all" });
    }
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
    // this.getNewsCategory();
  }
};
</script>
<style lang="scss" scoped>
.toptt {
  height: 100%;
  header {
    display: flex;
    padding: 0 15px;
    // text-align: center;
    height: 40px;

    border-bottom: 1px solid #eeeeee;
    a {
      width: 40px;
      height: 40px;
      // margin-right: 8px;
      background: transparent url(../../img/goback.png) scroll no-repeat center;
      background-size: 24px 24px;
      display: block;
      line-height: 40px;
    }
    h3 {
      font-weight: normal;
      font-size: 18px;
      margin: 0;
      line-height: 40px;
    }
  }
}
</style>


