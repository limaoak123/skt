<template>
  <div class="app-container">
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
import Rem from "./assets/js/rem.js";
new Rem();
export default {
  // data() {
  //   return {};
  // },
  // components: {
  //   topT
  // }
};
</script>

<style scoped>
@import "../static/reset.css";
.app-container {
  /* padding-top: 80px; */
  /* padding-bottom: 50px; */
  overflow-x: hidden;
}

.top {
  position: fixed;
  z-index: 99;
  background: white;
  height: 80px;
}
header {
  padding: 0 5px;
  display: flex;
  height: 40px;
  justify-content: space-between;
  /* position: fixed; */
  /* z-index: 99; */
}
header .logo {
  line-height: 40px;
  flex: 2;
  padding: 5px 5px 0 5px;
}
header .logo img {
  display: block;
  margin-top: 10px;
  width: 100%;
  /* height: 0.65rem; */
}

.input-text {
  flex: 6;
  padding: 0;
  margin: 0;
  margin: 0 5px;
}
.input-text input {
  outline: none;
  border-radius: 5px;
  border: none;
  border: 1px solid #eeeeee;
  background: #eeeeee;
  height: 24px;
  margin-top: 10px;
}

.header-right {
  flex: 2;
}
.header-right ul {
  padding: 0;
  margin: 0;
  display: flex;
  margin-top: 13px;
  margin-left: 5px;
}
.header-right ul li {
  list-style: none;
  font-size: 14px;
  flex: 1;
}
.header-right ul li img {
  width: 24px;
}

.mui-scroll {
  background: white;
}

.v-enter {
  opacity: 0;
  transform: translateX(100%);
}

.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
/* // 该类名，解决 tabbar 点击无法切换的问题 */
.mui-bar-tab .mui-tab-item-llb.mui-active {
  color: #007aff;
}

.mui-bar-tab .mui-tab-item-llb {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}

.mui-bar-tab .mui-tab-item-llb .mui-icon {
  top: 3px;
  width: 24px;
  height: 24px;
  padding-top: 0;
  padding-bottom: 0;
}

.mui-bar-tab .mui-tab-item-llb .mui-icon ~ .mui-tab-label {
  font-size: 11px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>

