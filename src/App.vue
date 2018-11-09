<template>
  <div class="app-container" id="app-container">
    <!-- <div class="top">
      <header>
        <div class="logo">
          <img src="./img/logo.png" alt="">
        </div>
        <div class="input-text">
          <input type="text" placeholder="荣耀6" readonly>
        </div>
        <div class="header-right">
          <ul>
            <li><img src="./img/message.png" alt=""></li>
            <li>登入</li>
          </ul>
        </div>
      </header>
      <div id="slider" class="mui-slider mui-fullscreen">
        <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
          <div class="mui-scroll">
            <a class="mui-control-item mui-active" href="#home" data-wid="tab-top-subpage-1.html">
              推荐
            </a>
            <a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
              狂欢
            </a>
            <a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
              华为
            </a>
            <a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
              荣耀
            </a>
            <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
              新品
            </a>
            <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
              数码
            </a>
          </div>
        </div>
      </div>
    </div> -->
  
   <!-- <topT></topT> -->
    <!-- 中间的 路由 router-view 区域 -->
    <div>
      <!-- <transition> -->
        <router-view></router-view>
      <!-- </transition> -->
    </div>
    <!-- 底部 -->
    <!-- <footer class="mui-bar mui-bar-tab" style="background:#F9F9F9;">
      <router-link class="mui-tab-item-llb" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item-llb" to="/category/view">
        <span class="mui-icon mui-icon-extra mui-icon-extra-class"></span>
        <span class="mui-tab-label">分类</span>
      </router-link>
      <router-link class="mui-tab-item-llb" to="/cart">
        <span class="mui-icon mui-icon mui-icon-eye"></span>
        <span class="mui-tab-label">发现</span>
      </router-link>
      <router-link class="mui-tab-item-llb" to="/find">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item-llb" to="/personal">
        <span class="mui-icon mui-icon-person"></span>
        <span class="mui-tab-label">我的</span>
      </router-link>
    </footer> -->


  </div>

</template>


<script>
// import Rem from "./assets/js/rem.js";
// new Rem();
export default {
  // data() {
  //   return {};
  // },
  // components: {
  //   topT
  // }
  name: 'App'
};
</script>

<style scoped>
@import "../static/reset.css";
 @import url(https://res8.vmallres.com/shopdc/cdn/modules-bf/yiqm/com/mb/css/swiper.min.css?v=20181106121156);

#app-container{
  height: 100%;
}

.app-container {
  /* padding-top: 80px; */
  /* padding-bottom: 50px; */
  /* overflow-x: hidden; */
}





</style>

