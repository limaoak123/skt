<template>
   <footer class="mui-bar mui-bar-tab" style="background:#F9F9F9;">
      <router-link class="mui-tab-item-llb" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item-llb" to="/category/view">
        <span class="mui-icon mui-icon-extra mui-icon-extra-class"></span>
        <span class="mui-tab-label">分类</span>
      </router-link>
      <router-link class="mui-tab-item-llb" to="/find">
        <span class="mui-icon mui-icon mui-icon-eye"></span>
        <span class="mui-tab-label">发现</span>
      </router-link>
      <router-link class="mui-tab-item-llb" to="/cart">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge" v-if="allnum != 0">{{ allnum }}</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item-llb" to="/personal">
        <span class="mui-icon mui-icon-person"></span>
        <span class="mui-tab-label">我的</span>
      </router-link>
    </footer>
</template>
<script>
export default {

  // count shopcar
  data(){
    return{
      allnum:0,
      prdList:[]
    }
  },

  created(){
    this.countCar();
  },

  methods:{

    countCar(){
      var carnum = 0;
      if(localStorage.username){
        var name = localStorage.username;
        if(!localStorage.getItem(name + 'allInfo')){
          this.allnum = 0;
        }else{
          var GoodsInfo = localStorage.getItem(name+'allInfo');
          var allInfoJson = JSON.parse(GoodsInfo);
          this.prdList = allInfoJson;
          this.allnum = allInfoJson.length;
        }
      }else{
        this.allnum = 0;
      }
    }
  },




};  



</script>
<style lang="scss" scoped>
@import '../../lib/css/mui.css';
@import '../../lib/css/icons-extra.css';
.mui-scroll {
  background: white;
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


