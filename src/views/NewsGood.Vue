<template>
  <div class="wrapper">
    <ul>
     <li v-for="(item,index) in info" :key="index">
        <a href="javascript:;" @click="routerTo(item.sid)">
          <div class="img">
            <img :src="'../static/lm_newsImg/'+item.src">
            <span>{{item.txt}}</span>
          </div> 
          <div class="list_tit">
            <h4>{{item.tit}}</h4>
            <p>{{item.tip}}</p>
          </div>	
          <div class="priceZone">
            <div class = "price">
             <i class="yen">￥</i>{{item.price}}<i class="qi">起</i>
            </div>
            <div class = "content">
              立即购买 >
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'newsgood',
    data(){
      return{
        info: {},
      }
    },
    methods: {
     getData(){
      axios.get('../static/lm_json/news.json')
      .then(result =>{
        this.info = result.data
      })
      .catch(error =>{
        console.log(error)
      })
     },
     routerTo(sid){
       console.log(sid);
       this.$router.push({path: '/prdInfo', query: {goodId:sid}});
     }
    },
    mounted(){
      this.getData()
    }
}
</script>

<style scoped>
  @import url(https://res8.vmallres.com/shopdc/cdn/modules/common/mb/css/common.css?v=20181106000017);
  @import '../../static/reset.css';
  .wrapper{
    overflow: hidden;
  }
  ul{
    overflow: hidden;
    padding: 0.5rem 0.6rem 0;
    margin-right: -0.3rem;
  }
  li{
    float: left;
    width: 8rem;
    margin-right: 0.3rem;
  }
  .img{
    position: relative;
    margin-bottom: 0.45rem;
  }
  span{
    position: absolute;
    bottom: 0;
    left: 0;
    height: 0.75rem;
    line-height: 0.8rem;
    text-align: center;
    vertical-align: middle;
    padding: 0 0.3rem;
    background: #e16773;
    color: #FFFFFF;
    font-family: HYQiHei FZS;
    font-size: 0.55rem;
    border-radius: 0 0.2rem;
  }
  h4{
    box-sizing: border-box;
    padding: 0 0.3rem;
    height: 0.95rem;
    line-height: 0.95rem;
    color: #000000;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 0.7rem;
    margin-bottom: 0.15rem;
    text-align: center
  }
  p{
    box-sizing: border-box;
    padding: 0 0.3rem;
    height: 0.7rem;
    line-height: 0.7rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-family: HYQiHei EZS;
    font-size: 0.55rem;
    color: #808080;
    text-align: center;
  }
  .priceZone{
    height: 1.2rem;
    line-height: 1.2rem;
    margin-top: 0.3rem;
    margin-bottom: 0.8rem;
    border: 1px dashed #000;
    border-radius: 0.2rem;
    border-left: none;
    width: 7.5rem;
    margin-left: 0.2rem;
  }
  .price{
    width: 3.8rem;
    height: 100%;
    float: left;
    line-height: 1.2rem;
    text-align: center;
    font-size: 0.75rem;
  }
  .yen{
    font-size: 0.45rem;
    font-weight: bold;
    position: relative;
    bottom: 0.1rem;
  }
  .qi{
    font-size: 0.45rem;
    margin-left: 0.1rem;
  }
  .content{
    line-height: 1.25rem;
    text-align: center;
    font-weight: bold;
    color: #CA141D;
    font-size: 0.55rem;
  }
</style>