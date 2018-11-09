<template>
  <div class="warp">
    <top></top>
    <!-- 轮播图 -->
  <mt-swipe :auto="4000" style="border-radius:10px;margin:5px">
    <mt-swipe-item><a href=""><img src="https://res.vmallres.com/pimages//sale/2018-11/20181105233848628.jpg" alt=""></a></mt-swipe-item>
    <mt-swipe-item><a href=""><img src="https://res.vmallres.com/pimages//sale/2018-11/20181106171851428.jpg" alt=""></a></mt-swipe-item>
    <mt-swipe-item><a href=""><img src="https://res.vmallres.com/pimages//sale/2018-11/20181101141551906.png" alt=""></a></mt-swipe-item>
    <mt-swipe-item><a href=""><img src="https://res.vmallres.com/pimages//sale/2018-11/20181105233900408.png" alt=""></a></mt-swipe-item>
    <mt-swipe-item><a href=""><img src="https://res.vmallres.com/pimages//sale/2018-11/20181101095340705.png" alt=""></a></mt-swipe-item>
    <mt-swipe-item><a href=""><img src="https://res.vmallres.com/pimages//sale/2018-10/20181031231452878.png" alt=""></a></mt-swipe-item>
  </mt-swipe>
  <div class="home-lide">
    <ul>
      <li>官方商城</li>
      <li>正品保障</li>
      <li>售后无忧</li>
    </ul>
  </div>
  <div class="home-img">
    <ul>
      <li v-for="item in homeimg" :key='item.id'>
      <a :href="item.linkAddress"><img :src="item.iconPath" alt=""></a>
      <p>{{item.menuName}}</p>
    </li>
    <!-- <li>
      <img src="../../img/1.jpg" alt="">
      <p>优享购</p>
    </li>
    <li>
      <img src="../../img/1.jpg" alt="">
      <p>优享购</p>
    </li>
    <li>
      <img src="../../img/1.jpg" alt="">
      <p>优享购</p>
    </li>
    <li>
      <img src="../../img/1.jpg" alt="">
      <p>优享购</p>
    </li> -->
    </ul>
  </div>
  
  <router-link class="headerline"  to='/content/category/all'>
    <div class="title-img">
      <a href=""><img src="../../img/headeline.png" alt=""></a>
    </div>
    <div class="title-slide">
        <a href="">荣耀11.11来了 优惠大发送荣耀11.11来了 优惠大发送</a>                                                  
    </div>
    <div class="more">
      <a href="">更多</a>
    </div>
  </router-link>


  <section class="flash-sell">
    <div class="flash-sell-f">
      <ul>
        <li><a href=""><img src="https://res.vmallres.com/pimages//sale/2018-10/20181027085823194.png" alt=""></a></li>
        <li>
          <div><a href=""><img src="https://res.vmallres.com/pimages//sale/2018-11/2018110612140733.jpg" alt=""></a></div>
          <div><a href=""><img src="https://res.vmallres.com/pimages//sale/2018-11/20181101110427748.png" alt=""></a></div>
        </li>
      </ul>
    </div>
    <div class="flash-sell-s">
      <ul>
        <li><a href=""><img src="https://res.vmallres.com/pimages//sale/2018-10/2018103020054343.png" alt=""></a></li>
        <li><a href=""><img src="https://res.vmallres.com/pimages//sale/2018-11/20181106182134104.png" alt=""></a></li>
      </ul>
    </div>
    <div class="flash-sell-s">
      <ul>
        <li><a href=""><img src="https://res.vmallres.com/pimages//sale/2018-10/20181027085914735.png" alt=""></a></li>
        <li><a href=""><img src="https://res.vmallres.com/pimages//sale/2018-11/20181101110447159.png" alt=""></a></li>
      </ul>
    </div>
    <div class="flash-sell-fo">
      <ul>
        <li>
          <a href="">
            <div class="img-area">
              <div class="d-img"><img src="https://res3.vmallres.com/pimages/frontLocation/content/5436346/1540604133954.png" alt=""></div>
              <p class="p-name">HUAWEI nova 3</p>
              <p class="p-promotion">限时直降200</p>
              <p class="p-price">
                <b>￥2799</b>
                <del>￥2999</del>
              </p>
            </div>
          </a>
        </li>
         <li>
          <a href="">
            <div class="img-area">
              <div class="d-img"><img src="https://res7.vmallres.com/pimages/frontLocation/content/5449396/1539240071004.png" alt=""></div>
              <p class="p-name">荣耀8X Max</p>
              <p class="p-promotion">4+64GB版送配件</p>
              <p class="p-price">
                <b>￥1499</b>
                <del>￥2999</del>
              </p>
            </div>
          </a>
        </li>
         <li>
          <a href="">
            <div class="img-area">
              <div class="d-img"><img src="https://res6.vmallres.com/pimages/frontLocation/content/5373723/1537542879925.png" alt=""></div>
              <p class="p-name">HUAWEI nova 3i</p>
              <p class="p-promotion">3期免息 日供22.3元起</p>
              <p class="p-price">
                <b>￥1999</b>
                <del>￥2999</del>
              </p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </section>
  <!-- 精品推荐 -->
  <section class="channel-floor">
    <h2>精品推荐</h2>
      <ul>
        <li>
          <router-link :to="'/prdInfo?'+recommendList[0].prdId">
            <div class="img-area">
              <p class="d-img"><img :src="'https://res1.vmallres.com/pimages'+recommendList[0].displayPhotoPath+recommendList[0].displayPhotoName" alt="" width="100"></p>
              <p class="p-name">{{recommendList[0].prdName}}</p>
              <p class="p-promotion">{{recommendList[0].timerPromWord}}</p>
              <p class="p-price">
                <b>￥{{recommendList[0].prdUnitPrice}}</b>
                <del>￥{{recommendList[0].prdCurrentPrice}}</del>
              </p>
            </div>
          </router-link>
        </li>
        <li>
          <router-link :to="'/prdInfo?'+recommendList[8].prdId">
            <div class="img-area">
              <p class="d-img"><img src="https://res2.vmallres.com/pimages/frontLocation/content/5594038/1541405166879.PNG" alt="" width="100"></p>
              <p class="p-name">{{recommendList[8].prdName}}</p>
              <p class="p-promotion">{{recommendList[8].timerPromWord}}</p>
              <p class="p-price">
                <b>￥{{recommendList[8].prdUnitPrice}}</b>
                <del>￥{{recommendList[8].prdCurrentPrice}}</del>
              </p>
            </div>
          </router-link>
        </li>
         <li>
          <router-link :to="'/prdInfo?'+recommendList[2].prdId">
            <div class="img-area">
              <p class="d-img"><img src="https://res6.vmallres.com/pimages/product/6901443265213/428_428_1539243116157mp.png" alt="" width="100"></p>
              <p class="p-name">{{recommendList[2].prdName}}</p>
              <p class="p-promotion">{{recommendList[2].timerPromWord}}</p>
              <p class="p-price">
                <b>￥{{recommendList[2].prdUnitPrice}}</b>
                <del>￥{{recommendList[2].prdCurrentPrice}}</del>
              </p>
            </div>
          </router-link>
        </li>
        <li>
          <router-link :to="'/prdInfo?'+recommendList[9].prdId">
            <div class="img-area">
              <p class="d-img"><img src="https://res2.vmallres.com/pimages/product/6901443173129/428_428_1538985401864mp.png" alt="" width="100"></p>
              <p class="p-name">{{recommendList[9].prdName}}</p>
              <p class="p-promotion">{{recommendList[9].timerPromWord}}</p>
              <p class="p-price">
                <b>￥{{recommendList[9].prdUnitPrice}}</b>
                <del>￥{{recommendList[9].prdCurrentPrice}}</del>
              </p>
            </div>
          </router-link>
        </li>
        <li>
          <router-link :to="'/prdInfo?'+recommendList[4].prdId">
            <div class="img-area">
              <p class="d-img"><img src="https://res6.vmallres.com/pimages/product/6901443204793/428_428_1538987469994mp.png" alt="" width="100"></p>
              <p class="p-name">{{recommendList[4].prdName}}</p>
              <p class="p-promotion">{{recommendList[4].timerPromWord}}</p>
              <p class="p-price">
                <b>￥{{recommendList[4].prdUnitPrice}}</b>
                <del>￥{{recommendList[4].prdCurrentPrice}}</del>
              </p>
            </div>
          </router-link>
        </li>
        <li>
          <router-link :to="'/prdInfo?'+recommendList[5].prdId">
            <div class="img-area">
              <p class="d-img"><img src="https://res3.vmallres.com/pimages/frontLocation/content/3465557/1541405091999.png" alt="" width="100"></p>
              <p class="p-name">{{recommendList[5].prdName}}</p>
              <p class="p-promotion">{{recommendList[5].timerPromWord}}</p>
              <p class="p-price">
                <b>￥{{recommendList[5].prdUnitPrice}}</b>
                <del>￥{{recommendList[5].prdCurrentPrice}}</del>
              </p>
            </div>
          </router-link>
        </li>
         <li>
          <router-link :to="'/prdInfo?'+recommendList[6].prdId">
            <div class="img-area">
              <p class="d-img"><img src="https://res0.vmallres.com/pimages/frontLocation/content/5594040/1541405141435.png" alt="" width="100"></p>
              <p class="p-name">{{recommendList[6].prdName}}</p>
              <p class="p-promotion">{{recommendList[6].timerPromWord}}</p>
              <p class="p-price">
                <b>￥{{recommendList[6].prdUnitPrice}}</b>
                <del>￥{{recommendList[6].prdCurrentPrice}}</del>
              </p>
            </div>
          </router-link>
        </li>
        <li>
          <router-link :to="'/prdInfo?'+recommendList[7].prdId">
            <div class="img-area">
              <p class="d-img"><img src="https://res0.vmallres.com/pimages/frontLocation/content/3195677/1539587871291.png" alt="" width="100"></p>
              <p class="p-name">{{recommendList[7].prdName}}</p>
              <p class="p-promotion">{{recommendList[7].timerPromWord}}</p>
              <p class="p-price">
                <b>￥{{recommendList[7].prdUnitPrice}}</b>
                <del>￥{{recommendList[7].prdCurrentPrice}}</del>
              </p>
            </div>
          </router-link>
        </li>
      </ul>
  </section>
  <div class="bgk"></div>
  <!-- 手机 -->
  <section class="region-area">
    <h2>手机</h2>
    <div class="phone-img">
      <ul>
        <li>
          <router-link :to="'/prdInfo?'+homePhoneList[0].prdId">
            <div class="d-img">
              <p class="p-img"><img src="https://res1.vmallres.com/pimages/frontLocation/content/4728221/1540021489047.png" alt=""></p>
              <p class="p-promotion">{{homePhoneList[0].timerPromWord}}</p>
            </div>
            <p class="p-name">{{homePhoneList[0].prdName}}</p>
            <p class="p-price">
              <b>￥{{homePhoneList[0].prdCurrentPrice}}</b>
              <del>￥{{homePhoneList[0].prdUnitPrice}}</del>
            </p>
          </router-link>
        </li>
        <li>
          <router-link :to="'/prdInfo?'+homePhoneList[1].prdId">
            <div class="d-img">
              <p class="p-img"><img src="https://res4.vmallres.com/pimages/frontLocation/content/4796787/1540021512374.png" alt=""></p>
              <p class="p-promotion">{{homePhoneList[1].timerPromWord}}</p>
            </div>
            <p class="p-name">jajja</p>
            <p class="p-price">
              <b>￥{{homePhoneList[1].prdCurrentPrice}}</b>
              <del>￥{{homePhoneList[1].prdUnitPrice}}</del>
            </p>
          </router-link>
        </li>
      </ul>
      <ul>
        <li>
          <router-link :to="'/prdInfo?'+homePhoneList[2].prdId">
            <div class="d-img">
              <p class="p-img"><img src="https://res1.vmallres.com/pimages/frontLocation/content/4167269/1540021540742.png" alt=""></p>
              <p class="p-promotion">{{homePhoneList[2].timerPromWord}}</p>
            </div>
            <p class="p-name">{{homePhoneList[2].prdName}}</p>
            <p class="p-price">
              <b>￥{{homePhoneList[2].prdCurrentPrice}}</b>
              <del>￥{{homePhoneList[2].prdUnitPrice}}</del>
            </p>
          </router-link>
        </li>
       <li>
          <router-link :to="'/prdInfo?'+homePhoneList[3].prdId">
            <div class="d-img">
              <p class="p-img"><img src="https://res3.vmallres.com/pimages/frontLocation/content/4510977/1540021568436.png" alt=""></p>
              <p class="p-promotion">{{homePhoneList[3].timerPromWord}}</p>
            </div>
            <p class="p-name">{{homePhoneList[3].prdName}}</p>
            <p class="p-price">
              <b>￥{{homePhoneList[3].prdCurrentPrice}}</b>
              <del>￥{{homePhoneList[3].prdUnitPrice}}</del>
            </p>
          </router-link>
        </li>
      </ul>
    </div>
    <section class="channel-floor" style="margin-top:0">
      <ul>
        <li>
          <router-link :to="'/prdInfo?'+homePhoneList[4].prdId">
            <div class="img-area">
              <p class="d-img"><img src="https://res7.vmallres.com/pimages/frontLocation/content/5605290/1540554503257.png" alt="" width="100"></p>
              <p class="p-name">{{homePhoneList[4].microPromWord}}</p>
              <p class="p-promotion">{{homePhoneList[4].prdName}}</p>
              <p class="p-price">
                <b>￥{{homePhoneList[4].prdCurrentPrice}}</b>
                <del>￥{{homePhoneList[4].prdUnitPrice}}</del>
              </p>
            </div>
          </router-link>
        </li>
       <li>
          <router-link :to="'/prdInfo?'+homePhoneList[5].prdId">
            <div class="img-area">
              <p class="d-img"><img src="https://res6.vmallres.com/pimages/product/6901443258000/428_428_1540630399670mp.png" alt="" width="100"></p>
              <p class="p-name">{{homePhoneList[5].microPromWord}}</p>
              <p class="p-promotion">{{homePhoneList[5].prdName}}</p>
              <p class="p-price">
                <b>￥{{homePhoneList[5].prdCurrentPrice}}</b>
                <del>￥{{homePhoneList[5].prdUnitPrice}}</del>
              </p>
            </div>
          </router-link>
        </li>
        <li>
          <router-link :to="'/prdInfo?'+homePhoneList[6].prdId">
            <div class="img-area">
              <p class="d-img"><img src="https://res1.vmallres.com/pimages/frontLocation/content/5218657/1540021366908.png" alt="" width="100"></p>
              <p class="p-name">{{homePhoneList[6].microPromWord}}</p>
              <p class="p-promotion">{{homePhoneList[6].prdName}}</p>
              <p class="p-price">
                <b>￥{{homePhoneList[6].prdCurrentPrice}}</b>
                <del>￥{{homePhoneList[6].prdUnitPrice}}</del>
              </p>
            </div>
          </router-link>
        </li>
         <li>
          <router-link :to="'/prdInfo?'+homePhoneList[7].prdId">
            <div class="img-area">
              <p class="d-img"><img src="https://res6.vmallres.com/pimages/frontLocation/content/5158401/1539657891115.png" alt="" width="100"></p>
              <p class="p-name">{{homePhoneList[7].microPromWord}}</p>
              <p class="p-promotion">{{homePhoneList[7].prdName}}</p>
              <p class="p-price">
                <b>￥{{homePhoneList[7].prdCurrentPrice}}</b>
                <del>￥{{homePhoneList[7].prdUnitPrice}}</del>
              </p>
            </div>
          </router-link>
        </li>
        <li>
          <router-link :to="'/prdInfo?'+homePhoneList[8].prdId">
            <div class="img-area">
              <p class="d-img"><img src="https://res5.vmallres.com/pimages/product/2601010029604/428_428_1536216365737mp.png" alt="" width="100"></p>
              <p class="p-name">{{homePhoneList[8].microPromWord}}</p>
              <p class="p-promotion">{{homePhoneList[8].prdName}}</p>
              <p class="p-price">
                <b>￥{{homePhoneList[8].prdCurrentPrice}}</b>
                <del>￥{{homePhoneList[8].prdUnitPrice}}</del>
              </p>
            </div>
          </router-link>
        </li>
        <li>
          <router-link :to="'/prdInfo?'+homePhoneList[9].prdId">
            <div class="img-area">
              <p class="d-img"><img src="https://res2.vmallres.com/pimages/product/2601010016412/428_428_1541564459279mp.jpg" alt="" width="100"></p>
              <p class="p-name">{{homePhoneList[9].microPromWord}}</p>
              <p class="p-promotion">{{homePhoneList[9].prdName}}</p>
              <p class="p-price">
                <b>￥{{homePhoneList[9].prdCurrentPrice}}</b>
                <del>￥{{homePhoneList[9].prdUnitPrice}}</del>
              </p>
            </div>
          </router-link>
        </li>
      </ul>
    </section>
    <footer>
      <p @click="more">发现更多手机<span>></span></p>
    </footer>
  </section>
  <div class="bgk"></div>
  <div>
    <section class="bottom-area">
      <p class="login">
        <a href="">登入</a>
        <a href="">反馈</a>
      </p>
      <p class="touch">
        <a href="">
          <i></i>
          <span>客户端</span>
        </a>
        <a href="">
          <i></i>
          <span>触屏版</span>
        </a>
        <a href="">
          <i></i>
          <span>电脑版</span>
        </a>
      </p>
      <div class="copyright ">
        <p>
          <a href="">隐私政策</a>
          <span style="display:inline">|</span>
          <a href="">用户协议</a>
        </p>
        <p>
          <a href="">苏ICP备17040376号-6</a>
          <a href="">苏公网安备32011402010009号</a>
        </p>
        <span> Copyright © 2012-2018  VMALL.COM 版权所有</span>
      </div>
    </section>
  </div>
  <tableCar></tableCar>
</div>
</template>
<script>
import top from "../home/top.vue";
import tableCar from "../home/table-car.vue";
export default {
  data() {
    return {
      homeimg: [],
      homePhoneList: [],
      recommendList: []
    };
  },
  components: {
    top,
    tableCar
  },
  methods: {
    goto(id){
      this.$router.push({name:'prdInfo',query:{prdId:id}})
    },
    HomePhone() {
      const api_proxy = "https://bird.ioliu.cn/v1/?url=";
      this.$axios
        .get(
          api_proxy +
            "https://openapi.vmall.com/mcp/queryHomeRegionInfo?portal=2&lang=zh-CN&country=CN&callback=queryHomeRegionInfo"
        )
        .then(result => {
          var str = result.data.split("queryHomeRegionInfo(")[1].split(");")[0];
          // console.log(JSON.parse(str));
          var homePhone = JSON.parse(str);
          console.log(homePhone);
          if (homePhone.code == 0) {
            this.homePhoneList = homePhone.homeRegionInfos[10].showPrdList;
            this.recommendList = homePhone.homeRegionInfos[1].showPrdList;
          }
          // this.homePhone = homePhone;
          // var data = str.data;
        });
    },
    Homeimg() {
      const api_proxy = "https://bird.ioliu.cn/v1/?url=";
      this.$axios
        .get(
          api_proxy +
            "https://openapi.vmall.com/mcp/querySquaredInfo?portal=2&lang=zh-CN&country=CN&brandType=0&callback=querySquaredInfo"
        )
        .then(result => {
          var himg = result.data.split("querySquaredInfo(")[1].split(");")[0];
          var homeImg = JSON.parse(himg);
          // console.log(JSON.parse(himg));
          // console.log(homeImg.code);
          if (homeImg.code == 0) {
            // console.log(homeImg.squaredInfos);
            this.homeimg = homeImg.squaredInfos;
          }
        });
    },
    more() {
      this.$router.push({ name: "morephone" });
    }
  },
  created() {
    this.HomePhone();
    this.Homeimg();
  }
};
</script>
<style lang="scss" scoped>
@import '../../lib/css/icons-extra.css';
@import '../../lib/css/mui.css';
.warp {
  // padding-top: 80px;
  padding-bottom: 80px;
  overflow-x: hidden;
}
.mint-swipe {
  height: 152px;
  .mint-swipe-item {
    text-align: center;
    // background: red;
    img {
      width: 100%;
      // height: 100%;
    }
  }
}
.home-lide {
  ul {
    display: flex;
    padding: 0;
    margin: 0;
    justify-content: space-between;
    text-align: center;
    li {
      list-style: none;
      font-size: 12px;
      flex: 1;
    }
  }
}
.home-img {
  padding: 0 5px 0 10px;
  ul {
    display: flex;
    padding: 0;
    margin: 5px 0;
    // justify-content: space-between;
    li {
      list-style: none;
      margin: 0 13px;
      img {
        width: 45px;
      }
      p {
        font-size: 12px;
        // color: rgb(95, 94, 175);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        line-height: 1.3;
      }
    }
  }
}
.headerline {
  display: flex;
  padding: 0 10px;
  // justify-content: space-between;
  .title-img {
    flex: 2;
    a {
      img {
        width: 60px;
      }
    }
  }
  .title-slide {
    flex: 6;
    text-align: left;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    a {
      display: inline-block;

      font-size: 14px;
      color: #4d4d4d;
    }
  }
  .more {
    a {
      display: block;
      font-size: 14px;
      color: #999999;
    }
  }
}
.flash-sell {
  .flash-sell-f {
    ul {
      padding: 0;
      margin: 10px 10px 0 10px;
      display: flex;
      li {
        list-style: none;
        &:nth-child(1) {
          flex: 1;
          margin-right: 5px;
          a {
            display: block;
            img {
              width: 100%;
              border-radius: 10px 0 0 0;
            }
          }
        }
        &:nth-child(2) {
          flex: 1;
          div {
            &:nth-child(1) {
              // margin-bottom: 5px;
              img {
                border-radius: 0 10px 0 0;
                display: block;
              }
            }
            a {
              display: block;
              overflow: hidden;
              img {
                width: 100%;
                display: block;
              }
            }
          }
        }
      }
    }
  }
  .flash-sell-s {
    ul {
      padding: 0;
      margin: 0 10px;
      display: flex;
      li {
        &:nth-child(1) {
          margin-right: 5px;
        }
        list-style: none;
        flex: 1;
        a {
          display: block;
          img {
            width: 100%;
          }
        }
      }
    }
  }
  .flash-sell-fo {
    ul {
      padding: 0;
      margin: 10px 10px 0 10px;
      display: flex;
      justify-content: space-between;
      li {
        list-style: none;
        flex: 1;
        background: #f9f9f9;
        a {
          display: block;
          .img-area {
            .d-img {
              padding-top: 20px;
              img {
                width: 100%;
              }
            }
            .p-name {
              padding-top: 10px;
              text-align: center;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              color: #333333;
              font-size: 14px;
              margin-bottom: 0;
            }
            .p-promotion {
              // padding: 0.2rem 0 0.15rem;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              max-width: 100%;
              text-align: center;
              font-size: 12px;
              margin-bottom: 0;
            }
            .p-price {
              text-align: center;
              margin-bottom: 0;
              b {
                color: #333333;
                font-size: 12px;
              }
              del {
                color: #999999;
                padding-left: 5px;
                font-size: 12px;
              }
            }
          }
        }
        &:nth-child(1) {
          border-radius: 0 0 0 10px;
        }
        &:nth-child(2) {
          margin: 0 5px;
        }
        &:nth-child(3) {
          border-radius: 0 0 10px 0;
        }
      }
    }
  }
}
.channel-floor {
  margin-top: 30px;
  h2 {
    font-size: 18px;
    color: #444444;
    text-align: center;
    font-weight: normal;
  }
  ul {
    display: flex;
    white-space: nowrap;
    overflow: auto;
    padding: 0;
    margin: 10px 10px 0 10px;
    li {
      &:nth-child(1) {
        margin-left: 0;
      }
      list-style: none;
      width: 140px;
      margin-left: 10px;
      a {
        .img-area {
          .d-img {
            background: #f9f9f9;
            border-radius: 10px 10px 0 0;
            margin-bottom: 0;
            text-align: center;
            padding-top: 15px;
            width: 84px;
            img {
              width: 84px;
              display: inline-block;
            }
          }
          .p-name {
            background: rgba(155, 155, 155, 0.1);
            border-radius: 0 0 10px 10px;
            font-size: 10px;
            text-align: center;
            margin-bottom: 0;
            width: 84px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .p-promotion {
            text-align: center;
            color: #333333;
            font-size: 10px;
            margin-bottom: 0;
            height: 20px;
          }
          .p-price {
            // display: flex;
            // justify-content: space-between;
            text-align: center;
            b {
              // flex: 1;
              color: #ca141d;
              font-size: 10px;
            }
            del {
              font-size: 10px;
              color: #999999;
            }
          }
        }
      }
    }
  }
}
.region-area {
  h2 {
    font-size: 18px;
    color: #444444;
    text-align: center;
    font-weight: normal;
    margin-bottom: 10px;
    margin-bottom: 20px;
  }
  .phone-img {
    ul {
      padding: 0;
      margin: 0 10px;
      display: flex;

      li {
        flex: 1;
        list-style: none;
        a {
          .d-img {
            position: relative;
            .p-img {
              margin-bottom: 0;
              img {
                width: 100%;
                border-radius: 10px;
                // margin-left: -50%;
              }
            }
            .p-promotion {
              position: absolute;
              left: 0;
              top: 78px;
              background: rgba(0, 0, 0, 0.2);
              color: rgba(255, 255, 255, 0.9);
              margin-bottom: 0;
              width: 100%;
              text-align: center;
              border-radius: 0 0 10px 10px;
            }
          }
          .p-name {
            text-align: center;
            margin-bottom: 0;
            color: #333333;
            font-size: 12px;
          }
          .p-price {
            text-align: center;
            margin-bottom: 0;
            b {
              font-size: 12px;
              color: #ca141d;
            }
            del {
              color: #999999;
              font-size: 12px;
            }
          }
        }
        &:nth-child(1) {
          margin-bottom: 15px;
        }
      }

      &:nth-child(1) {
        li {
          margin-right: 10px;
          margin-bottom: 10px;
          &:nth-child(1) {
          }
        }
      }
      &:nth-child(2) {
        li {
          margin-bottom: 0;
          &:nth-child(1) {
            margin-right: 10px;
          }
        }
      }
    }
  }
  footer {
    p {
      text-align: center;
      color: #4a4a4a;
      span {
        padding-left: 10px;
        font-size: 16px;
      }
    }
  }
}
.bgk {
  height: 15px;
  background: #f9f9f9;
}
.bottom-area {
  .login {
    margin-bottom: 0;
    text-align: center;
    padding: 15px 0;
    border-bottom: 1px solid #eeeeee;
    a {
      display: inline-block;
      color: #333;
      &:nth-child(1) {
        border-right: 1px solid #eeeeee;
        padding-right: 15px;
      }
      &:nth-child(2) {
        padding-left: 15px;
      }
    }
  }
  .touch {
    text-align: center;
    margin-bottom: 0;
    a {
      display: inline-block;
      color: #333;
      margin: 10px;
      i {
        width: 36px;
        height: 36px;
        display: block;
      }
      span {
        color: #9b9b9b;
        font-size: 12px;
      }
      &:nth-child(1) {
        i {
          background: url(../../img/phone.png);
          background-size: 100% 100%;
          background-repeat: no-repeat;
          background-position: center center;
        }
      }
      &:nth-child(2) {
        i {
          background: url(../../img/touch.png);
          background-size: 100% 100%;
          background-repeat: no-repeat;
          background-position: center center;
        }
        span {
          color: #4d4d4d;
        }
      }
      &:nth-child(3) {
        i {
          background: url(../../img/computer.png);
          background-size: 100% 100%;
          background-repeat: no-repeat;
          background-position: center center;
        }
      }
    }
  }
  .copyright {
    p {
      text-align: center;
      margin-bottom: 0;
      a {
        display: inline-block;
        color: #9b9b9b;
        font-size: 12px;
        &:nth-child(1) {
          // border-right: 1px solid #eeeeee;
          // padding-right: 15px;
        }
        &:nth-child(2) {
          // padding-left: 15px;
        }
      }
      &:nth-child(1) {
      }
      &:nth-child(2) {
      }
    }
    span {
      display: inline-block;
      text-align: center;
      font-size: 12px;
      width: 100%;
      color: #9b9b9b;
    }
  }
}
</style>

