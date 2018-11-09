<template>
    <div> 
        <header>
            <button @click="backHome"></button>
            <h1>手机</h1>
        </header>
        <div class="subTab">
            <ul>
                <li v-for="(item, index) in tabs"
                  :key="index"
                  :class="{'active': curTab === item.id }"
                  @click="curTab = item.id">
                  <a href = 'javascript:;' @click="fun(index)"> {{ item.name }}</a>
                </li>               
            </ul>
        </div>
        <div class="listInfo">
           <ul>
             <li v-for="(item,index) in pList" :key="index">
               <a href = 'javascript:;' @click="routerTo(item.sid)">
                 <div class="imgs">
                   <img :src="'../static/lm_newsImg/'+item.src">
                 </div>
                 <div class="txt">
                   <p class="tit">{{item.tit}}</p>
                   <p class="tip">{{item.txt}}</p>
                   <p class="pri"><em class="price">￥{{item.price}}</em><span class="oldprice">{{item.oldprice}}</span></p>                   
                 </div>
               </a>
             </li>
           </ul>
        </div>
    </div>
</template>


<style scoped>
  @import url(https://res8.vmallres.com/shopdc/cdn/modules/common/mb/css/common.css?v=20181106000017);
  @import '../../static/reset.css';
  header{
    /* padding: 0 .8rem; */
    background-color: #fff;
    top: 0;
    left: 0;
    right: 0;
    width: 90%;
    max-width: 720px;
    height: 2.4rem;
    margin: 0 auto;
    z-index: 100;
    border-bottom: 1px solid #e5e5e5;
    overflow: hidden;
  }
  button{
      display: block;
      width: 1.2rem;
      height: 1.2rem;
      float: left;
      background: url('../../static/lm_newsImg/icon_back.png');
      background-size: 1.2rem;
      margin-top: 0.5rem;
  }
  header h1{
    display: block;
    width: 45%;
    height: 2.4rem;
    line-height: 2.4rem;
    margin-left: 0.4rem;
    font-size: 0.7rem;
    font-weight: normal;
    color: #333;
    float: left;
  }
  .subTab{
        padding: 0.3em 0;
        max-width: 720px;
  }
  .subTab ul{
    overflow: hidden;
    border: 1px solid rgba(202,21,30,0.3);
    border-radius: 0.8rem;
    width: 90%;
    margin: 0 auto;
  }
  .subTab li{
    float: left;
    text-align: center;
    width: 25%;
    line-height: 0.8rem;
    border-right: 1px solid rgba(202,21,30,0.3);

  }
  .subTab li.active{
    background-color: rgba(202,21,30,0.03);
  }
  .subTab li.active a{
    color: #ca151e;
  }
  .subTab li:last-child{
     border-right: none;
  }
  .subTab a{
    font-size: 0.6rem;
    line-height: 1.2rem;
    color: #888;
    display: inline-block;
    width: 100%;
    height: 100%;
  }
  .listInfo{
    padding: 0rem 0.8rem;
  }
  .listInfo li{
    padding: 0.3em 0;
    height: 4.8rem;
    box-sizing: content-box;
    border-bottom: 1px solid #eee; 
  }
  .listInfo li a{
    display: inline-block;
    width: 100%;
    height: 100%;
  }
  .listInfo li img{
    height: 4rem;
    overflow: hidden;
  }
  .listInfo .imgs{
    float: left;
    padding: 0.2rem 0;
  }
  .listInfo img{
    display: block;
    margin-top: 0.2rem;
  }
  .listInfo .txt{
    float: left;
    position: relative;
    height: 100%;
  }
  .txt .tit{
    font-size: 0.75em;
  }
  .txt .tip{
    font-size: 0.65em;
    color: #888;
    margin-top: 0.2rem;
  }
  .txt .price{
    color: #ca151e;
    font-size: 0.75rem;
  }
  .txt .oldprice{
    font-size: 0.75rem;
    color: #bbb;
    text-decoration: line-through;
  }
  .txt .pri{
    position: absolute;
    bottom: 0;
  }
</style>


<script>
import axios from 'axios';

export default {
    name: 'phonelist',
    data(){
      return{
        pList: {},
        curTab: 'newst',
        tabs:[
          {
            id:'newst',
            name: '最新'
          },
          {
            id:'renqi',
            name:'人气'
          },
          {
            id:'price',
            name:'价格',
            flag: true
          },
          {
            id:'nums',
            name:'评价数'
          }
        ]

        }
      },
    methods: {
     getData(){
      axios.get('../static/lm_json/phones.json')
      .then(result =>{
        this.pList = result.data
      })
      .catch(error =>{
        console.log(error)
      })
     },
     fun(index){
       if(index==2){
        this.flag = !this.flag;
        if(this.flag){
          console.log('价格排序')
          this.pList.sort((a,b)=>{
            // console.log(1);
            // console.log(a.price<b.price);
            return a.price<b.price;
          });
        }else{
         this.pList.sort((a,b)=>{
            return a.price>b.price;
          });
        }
       }else if(index==0){
         this.pList.sort((a,b)=>{
            return a.sid>b.sid;
          });
       }else if(index==1){
         console.log("人气排序")
       }else{
         console.log("评价排序")
       } 
     },
     routerTo(sid){
       console.log(sid);
       this.$router.push({name: 'prdInfo', query: {goodId:sid}});
     },
     backHome(){
       this.$router.replace("/")
     }
    },
    mounted(){
      this.getData();
    }
}
</script>
