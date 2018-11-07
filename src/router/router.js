import Vue from 'vue'
import Router from 'vue-router'
import Hwvue  from '../views/hwVue.vue'
import Hwmy from '../views/hwmy.vue'


Vue.use(Router)
// Vue.use(Swiper)


export default new Router({
  routes: [
    {
      path:'/hw',
      components:{
        caiwen:Hwvue 
      }
    },
    {
      path:'/my',
      components:{
        my:Hwmy
      }
    }
    
  ],
});