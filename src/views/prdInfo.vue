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
        <mt-swipe-item><a href=""><img src="https://res.vmallres.com/pimages//product/2601010050702//428_428_1541563540767mp.jpg"></a></mt-swipe-item>
        <mt-swipe-item><a href=""><img src="https://res.vmallres.com/pimages//product/2601010050702/group//428_428_1541563605171.png"></a></mt-swipe-item>
        <mt-swipe-item><a href=""><img src="https://res.vmallres.com/pimages//product/2601010050702/group//428_428_1541563546707.jpg"></a></mt-swipe-item>
      </mt-swipe>
      <div class="title">
        <p>￥ 
          <span>2399</span>
          <i>￥2799</i>
          <em>限时特惠</em>
        </p>
      </div>
    </main>

    <footer>
      
    </footer>
  </div>

</template>



<script>
  import axios from 'axios';
  export default {
    data(){
        return{
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
        }
    },
    methods:{
       

      },

      mounted(){
       
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
  header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
    .mint-swipe{
      padding: 1.25rem;
      box-sizing: border-box;
      img{
        height: 100%;
      }
    }
    .title{
      padding-left: .8rem;
      p{
        color: #e01d20;
        padding: 0 0 .3rem;
        font-size: .9rem; 
      }
    }
  }


</style>