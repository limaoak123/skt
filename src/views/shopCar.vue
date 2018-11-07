<template>

  <div id="shopcar">
    <!-- Unproducts status  START -->
    <div id="unloggend" v-if="!localStorage">
      <span class="tit">购物车</span>
      <div id="noproduct">
        <p>购物车中还没有商品，赶紧选购吧！</p>
        <a href="">去逛逛</a>
      </div>
      <div id="hot-sugg">
        <h2>热销推荐</h2>
        <div class="sugg-prd">
          <a href="http://" v-for="(item,index) in prdInfo" :key="index">
            <img :src="'https://res.vmallres.com/pimages'+item.photoPath+'/428_428_'+item.photoName">
            <p>{{ item.displayName }}</p>
            <span>￥ {{ item.promPrice }}</span>
            <i>{{ item.price == item.promPrice ? '':'￥'+item.price }}</i>
          </a>
        </div>
      </div>
    </div>
    <!-- Unproducts status  END -->

    <!-- Products status  START -->
    <div id="have-prd" v-else>
      <span class="tit">购物车</span>
      <span class="editor" @click="fix=!fix,selectAll()" v-if="!fix">编辑</span>
      <span class="editor" @click="fix=!fix,selectAll()" v-else>完成</span>

      <!-- All shopCar Products START -->
      <div id="allprd">

        <div class="prd" v-for="(item,index) in prdList" :key="index">
          <div class="info">
            <input type="checkbox" class="checkbox"  
            @click.prevent="" @click="selectOne(item)" :checked="item.select">
            <div class="right">
              <a href="">
                <img src="https://res.vmallres.com/pimages/product/6901443260232/428_428_1539230426520mp.png" >
                <p>HUAWEI Mate 20 6GB+64GB 全网通版（亮黑色）</p>
              </a>
              <span class="money">￥ 3999</span>
              <div class="fix">
                <span class="fixminus" @click="item.count--">-</span>
                <span class="num">{{ item.count =(item.count == 0 ? 1:item.count) }}</span>
                <span class="fixadd" @click="item.count++">+</span>
              </div>
            </div>
          </div>
          <div class="server">
            <span class="text">服务</span>
            <p>
              选购
              <span>延长服务保</span>
              <span>碎屏服务保</span>
            </p>
            <i>＞</i>
          </div>
        </div>

      </div>
      <!-- All shopCar Products END -->
      <div class="pay">
        <input type="checkbox" :checked="isAll" id="all" @click="selectAll()">
        <label for="all">全选</label>
        <i>总计:</i>
        <span class="allmoney">￥ {{ totalPrice }}.00</span>
        <a v-if="!fix">结算({{ totalNum }})</a>
        <a v-else @click="deletePrd(),selectAll()">删除</a>
      </div>
    </div>
    <!-- logging status END -->
  </div>

</template>



<script>
  import axios from 'axios';
  export default {
    data(){
      return{
        dl:'https://bird.ioliu.cn/v1/?url=',
        url:'https://openapi.vmall.com/mcp/cart/queryEptCartRecommendPrds?portal=2&lang=zh-CN&country=CN&callback=__jp3',
        prdInfo:[],
        localStorage,
        fix:false,
        select:true,
        isAll:false,
        totalNum:0,
        totalPrice:0,
        prdList:[]
      }
    },
    created(){
      this.getLocalstroage()
    },
    methods:{
      getlist () {
        axios.get(this.dl + this.url).then(result => {
          var res = JSON.parse(result.data.split('__jp3(')[1].split(');')[0]);
          // console.log(res)
          if (res.code == 0) {
            // 成功
            this.prdInfo = res.products;
          } else {
            alert('网络异常，请稍后再试');
          } 

        }).catch(error => {
          console.log(error);
        })
      },
      selectOne(item){
        if(typeof item.select == "undefined"){
          this.$set(item,"select",true);
        }else{
          item.select = !item.select;
        }
        this.isSelectAll();
        this.getTotal()
      },

      // is all select
      isSelectAll(){
        var flag = true;
        this.prdList.forEach((value,index) => {
          if(!value.select){
            flag = false;
          }
        });
        this.isAll = flag ? true : false;
        this.getTotal()
      },

      selectAll(){
        this.isAll = !this.isAll;
        this.prdList.forEach((value,index) => {
          value.select = this.isAll
        });
        this.getTotal()
      },

      // delete selected

      deletePrd(){
        this.prdList = this.prdList.filter(function (item) {
          return !item.select
        });
        this.getTotal()
      },

      getTotal() {
        //获取prdList中select为true的数据。
        var _proList = this.prdList.filter((el) =>{
            return el.select
        }),
        totalPrice = 0;
        for (var i = 0, len = _proList.length; i < len; i++) {
            totalPrice += _proList[i].count * _proList[i].prdprice;
        }
        this.totalNum = _proList.length,
        this.totalPrice = totalPrice
      },

      getLocalstroage(){
        if(this.localStorage){
          this.prdList = JSON.parse(localStorage.getItem('111Info'))
          // console.log(this.prdList)
        }
      }

    },

    watch:{
      prdList: {
          handler (newVal, oldVal) {
            this.getTotal()
          },
          deep: true, // 深度监听
        }
    },

    computed: {
      
    },

    mounted(){
      // this.getLocalstroage();
      this.getlist();
      this.localStorage = localStorage.name;
      this.selectAll();
      
      // console.log(this.localStorage);
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
  html,body{
    width: 100%;
    height: 100%;
  }
  i{
    font-style: normal;
  }

  #shopcar{
    width: 100%;
    height: 100%;
    background: #EAEAEA;
    overflow: hidden;
  }
  .tit,#hot-sugg h2,.editor{
    display: block;
    // width: 45%;
    padding-left: .7rem;
    font-size: .7rem;
    color: #333;
    font-weight: normal;
    height: 2.4rem;
    line-height: 2.4rem;
    position: relative;
    background: #fff;
  }
  #noproduct{
      padding: 1.25rem .8rem;
      text-align: center;
      background: #EAEAEA;
      p{
        font-size: .75rem;
        color: #888;
        margin-top: .5rem;
      }
      a{
        border: 1px solid #CA151E;
        color: #CA151E;
        width: auto;
        padding: 0 .65rem;
        height: 1.15rem;
        line-height: 1.2;
        border-radius: 1rem;
        text-align: center;
        min-width: 1.8rem; 
        font-size: .6rem;
        display: inline-flex;
        align-items: center;
        margin-top: .5rem;
      }
  }

  #hot-sugg h2{
    font-size: .55rem;
    color: #222;
    border-bottom: 1px solid #eaeaea;
    height: 1.75rem;
    line-height: 1.75rem;
    background-color: #fff;
    text-align: left;
    padding: 0 0.8rem;
    position: relative;
  }

  #hot-sugg{
    
    .sugg-prd{
      display: flex;
      flex-direction: row;
      // justify-content: space-between;
      flex-wrap:wrap;
      background: #fff;
      a{
        padding: 0.85rem 0.8rem 0.65rem;
        text-align: center;
        display: block;
        width: 50%;
        border: 1px solid #eaeaea;
        border-left: none;
        border-top: none;
        box-sizing:border-box;
        img{
          color: #333;
          height: 4.25rem;
          width: 4.25rem;
          margin: 0 auto;
          position: relative
        }
        p{
          font-size: 0.55rem;
          color: #333;
          padding: 0.35rem 0 0;
          margin: 0 auto;
          display: table;
          white-space: normal;
        }
        span{
          font-size: 0.65rem;
          font-weight: normal;
          color: #ca151e;
          line-height: 1.2;
        }
        i{
          font-size: 0.65rem;
          color: #888;
          margin-left: 0.3rem;
          text-decoration: line-through;
        }
      }

    }
  }


  #have-prd{
    .editor{
      position: absolute;
      top: 0;
      right: 1rem;
    }
    #allprd{
      .prd{
        border: 1px solid #eaeaea;
        border-left:none; 
        border-right:none; 
        background: #fff;
        padding: .4rem .8rem;
        position: relative;
        overflow: hidden;
        margin-bottom: .2rem;
        .info{
          width: 100%;
          overflow: hidden;
          .checkbox{
            float: left;
            margin-top: 1.4rem;
            // margin-left: 1.5rem;
          }
          .right{
            float: right;
            width: 94%;
            position: relative;
            a{
              width: 100%;
              display: block;
              height: 3.5rem;
              position: relative;
              img{
                height: 100%;
                float: left;
              }
              p{
                font-size: .6rem;
                position: relative;
                word-break: break-all;
                display: block;
                top: 0;
                z-index: 2;
                width: 100%;
              }
            }
            .money{
              font-size: .65rem;
              color: #CA151E;
              position: absolute;
              bottom: 0;
              left: 3.4rem;
            }
            .fix{
              z-index: 3;
              position: absolute;
              right: .5rem;
              bottom: 0;
              border-radius: 1.5rem;
              border: 1px solid #eaeaea;
              background-color: #fff;
              height: 1.11rem;
              width: 4.2rem;
              span{
                width: 1.36rem;
                display: inline-block;
                font-size: .65rem;
                float: left;
                height: 1.12rem;
                line-height: 1.12rem;
                text-align: center;
              }
              .fixminus,.fixadd{
                font-size: .8rem;
              }
              .fixminus{
                border-radius: 1.5rem 0 0 1.5rem;
              }
              .fixadd{
                border-radius: 0 1.5rem 1.5rem 0;
              }
              .num{
                border-left: 1px solid #eaeaea;
                border-right: 1px solid #eaeaea;
              }
            }
          }
        }
        .server{
          margin-top: .3rem;
          padding: .4rem 0 0;
          font-size: .55rem;
          overflow: hidden;
          height: .9rem;
          line-height: .8rem;
          text-align: center;
          .text{
            color: #888;
            display: block;
            float: left; 
            padding-top: .05rem;
          }
          p{
            float: left;
            padding-left: .3rem;
            display: block;
            color:#888;
            span{
              padding: 0 .2rem;
              margin: 0 .2rem;
              border: 1px solid #888;
              display: inline-block;
            }
            
          }
          i{
            float: right;
            color: #888;
          }
        }
      }
    }
    .pay{
      position: fixed;
      bottom: 2.6rem;
      width: 100%;
      background: #fff;
      padding-left: .8rem;
      box-sizing: border-box;
      font-size: .65rem;
      line-height: 2.25rem;
      z-index: 10;
      a{
        width: 4.5rem;
        height: 2.25rem;
        line-height: 2.25rem;
        display: block;
        float: right;
        background: #ca151e;
        color: #fff;
        text-align: center;
      }
      span{
        font-size: .75rem;
        color: #ca151e;
      }
      i{
        margin-left: 3rem;
      }
    }
  }

.unclick{
  background: #EAEAEA; 
}


</style>