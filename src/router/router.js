import VueRouter from "vue-router";
// 导入路由组件
import HomeVontainer from "../views/table-car/homeContainer.vue";
import category from "../views/table-car/category.vue";
import Personal from "../views/table-car/personal.vue";
import shopCar from "../views/table-car/shopCar.vue";
import find from "../views/table-car/find.vue";
import Category from "../views/news/category.vue";
import all from "../views/NewsList/all.vue";
import buy from "../views/NewsList/buy.vue";
import classroom from "../views/NewsList/classroom.vue";
import huaweiNews from "../views/NewsList/huaweiNews.vue";
import test from "../views/NewsList/test.vue";
import huawei from "../views/topbar/huawei.vue";
import newgoods from "../views/topbar/newgoods.vue";
import morephone from "../views/morephone/morephone.vue";

// 创建路由对象
// var router = new VueRouter({
//   routes: [
//     {
//       path: "/",
//       redirect: "/home"
//     },
//     {
//       path: "/home",
//       component: HomeVontainer
//     },
//     {
//       path: "/category/view",
//       component: category
//     },
//     {
//       path: "/find",
//       component: find
//     },
//     {
//       path: "/cart",
//       component: shopCar
//     },
//     {
//       path: "/personal",
//       component: Personal
//     },
//     {
//       path: "/content/category",
//       component: Category
//     },
//     {
//       path: "/content/category/all",
//       name: "all",
//       component: all
//     },
//     {
//       path: "/content/category/news",
//       name: "huaweinews",
//       component: huaweiNews
//     },
//     {
//       path: "/content/category/test",
//       name: "test",
//       component: test
//     },
//     {
//       path: "/content/category/classroom",
//       name: "classroom",
//       component: classroom
//     },
//     {
//       path: "/content/category/buy",
//       name: "buy",
// import Category from "../views/news/category.vue";
// import all from '../views/NewsList/all.vue';
// import buy from '../views/NewsList/buy.vue';
// import classroom from '../views/NewsList/classroom.vue';
// import huaweiNews from '../views/NewsList/huaweiNews.vue';
// import test from '../views/NewsList/test.vue';
// import huawei from '../views/topbar/huawei.vue'
// import newgoods from '../views/topbar/newgoods.vue'
// import morephone from '../views/morephone/morephone.vue'

// 创建路由对象
var router = new VueRouter({
  routes: [{
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      component: HomeVontainer
    },
    {
      path: "/category/view",
      component: category
    },
    {
      path: "/find",
      component: find
    },
    {
      path: "/cart",
      component: shopCar
    },
    {
      path: "/personal",
      component: Personal
    },
    {
      path: "/content/category",
      component: Category
    },
    {
      path: "/content/category/all",
      name: 'all',
      component: all
    },
    {
      path: "/content/category/news",
      name: 'huaweinews',
      component: huaweiNews
    },
    {
      path: "/content/category/test",
      name: 'test',
      component: test
    },
    {
      path: "/content/category/classroom",
      name: 'classroom',
      component: classroom
    },
    {
      path: "/content/category/buy",
      name: 'buy',
      component: buy
    },
    {
      path: "/huawei",
      name: 'huawei',
      component: huawei
    },
    {
      path: "/newgoods",
      name: 'newgoods',
      component: newgoods
    },
    {
      path: "/morephone",
      name: 'morephone',
      component: morephone
    }
  ],
  linkActiveClass: "mui-active"
});

export default router;
