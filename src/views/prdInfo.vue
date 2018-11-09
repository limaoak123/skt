<template>

  <div id="prdInfo">

    <header>
      <a href="" class="back"><img src="../../static/img/icon_back.png" alt=""></a>
      <ul>
        <li v-for = "(item,index) in tabs" :key="index">
          <a :class = "{'active':curTab===item.id}" @click = "curTab = item.id">{{ item.name }}</a>
        </li>
      </ul>
      <div>
        <span></span>
        <i></i>
      </div>
    </header>

    <main>
      <mt-swipe :show-indicators="false">
        <mt-swipe-item><a><img :src="imgurl"></a></mt-swipe-item>
        <mt-swipe-item><a><img src="https://res.vmallres.com/pimages//product/2601010050702/group//428_428_1541563605171.png"></a></mt-swipe-item>
        <mt-swipe-item><a><img src="https://res.vmallres.com/pimages//product/2601010050702/group//428_428_1541563546707.jpg"></a></mt-swipe-item>
      </mt-swipe>
      <div class="title">
        <p class="titprice">￥ 
          <span>{{ oneInfo.prdCurrentPrice }}</span>
          <i>￥{{ oneInfo.prdUnitPrice }}</i>
          <em>限时特惠</em>
        </p>
        <h1 class="titall">{{ oneInfo.prdName }} 全网通 6GB+64GB 幻影蓝 AMOLED全面屏手机 AI智能 GT游戏加速 双卡双待 长续航</h1>
        <p class="titinfo">
          【{{ oneInfo.timerPromWord }}+限量赠377元礼包：蓝牙音箱+运动臂带+荣耀耳机】现货速发，送双倍积分（积分可抵现）&gt;
          <!-- <span>麒麟970AI芯片|液冷双Turbo|6.95英寸全面屏</span> -->
          <span>麒麟970AI芯片...</span>
        </p>
        <div class="gift">
          <span>赠品</span>
          <ul>
            <li><img src="https://res.vmallres.com/pimages//product/6901443211142//428_428_1513827604555mp.jpg"></li>
            <li><img src="https://res.vmallres.com/pimages//product/1602010034901//428_428_1532311951142mp.jpg"></li>
            <li><img src="https://res.vmallres.com/pimages//product/6901443232208//428_428_1527299512313mp.jpg"></li>
          </ul>
          <i>选择 ></i>
        </div>
      </div>
      <div class="some">
        <p>
          <span>限时特价</span>
          <span>整点赠送</span>
          <span>支持分期</span>
          <span>积分翻倍</span>
          <i>></i>
        </p>
      </div>
      <div class="sukInfo">
        <div class="skucolor">
          <span class="titcolor">颜色</span>
          <p>
            <span v-for = "(item,index) in colors" :key="index"
            :class = "{'brandcolor':colorTab===item.id}" @click = "colorTab = item.id,color=item.name" >
            {{ item.name }}
            </span>
          </p>
        </div>
        <div class="skubrand">
          <span class="titbrand">版本</span>
          <p class="allbrand">
            <span v-for = "(item,index) in brands" :key="index"
            :class = "{'brandcolor':brandTab===item.id}" @click = "brandTab = item.id,brand=item.name"
            >{{ item.name }}</span>
          </p>
        </div>
        <div class="skutype">
          <span class="tittype">类型</span>
          <p class="alltype">
            <span>官方标配</span>
          </p>
        </div>
      </div>
      
    </main>

    <footer>
      <div class="tab">
        <router-link to="/" tag="div">
          <img src="../../static/img/icon_home_gray.png">
          <p>首页</p>
        </router-link>
        <router-link to="/shopCar" tag="div">
          <img src="../../static/img/icon_shoppingCart.png">
          <p>购物车</p>
        </router-link>
        <div>
          <img src="../../static/img/icon_service.png">
          <p>客服</p>
        </div>
      </div>
      <div class="btn">
        <p class="toshopcar" @click="addCar()">加入购物车</p>
        <p class="buynow">立即购买</p>
      </div>
      
    </footer>
  </div>

</template>



<script>
  import axios from 'axios';
  export default {
    data(){
        return{
          dl:'https://bird.ioliu.cn/v1/?url=',
          url:'https://openapi.vmall.com/mcp/queryHomeRegionInfo?portal=2&lang=zh-CN&country=CN&callback=queryHomeRegionInfo',
          prdInfo:[],
          oneInfo:[],
          curTab:'prd',
          tabs: [
              {
                id: 'prd',
                name: '商品'
              },
              {
                id: 'info',
                name: '详情'
              },
              {
                id:'parameter',
                name:'参数'
              },{
                id: 'evaluate',
                name: '评价'
              }
          ],
          colorTab:'color1',
          colors:[
            {
              id: 'color1',
              name: '幻影黑'
            },
            {
              id: 'color2',
              name: '幻影蓝'
            }
          ],
          brandTab:'brand1',
          brands:[
            {
              id: 'brand1',
              name: '全网通 6+64GB'
            },
            {
              id: 'brand2',
              name: '全网通 6+128GB'
            },
            {
              id: 'brand3',
              name: '全网通 8+128GB'
            }
          ],
          imgurl:'',
          prdid:0,
          skuId:0,
          prdtit:'',
          prdprice:0,
          color:'',
          brand:'',
          count:1,
          prdprice:0

        }
    },

    created(){
      this.getInfo();
      this.prdid = location.hash.split('?')[1];
      // alert(this.prdid)
      
    },

    methods:{
      getInfo(){
        axios.get(this.dl + this.url).then(result => {
          // console.log(result)
          var res = JSON.parse(result.data.split('queryHomeRegionInfo(')[1].split(');')[0]);
          // console.log(res)
          if (res.code == 0) {
            // 成功
            this.prdInfo = res.homeRegionInfos;

            for (var i = 0; i < this.prdInfo.length; i++) {
              for(var j = 0; j < this.prdInfo[i].showPrdList.length; j++){
                if (this.prdInfo[i].showPrdList[j].prdId == this.prdid || this.prdInfo[i].showPrdList[j].skuId == this.prdid) {
                  // console.log(this.prdInfo[i].showPrdList[j]);
                  this.oneInfo = this.prdInfo[i].showPrdList[j];
                  this.prdtit = this.oneInfo.prdName;
                  this.prdprice = this.oneInfo.prdCurrentPrice;
                  this.skuId = this.oneInfo.skuId;
                  this.imgurl = 'https://res.vmallres.com/pimages/'+ this.oneInfo.prdAllPicUrl.mainPic.path + '/428_428_' + this.oneInfo.prdAllPicUrl.mainPic.name;
                  console.log(this.oneInfo)
                  return;
                }
              }
              // alert(111)
            }

            // var arr = {'prdId':this.prdid};
            // console.log(JSON.stringify(this.prdInfo).indexOf(JSON.stringify(this.prdid)))

          } else {
            alert('网络异常，请稍后再试');
          }
          
        }).catch(error => {
          console.log(error);
        })
      },

      addCar(){
        var goodsInfo = [{
          "prdid":this.prdid,
          "count":this.count,
          "brand":this.brand,
          "color":this.color,
          "prdtit":this.prdtit,
          "imgurl":this.imgurl,
          "prdprice":this.prdprice
        }];
        var allInfo = JSON.stringify(goodsInfo);
        if(localStorage.username){
          var name = localStorage.username;
          if(!localStorage.getItem(name + 'allInfo')){
            localStorage.setItem(name+'allInfo',allInfo);
          }else{
            var GoodsInfo = localStorage.getItem(name+'allInfo');
            var allInfoJson = JSON.parse(GoodsInfo);
            var flag = true;
            // console.log(allInfoJson[0].prdid)
            for (var i = 0; i < allInfoJson.length; i++) {
              if((allInfoJson[i].prdid == this.prdid) || (allInfoJson[i].skuId == this.skuId)){
                console.log(allInfoJson[i].prdid);
                console.log(this.prdid);
                console.log(this.prdid);
                console.log(this.prdid);
                allInfoJson[i].count+=1;
                flag = false;
              }
            }
            if(flag){
              var oneInfo = {
                "prdid":this.prdid,
                "count":this.count,
                "brand":this.brand,
                "color":this.color,
                "prdtit":this.prdtit,
                "imgurl":this.imgurl,
                "prdprice":this.prdprice
              };
              allInfoJson.push(oneInfo);
            }
            var json = JSON.stringify(allInfoJson);
						localStorage.setItem(name +"allInfo",json);
          }
        }else{
          alert('请先登陆！');
          // location.href = 'login'
        }
      },

      

    },

    mounted(){
      this.color = this.colors[0].name;
      this.brand = this.brands[0].name;
      // console.log(typeof this.choiceColor)

    }
  }
</script>



<style lang="scss">
  *{
    padding: 0;
    margin: 0;
  }
  a{
    text-decoration: none;
  }
  i,em{
    font-style: normal;
  }
  .active{
    color: #ca141d;
    border-bottom: 2px solid #ca141d;
  }
  
  #prdInfo{
    height: 100%;
    background: #EAEAEA;
  }
  header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: #fff;
    a.back{
      width: 1.2em;
      height: 1.2em;
      display: block;
      margin: .6em 0 .6em .8em;
      float: left;
    }
    ul{
      float: left;
      margin-left: .4rem;
      li{
        float: left;
        height: 2.4em;
        text-align: center;
        overflow: hidden;
        display: block;
        a{
          font-size: .7rem;
          width: 2.4rem;
          text-align: center;
          margin-right: .6rem;
          display: block;
          position: relative;
          top: -2px;
          line-height: 2.4rem;
          height: 100%;
          font-weight: bold;  
        }
      }
    }
    div{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items:center;
      span{
        background: url(../../static/img/icon-share.png) no-repeat;
        position: relative;
        background-size: 1.2rem 1.2rem;
        background-position: center;
        width: 1.2rem;
        height: 1.2rem;
        display: block;
      }
      i{
        background: url(../../static/img/icon_header_nav.png) no-repeat;
        position: relative;
        padding: .6rem;
        margin: 0 .3rem;
        background-size: 1.2rem 1.2rem;
        background-position: center;
      }
      
    }
 
  }

  main{
    height: 17rem;
    padding: .25rem 0;
    box-sizing: border-box;
    background: #fff;
    .mint-swipe{
      padding: 1.25rem 0 .5rem;
      box-sizing: border-box;
      img{
        height: 100%;
        display: block;
        margin: 0 auto;
      }
    }
    .title{
      padding: 0 .8rem;
      background: #fff;
      p.titprice{
        color: #e01d20;
        font-size: .65rem; 
        span{
          font-size: .9rem;
        }
        i{
          font-size: .55rem;
          color: #888;
          text-decoration: line-through;
        }
        em{
          display: inline-block;
          margin-left: .4rem;
          height: .6rem;
          min-width: 2.6rem;
          color: #ef5a62;
          font-size: .48rem;
          border: 1px solid;
          border-radius: 5rem;
          line-height: .5rem;
          padding-top: .12rem;
          text-align: center;
        }
      }
      h1.titall{
        font-size: .75em;
        line-height: 1.3em;
        font-weight: bold;
        max-height: 2.6em;
        word-break: break-all;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        position: relative;
        top: .1em;
        margin: .5rem 0;
      }
      .titinfo{
        font-size: .55em;
        color:#ca151e;
        line-height: 1.2em;
        word-break: break-all;
        margin-bottom: .5rem;
        span{
          color: #888;
        }
      }
    }
    .gift{
      border-top: 1px solid #eaeaea;
      width: 100%;
      color: #888;
      overflow: hidden;
      span{
        float: left;
        display: block;
        width: 1.65em;
        font-size: .55em;
        min-width: 3.1em;
        text-align: left;
        line-height: 3.6em;
      }
      ul{
        float: left;
        padding-right: 2em;
        max-height: 3.6em;
        overflow: hidden;
        li{
          float: left;
          height: 1.5em;
          width: 1.5em;
          background-color: #fff;
          margin: .15em .5em .15em 0;
          border: 1px solid #eaeaea;
          border-radius: .1em;
          float: left;
          overflow: hidden;
          box-sizing: border-box;
          img{
            width: 100%;
          }
        }
      }
      i{
        float: right;
        font-size: .5em;
        display: block;
        color: #888;
        vertical-align: middle;
        line-height: 3.6em;
      }
    }
    .some{
      max-height: 1.5em;
      background-color: #f6f6f6;
      overflow: hidden;
      padding: .2rem .8em;
      position: relative;
      border-top: 1px solid #eaeaea;
      p{
        line-height: 1em;
        padding-right: .6em;
        overflow: hidden;
        position: relative;
        span{
          font-size: .55em;
          color: #888;
          display: inline-block;
          padding: 0 .82em 0 1.182em;
          height: 2.728em;
          line-height: 3em;
          background: url(../../static/img/icon_discount.png) no-repeat left center;
          background-size: .91em .91em;
        }
      }
      i{
        position: absolute;
        right: 0;
        line-height: 1.54rem;
        font-size: .55rem;
        color: #888;
      }
    }
    .sukInfo{
      padding: 0 .8em;
      background: #fff;
      .skucolor,.skubrand,.skutype{
        border-bottom: 1px solid #eaeaea;
        padding: .3rem;
        position: relative;
        .brandcolor{
          border: 1px solid #ca151e;
          color: #ca151e;
          margin-right: .4rem;
        }
        .titcolor,.titbrand,.tittype{
          font-size: .55em;
          line-height: 1.95rem;
          color: #888;
          display: inline-block;
          height: 1.95em;
          margin-top: -.2rem;
          position: absolute;
        }
        p{
          display: inline-block;
          margin-left: 2rem;
          span{
            font-size: .6em;
            height: 1.95em;
            line-height: 1.95em;
            padding: 0 1em;
            border-radius: 1em;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            vertical-align: text-bottom;
            border: 1px solid #b2b2b2;
            color: #333;
            display: inline-block;
             margin-right: .4rem;
          }
        }
        p.allbrand{
          span{
            display: block;
            margin: .2rem 0;
          }
        }
      }
    }
  }
  footer{
    position: fixed;
    bottom: 0;
    background: #fff;
    border-top: 1px solid #eaeaea; 
    width: 100%;
    display: flex;
    .tab{
      flex: 1;
      display: flex;
      div{
        width: 2.75em;
        padding: .2em 0;
        float: left;
        border-right: 1px solid #eaeaea;
        box-sizing: border-box;
        flex: 1;
        img{
          width: 1.2rem;
          height: 1.2em;
          display: block;
          margin: 0 auto;
          position: relative;
        }
        p{
          font-size: .5em;
          padding-top: .4em;
          color: #888;
          text-align: center;
        }
      }
    }
    .btn {
      flex: 1;
      display: flex;
      .toshopcar,.buynow{
        font-size: .65rem;
        background: #f17f00;

        line-height: 2.6rem;
        text-align: center;
        color: #fff;
        flex: 1;
      }
      .buynow{
        background: #ca151e;
      }
    }
    
  }


</style>



