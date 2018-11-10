<template>
    <div>
    <article>
      <div class="head">
          <form>
              <input type="text" placeholder="荣耀8x" />
              <a><img src="../../../static/img/message.png" /></a>
          </form>
      </div>
      <nav class="bside">
        <ul>
          <li v-for="(item,index) in list" :key="index" :class="{'current': curTab === item.name }" @click="curTab = item.name">
            <a>{{item.name}}</a>
          </li>
        </ul>
      </nav>
      
      <section v-if="curTab=='为您推荐'">
        <div class="ads">
          <img v-for="(item,index) in banner" :key="index" :src="'https://res.vmallres.com/pimages'+item.photoPath+item.photoName" alt="" class="pic">
        </div>
        <div class="pic">
          <div class="wapper">
            <img v-for="(item,index) in wapperImg" :key="index" :src="'https://res.vmallres.com/pimages'+item.photoPath+item.photoName" alt="" class="wapperImg">
          </div>
        </div>
        <div class="phonelist">
          <!-- 热销 -->
          <div style="overflow:hidden" class="hot">
            <h3>{{rexiaoName}}</h3>
            <div class="b">
              <ul class="clearfix">
                <li v-for="(item,index) in rexiao" :key="index">
                  <img :src="'https://res.vmallres.com/pimages'+item.photoPath+item.photoName" alt="">
                  <p>{{item.name}}</p>
                </li>
              </ul>
            </div>
          </div>
          <!-- 超值 -->
          <div style="overflow:hidden" class="hot">
            <h3>{{chaozhiName}}</h3>
            <div class="b">
              <ul class="clearfix">
                <li v-for="(item,index) in chaozhi" :key="index">
                  <img :src="'https://res.vmallres.com/pimages'+item.photoPath+item.photoName" alt="">
                  <p>{{item.name}}</p>
                </li>
              </ul>
            </div>
          </div>
          <!-- 移动4G -->
          <div style="overflow:hidden" class="hot">
            <h3>{{xidongName}}</h3>
            <div class="b">
              <ul class="clearfix">
                <li v-for="(item,index) in xidong" :key="index">
                  <img :src="'https://res.vmallres.com/pimages'+item.photoPath+item.photoName" alt="">
                  <p>{{item.name}}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section v-if="curTab=='华为手机'">
        <div class="phonelist">
          <!-- 超值 -->
          <div style="overflow:hidden" class="hot">
            <h3>{{chaozhiName}}</h3>
            <div class="b">
              <ul class="clearfix">
                <li v-for="(item,index) in chaozhi" :key="index">
                  <img :src="'https://res.vmallres.com/pimages'+item.photoPath+item.photoName" alt="">
                  <p>{{item.name}}</p>
                </li>
              </ul>
            </div>
          </div>
          <!-- 移动4G -->
          <div style="overflow:hidden" class="hot">
            <h3>{{xidongName}}</h3>
            <div class="b">
              <ul class="clearfix">
                <li v-for="(item,index) in xidong" :key="index">
                  <img :src="'https://res.vmallres.com/pimages'+item.photoPath+item.photoName" alt="">
                  <p>{{item.name}}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

       <section v-if="curTab=='荣耀手机'">
        <div class="phonelist">
          <!-- 移动4G -->
          <div style="overflow:hidden" class="hot">
            <h3>{{xidongName}}</h3>
            <div class="b">
              <ul class="clearfix">
                <li v-for="(item,index) in xidong" :key="index">
                  <img :src="'https://res.vmallres.com/pimages'+item.photoPath+item.photoName" alt="">
                  <p>{{item.name}}</p>
                </li>
              </ul>
            </div>
          </div>
           <!-- 热销 -->
          <div style="overflow:hidden" class="hot">
            <h3>{{rexiaoName}}</h3>
            <div class="b">
              <ul class="clearfix">
                <li v-for="(item,index) in rexiao" :key="index">
                  <img :src="'https://res.vmallres.com/pimages'+item.photoPath+item.photoName" alt="">
                  <p>{{item.name}}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      </article>
      <tableCar></tableCar>
    </div>
</template>

<script>
import axios from 'axios'
import tableCar from "../home/table-car.vue"
export default {
  components : {
      tableCar
  },
  name: 'classify',
  data () {
    return {
      curTab: '为您推荐',
      msg: 'Welcome to Your Vue.js App',
      // 为您推荐开始
      rexiaoName: '',
      chaozhiName: '',
      xidongName: '',
      list: [],
      banner: [],
      wapperImg: [],
      rexiao: [],
      chaozhi: [],
      xidong: [],

      // 为您推荐结束 华为手机开始
      curTab: '华为手机',
      msg: 'Welcome to Your Vue.js App',
      rexiaoName: '',
      chaozhiName: '',
      xidongName: '',
      list: [],
      banner: [],
      wapperImg: [],
      rexiao: [],
      chaozhi: [],
      xidong: [],


      // // 为您推荐结束 华为手机开始
      // jingxuanName: '',
      // jingxuan: [],
      // fenleiName: '',
      // fenlei: [],
      // // 华为手机结束 荣耀手机开始
      // jingxuanName1: '',
      // jingxuan1: [],
      // fenleiName1: '',
      // fenlei1: []
    }
  },
  methods: {
    getrRecommend () {
      // const apiProxy = 'https://bird.ioliu.cn/v1/?url='
      // var url = 'https://openapi.vmall.com/mcp/getCategoryInfo?portal=2&lang=zh-CN&country=CN&callback=getCategoryInfo'
      axios.get('../../static/yh_json.json').then(result => {
        // var res = JSON.parse(result.data.split('getCategoryInfo(')[1].split(');')[0])
        console.log(result.data[0].subCategorys[0].subCategorys)
        // 为您推荐开始
        this.list = result.data
        this.banner = result.data[0].subCategorys[4].subCategorys
        this.wapperImg = result.data[0].subCategorys[3].subCategorys
        this.rexiao = result.data[0].subCategorys[0].subCategorys
        this.rexiaoName = result.data[0].subCategorys[0].name
        this.chaozhiName = result.data[0].subCategorys[1].name
        this.chaozhi = result.data[0].subCategorys[1].subCategorys
        this.xidongName = result.data[0].subCategorys[2].name
        this.xidong = result.data[0].subCategorys[2].subCategorys
        // // 为您推荐结束 华为手机开始
        // this.jingxuanName = result.data[1].subCategorys[0].name
        // this.jingxuan = result.data[1].subCategorys[0].subCategorys
        // this.fenleiName = result.data[1].subCategorys[1].name
        // this.fenlei = result.data[1].subCategorys[1].subCategorys
        // // 华为手机结束 荣耀手机开始
        // this.jingxuanName1 = result.data[2].subCategorys[0].name
        // this.jingxuan1 = result.data[2].subCategorys[0].subCategorys
        // this.fenleiName1 = result.data[2].subCategorys[1].name
        // this.fenlei1 = result.data[2].subCategorys[1].subCategorys
      })
    }
  },
  mounted () {
    this.getrRecommend()
  }
}
</script>

<style>
input::-webkit-input-placeholder{
    font-size: 12px;
    font-weight: 700;
    padding-left: 15px;
}
.head{
    background-color: #ffffff; 
    height: 2rem;
    align-items: center;
    margin-top: 0rem; 
}
.head img{
  width: 20px;
  height: 20px;
  float: right;
  margin-top: 5px;
}
.head from{
    left: 100px;
    right: 100px;
    z-index: 100;
    display: box;
    display: flex;
}
.head input{
    width: 80%;
    height: 1.5rem;
    background-color: rgba(155, 155, 155, 0.1);
    border-radius: 0.2rem;
    margin-left: 1rem;
    overflow: hidden;
    list-style: none;
    z-index: 1;
    outline: none;
    border: none;
    position: absolute;
}
.head a{
  width: 100%;
  height: 1rem;
}
.bside{
    position: fixed;
    display: flex;
}
.bside ul{
    float: left; 
    margin-left: -46px;
}
.bside ul li{
       list-style:none;
       text-align: center;
}
.bside ul li.current{
        color: #e01d20;
        z-index: 10;
        overflow: hidden;
        border-left: 2px solid #ca141d;
        background-color: #f6f6f6;
        margin-left: -0.1rem;
}
.bside ul li a{
        height: 2.5rem;
        width: 5rem;
        font-size:12px; 
        text-align: center;
        margin-left:0px; 
        border-bottom: 1px solid #eaeaea;
        border-right: 1px solid #eaeaea;
        box-sizing: border-box;
        display: box;
        display: flex;
        align-items: center;
        text-align: center;
        font-weight: 700;
        text-indent: 12px;
}
.ads{
        padding: 0 .25rem;
        position: relative;
        top: 25px;
        margin-left:76px; 
}
.ads img{
       width: 226px;
       height: 66px;
}
.wapper {
       position: relative;
        width: 375px;
        height: 36px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        padding-left: 80px;
        padding-top: 5px;
        display: block;
        top: 22px;
}
.wapper img{
        border: 0;
        height: auto;
        vertical-align: top;
        flex: 1;
        width: 72px;
        height: 36px;
}
.phonelist{
  margin-top: 20px;
}
.hot{
       width: 15rem;
       margin-left: 5rem;
}
.hot h3{
        position: relative;
        font-size: .65rem;
        line-height: 1.2;
        background-color: #fff;
        z-index: 2;
        box-sizing: border-box;
        overflow: hidden;
        padding: -5rem 0 .6rem;
        text-align: center;
        display: block;
        font-weight: 700;
}
.clearfix{
        list-style: none;
        margin-left:-20px; 
}
.clearfix li{
        position: relative;
        float: left;
        width: 2.75rem;
        height: 2.70rem;
        margin: 10px 10px 40px 10px;
        position: relative;
}
.clearfix li img{
        border: 0;
        width: 100%;
        height: 100%;
}
.clearfix p{
        color: #333;
        display: box;
        display: flex;
        align-items: center;
        height: 1.2rem;
        padding: 0 .3rem;
        font-size: .55rem;
        color: #333;
        text-align: center;
        position: relative;
        top: 0px;
}
</style>
