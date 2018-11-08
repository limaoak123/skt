import Vue from 'vue'
import Router from 'vue-router'
import Hwvue  from '../views/hwVue.vue'
import Hwmy from '../views/hwmy.vue'
import Xq from '../views/xq.vue'

Vue.use(Router)
// Vue.use(Swiper)


export default new Router({
  routes: [
    {
      path:'/hw',
      component:Hwvue 
    },
    {
      path:'/my',
      component:Hwmy
    },
    {
      path:'/xq/:id',
      name:'xq',
      component:Xq
    }
    
  ],
});