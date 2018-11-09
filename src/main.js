// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';

// 导入MUI
import './lib/css/mui.css'
import './lib/js/mui.js'
import './lib/css/icons-extra.css'
import '../static/mui.css'


Vue.use(MintUI);
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router/router.js'

// 导入axios
import axios from 'axios'
Vue.prototype.$axios = axios;
// 时间格式化插件
import moment from 'moment'
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
})
Vue.config.productionTip = false
Vue.config.productionTip = false;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  },
  router,
})
