<template>
  <div style="height:80px">
   <div class="top">
      <header>
        <div class="logo">
          <img src="../../img/logo.png" alt="">
        </div>
        <div class="input-text">
          <input type="text" placeholder="荣耀6" readonly>
        </div>
        <div class="header-right">
          <ul v-show="iflogin==false">
            <li><img src="../../img/message.png" alt=""></li>
            <router-link to='/login' tag='li'>登入</router-link>    
          </ul>
        </div>
      </header>
      <div id="slider" class="mui-slider" style=" touch-action: none;">
        <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted" >
          <div class="mui-scroll">
            <router-link class="mui-control-item mui-active" to="/recommend" data-wid="tab-top-subpage-1.html">
              推荐
            </router-link>
            <a class="mui-control-item"  data-wid="tab-top-subpage-2.html" > 
              狂欢
            </a>
            <a class="mui-control-item"  data-wid="tab-top-subpage-3.html" @click='on'>
              华为
            </a>
            <router-link class="mui-control-item" to="/honor" data-wid="tab-top-subpage-4.html">
              荣耀
            </router-link>
            <a class="mui-control-item"  data-wid="tab-top-subpage-3.html" @click='newgoods'>
              新品
            </a>
            <router-link class="mui-control-item" to="/digital" data-wid="tab-top-subpage-5.html">
              数码
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import mui from "../../lib/js/mui.js";
export default {
  data() {
    return {
      iflogin: false
    };
  },
  methods: {
    on() {
      this.$router.push({ name: "huawei" });
    },
    newgoods() {
      this.$router.push({ name: "newgoods" });
    },
    loginbtn(){
      if(localStorage.getItem('username')){
        this.iflogin = true
      }
    }
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
   this.loginbtn();
  }
};
</script>

<style scoped>

@import '../../lib/css/mui.css';
@import '../../lib/css/icons-extra.css';
.top {
  position: fixed;
  z-index: 99;
  background: white;
  height: 80px;
  top: 0;
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
</style>





