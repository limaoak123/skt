<template>
    <div style="background-color: #EAEAEA;">
        
        <section class="userinfo">
            <div class="u-info">
                <p class="u-bg" :style="searchBarFixed == true ? 'opacity: 1;' :'opacity: 0;'"></p> 
                <div class="u-state" v-if="login==false">
                    <p class="u-login" :style="searchBarFixed == true ? 'display:table-cell;' :'display: block;'">
                        <router-link to="/login">
                        登录 / 注册
                            <i class="arrow"></i>
                        </router-link>
                        <a href="/account/applogin?url=/personal" class="u-m-vip" :style="searchBarFixed == true ? 'display: inline-block' :'display: block;'">享受更多会员权益</a>
                    </p>
                </div>
                <div class="u-state" v-else>
                    <p class="u-accounts" :style="searchBarFixed == true ? 'display:table-cell;' :'display: block;'"><!----> 
                        <a href="/member/point" class="u-name" v-if="searchBarFixed == true">
                            <i class="u-img">
                                <img src="https://res.vmallres.com/nwap/20181015/staticm/img/personal/defaultface_user_after.png">
                            </i>
                        </a>
                        <span>
                            {{loginName}}
                        </span> 
                        <a href="/auth/index" class="u-auth" v-if="searchBarFixed == false">
                            <em>实名赚积分</em>
                        </a>
                    </p> 
                    <p class="u-vip" v-if="searchBarFixed == false">
                        <a href="/member/privilege">
                            <span>
                                <i class="icon-benefit"></i> 
                                <em>查看我的权益</em>
                            </span>
                        </a>
                    </p>
                </div> 
                <section class="shortcut">
                    <a class="icon-message"></a>
                </section>
            </div> 
            <div class="b" :style="searchBarFixed == true ? 'opacity: 0;' :'opacity: 1;'">
                <p class="u-img">
                    <a href="/member/point">
                        <img src="https://res.vmallres.com/nwap/20181015/staticm/img/personal/defaultface_user_after.png"> <!---->
                    </a>
                </p>
            </div>
        </section>


        <section class="m-property">
            <ul>
                <li>
                    <a href="/member/score/detail" class="">
                        <span class="m-icon">
                            <img src="https://res.vmallres.com/nwap/20181015/staticm/img/personal/wap_mine_score.png">
                        </span> 
                            <span class="m-title">积分</span> 
                            <span class="m-num">-- 分</span>
                    </a>
                </li>
                <li>
                    <a href="/member/coupon" class="">
                        <span class="m-icon">
                            <img src="https://res.vmallres.com/nwap/20181015/staticm/img/personal/wap_mine_coupon.png">
                        </span> 
                        <span class="m-title">优惠券</span> 
                        <span class="m-num">-- 张</span>
                    </a>
                </li>
                <li>
                    <a href="/voucher/detail" class="">
                        <span class="m-icon">
                            <img src="https://res.vmallres.com/nwap/20181015/staticm/img/personal/wap_mine_voucher.png">
                        </span> 
                        <span class="m-title">代金券</span> 
                        <span class="m-num">-- 元</span>
                    </a>
                </li>
            </ul>
        </section>


        <section class="m-menu m-order">
            <a href="/account/applogin?url=/personal">
                <header class="h">
                    <span>我的订单</span> 
                    <span class="fr">全部订单</span>
                </header>
            </a> 
            <ul class="my-row">
                <li>
                    <a href="/account/applogin?url=/personal">
                        <p class="m-icon">
                            <img src="https://res.vmallres.com/nwap/20181015/staticm/img/personal/wap_mine_waitpay.png"> <!---->
                        </p> 
                        <p class="m-title">
                            <span>待付款</span>
                        </p> <!---->
                    </a>
                </li>
                <li>
                    <a href="/account/applogin?url=/personal">
                        <p class="m-icon">
                            <img src="https://res.vmallres.com/nwap/20181015/staticm/img/personal/wap_mine_waitreceived.png"> <!---->
                        </p> 
                        <p class="m-title">
                            <span>待收货</span>
                        </p> <!---->
                    </a>
                </li>
                <li>
                    <a href="/account/applogin?url=/personal">
                        <p class="m-icon">
                            <img src="https://res.vmallres.com/nwap/20181015/staticm/img/personal/wap_mine_waitremark.png"> <!---->
                        </p> 
                        <p class="m-title">
                            <span>待评价</span>
                        </p> <!---->
                    </a>
                </li>
                <li>
                    <a href="/member/rma/index">
                        <p class="m-icon">
                            <img src="https://res.vmallres.com/nwap/20181015/staticm/img/personal/wap_mine_exchange.png"> <!---->
                        </p> 
                        <p class="m-title">
                            <span>退换货</span>
                        </p> <!---->
                    </a>
                </li>
                <li>
                    <a href="/account/applogin?url=/personal">
                        <p class="m-icon">
                            <img src="https://res.vmallres.com/nwap/20181015/staticm/img/personal/wap_mine_recycle.png"> <!---->
                        </p> 
                        <p class="m-title">
                            <span>回收单</span>
                        </p> <!---->
                    </a>
                </li>
            </ul>
        </section>


        <section class="m-menu m-vip">
            <header class="h">
                <span>我的Vmall</span>
            </header> 
            <ul class="my-row">
                <li>
                    <a href="/member/privilege">
                        <p class="m-icon">
                            <img src="https://res.vmallres.com/nwap/20181015/staticm/img/personal/wap_mine_privilege.png"> <!---->
                        </p> 
                        <p class="m-title">
                            <span>会员频道</span>
                        </p> <!---->
                    </a>
                </li>
                <li>
                    <a href="/account/applogin?url=/personal">
                        <p class="m-icon">
                            <img src="https://res.vmallres.com/nwap/20181015/staticm/img/personal/wap_mine_customer_auth.png"> <!---->
                        </p> 
                        <p class="m-title">
                            <span>实名认证</span>
                        </p> <!---->
                    </a>
                </li>
                <li>
                    <a href="/account/applogin?url=/personal">
                        <p class="m-icon">
                            <img src="https://res.vmallres.com/nwap/20181015/staticm/img/personal/wap_mine_address_manager.png"> <!---->
                        </p> 
                        <p class="m-title">
                            <span>收货地址</span>
                        </p> <!---->
                    </a>
                </li>
                <li>
                    <a href="/account/applogin?url=/personal">
                        <p class="m-icon">
                            <img src="https://res.vmallres.com/nwap/20181015/staticm/img/personal/wap_mine_easybuy.png"> <!---->
                        </p> 
                        <p class="m-title">
                            <span>优享购</span>
                        </p> <!---->
                    </a>
                </li>
            </ul> 
            <ul class="my-row">
                <li>
                    <a href="/account/applogin?url=/personal">
                        <p class="m-icon">
                            <img src="https://res.vmallres.com/nwap/20181015/staticm/img/personal/wap_mine_priority.png"> <!---->
                        </p> 
                        <p class="m-title">
                            <span>优购码</span>
                        </p> <!---->
                    </a>
                </li>
                <li>
                    <a href="/account/applogin?url=/personal">
                        <p class="m-icon">
                            <img src="https://res.vmallres.com/nwap/20181015/staticm/img/personal/wap_mine_booking.png"> <!---->
                        </p> 
                        <p class="m-title">
                            <span>预约记录</span>
                        </p> <!---->
                    </a>
                </li>
                <li>
                    <a href="/member/inviteGift">
                        <p class="m-icon">
                            <img src="https://res.vmallres.com/nwap/20181015/staticm/img/personal/wap_mine_gift.png"> <!---->
                        </p> 
                        <p class="m-title">
                            <span>邀请有礼</span>
                        </p> 
                        <p class="m-info">
                            <span>最高返利8%</span>
                        </p>
                    </a>
                </li>
                <li>
                    <a href="/account/applogin?url=/personal">
                        <p class="m-icon">
                            <img src="https://res.vmallres.com/nwap/20181015/staticm/img/personal/wap_mine_userCont.png"> <!---->
                        </p> 
                        <p class="m-title">
                            <span>帐号中心</span>
                        </p> <!---->
                    </a>
                </li>
            </ul> <!---->
        </section>


        <section class="m-ads">
            <p>
                <a href="https://msale.vmall.com/welcome.html" target="_blank" title="新人频道">
                    <img src="https://res.vmallres.com/pimages//sale/2018-07/20180713201600260.jpg" title="1440x320.jpg">
                </a>
            </p>
        </section>


        <section class="m-menu m-server">
            <header class="h">
                <span>我的服务</span>
            </header> 
            <ul class="my-row">
                <li>
                    <a href="https://coop.aihuishou.com/huawei?app=false">
                        <p class="m-icon">
                            <img src="https://res.vmallres.com/nwap/20181015/staticm/img/personal/wap_mine_recycleN.png"> <!---->
                        </p> 
                        <p class="m-title">
                            <span>以旧换新</span>
                        </p> <!---->
                    </a>
                </li>
                <li>
                    <a>
                        <p class="m-icon">
                            <img src="https://res.vmallres.com/nwap/20181015/staticm/img/personal/wap_mine_charge.png"> <!---->
                        </p> 
                        <p class="m-title">
                            <span>手机充值</span>
                        </p> <!---->
                    </a>
                </li>
                <li>
                    <a href="http://wechat.digitalcenter.cn/Huawei/Service/ServiceCenter">
                        <p class="m-icon">
                            <img src="https://res.vmallres.com/nwap/20181015/staticm/img/personal/wap_mine_servicecenter.png"> <!---->
                        </p> 
                        <p class="m-title">
                            <span>服务网点</span>
                        </p> <!---->
                    </a>
                </li>
                <li>
                    <a href="/help/selectstoreaddr.htm">
                        <p class="m-icon">
                            <img src="https://res.vmallres.com/nwap/20181015/staticm/img/personal/wap_mine_hnrstoreaddr.png"> <!---->
                        </p> 
                        <p class="m-title">
                            <span>线下门店</span>
                        </p> <!---->
                    </a>
                </li>
             </ul> 
            <ul class="my-row">
                <li>
                    <a href="/help/faq">
                        <p class="m-icon">
                            <img src="https://res.vmallres.com/nwap/20181015/staticm/img/personal/wap_mine_help_faq.png"> <!---->
                        </p> 
                        <p class="m-title">
                            <span>常见问题</span>
                        </p> <!---->
                    </a>
                </li>
                <li>
                    <a href="/feedback/manage">
                        <p class="m-icon">
                            <img src="https://res.vmallres.com/nwap/20181015/staticm/img/personal/wap_mine_feedback.png"> <!---->
                        </p> 
                        <p class="m-title">
                            <span>意见反馈</span>
                        </p> <!---->
                    </a>
                </li>
                <li>
                    <a href="/member/tcsProductIndex">
                        <p class="m-icon">
                            <img src="https://res.vmallres.com/nwap/20181015/staticm/img/personal/wap_mine_service_protocol.png"> <!---->
                        </p> 
                        <p class="m-title">
                            <span>补购保障</span>
                        </p> <!---->
                    </a>
                </li>
                <li>
                    <a href="/help/contactus">
                        <p class="m-icon">
                            <img src="https://res.vmallres.com/nwap/20181015/staticm/img/personal/wap_mine_contactus.png"> <!---->
                          </p> 
                        <p class="m-title">
                            <span>客服中心</span>
                        </p> <!---->
                    </a>
                </li>
            </ul>
        </section>


        <div>
            <section class="m-menu">
                <header class="h">
                    <span>我的消息</span>
                </header> 
                <div class="m-news" v-for="(item,index) in recommend" :key="index+30">
                    <header class="h-news">
                        <span>为你推荐</span> 
                        <time>{{item.sendTime}}</time> <!---->
                    </header> 
                    <div class="m-ads" v-if="item.message==-1">
                        <a href="">
                            <div class="m-n-img">
                                <span>
                                    <img :src="item.picUrl">
                                </span>
                            </div> <!---->
                        </a>
                    </div>
                    <div class="m-news-list m-news-list-rec" v-else>
                        <a href="">
                            <div class="m-n-img">
                                <span>
                                    <img :src="item.picUrl">
                                </span>
                            </div> 
                            <div class="m-n-cont">
                                <p class="m-n-title red"> {{item.title}}</p> 
                                <p class="m-n-promotion">{{item.message}}</p>
                            </div>
                        </a>
                    </div>
                </div>
            </section> 
            <section class="m-loading">
                <h3>
                     <span>
                         登录即可查看全部动态消息
                        <router-link to="login">现在登录&gt;</router-link>
                    </span>
                </h3>
            </section>
        </div>


        <div style="margin-bottom: 1.8rem;">
            <section class="bottom-area">
                <p class="login">
                    <a href="/account/applogin?url=/personal" rel="nofollow">
                        登录
                    </a> 
                    <a href="http://club.huawei.com/thread-1144534-1-1.html" rel="nofollow">
                        反馈
                    </a>
                </p> 
                <p class="touch">
                    <a href="/app/download">
                        <i></i> 
                        <span>客户端</span>
                    </a> 
                    <a href="/index" class="current">
                        <i></i> 
                        <span>触屏版</span>
                    </a> 
                    <a href="javascript:;">
                        <i></i> 
                        <span>电脑版</span>
                    </a>
                </p> 
                <p class="copyright clearfix">
                        <a id="policy-link" href="javascript:void(0)">
                            隐私政策
                        </a>
                        <a id="agreement-link" href="javascript:void(0)">
                            用户协议
                        </a>
                        <br>
                        <a href="http://www.miitbeian.gov.cn">
                            苏ICP备17040376号-6
                        </a>
                        <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32011402010009">
                        苏公网安备32011402010009号
                        </a>
                        <br>
                        <span>
                            Copyright © 2012-2018  VMALL.COM 版权所有
                        </span> 
                    </p>
                    
                
            </section>
        </div>
        <table-car></table-car>
    </div>
</template>

<script>
import axios from "axios"
import tableCar from "./home/table-car.vue";


export default {
    data(){
        return{
            recommend:[],
            searchBarFixed:false,
            login:false,
            loginName:''
        }
    },
    components: {
    tableCar
    },
    methods:{
        getRecommend(){
            axios.get('/static/caiw-json/hw.json').then((res)=>{
                if(res.data.code=="0"){
                    this.recommend=res.data.data.myRecommend;
                }
            }).catch((result)=>{
                console.log(result);
            })
        },
        handleScroll () {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            if (scrollTop >=1) {
            this.searchBarFixed = true
            } else {
            this.searchBarFixed = false
            }
        },
        ifLogin(){
            if(localStorage.getItem('userInfo')){
                this.loginName=localStorage.getItem('userInfo');
                this.login=true;
            }else{
                this.login=false;
            }
        }
    },
    mounted(){
        window.addEventListener('scroll', this.handleScroll);
        this.getRecommend();
        this.ifLogin();
    }
}
</script>

<style scoped>
 @import url(https://res8.vmallres.com/shopdc/cdn/modules-bf/yiqm/com/mb/css/swiper.min.css?v=20181106121156);

  @import url(https://res8.vmallres.com/shopdc/cdn/modules/common/mb/css/common.css?v=20181106000017);

address, caption, cite, code, dfn, em, th, var {
    font-style: normal;
    font-weight: 400;
}
.userinfo {
    height: 4.25rem;
    background-color: #fff;
    position: relative;
}
.userinfo .u-info {
    position: fixed;
    width: 100%;
    max-width: 720px;
    height: 2.25rem;
    z-index: 10;
    top: 0;
    transform: translate3d(0, 0, 0);
}
.userinfo .b {
    height: 3rem;
    margin-bottom: 1.25rem;
    background: url(https://res.vmallres.com/nwap/20181015/staticm/img/memberbg.6d8f899.jpg) no-repeat center top #bf1f1f;
    background-size: auto 3rem;
    position: relative;
}
.userinfo .u-info .u-bg {
    width: 100%;
    height: 100%;
    background: url(https://res.vmallres.com/nwap/20181015/staticm/img/memberInfoBG.ba8231f.jpg) no-repeat center top #bf1f1f;
    background-size: auto 2.25rem;
    opacity: 0;
}
.userinfo .u-state {
    position: absolute;
    height: 2.25rem;
    left: 0.8rem;
    top: 0;
    display: table;
}
.userinfo .u-info .shortcut {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 10;
}
.userinfo .u-login {
    vertical-align: middle;
    padding: 0.25rem 0;
}
.userinfo .u-login a {
    color: #fff;
    font-size: 0.6rem;
    line-height: 1.5;
    position: relative;
    top: -0.1rem;
}
.userinfo .u-login .u-m-vip {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.55rem;
    display: block;
    line-height: 1.3;
}
.userinfo .u-login .arrow {
    width: 0.6rem;
    height: 0.6rem;
    vertical-align: text-top;
    display: inline-block;
    background: url('../../static/hw/my-arrow.png') no-repeat center;
    background-size: 0.6rem 0.6rem;
}
.userinfo .u-accounts {
    vertical-align: middle;
    padding: 0.25rem 0;
}
.userinfo .u-accounts span {
    font-size: 0.75rem;
    color: #ffffff;
}
.userinfo .u-accounts .u-auth {
    opacity: 0.9;
    color: #fff;
    font-size: 0.4rem;
    line-height: 1.7;
    border: 1px solid rgba(255, 255, 255, 0.6);
    border-radius: 0.15rem;
    padding: 0 0.2rem;
    margin-left: 0.25rem;
    display: -webkit-inline-box;
    display: -moz-inline-box;
    display: -ms-inline-flexbox;
    display: inline-box;
    display: -webkit-inline-flex;
    display: inline-flex;
    -webkit-box-align: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -moz-align-items: center;
    align-items: center;
    position: relative;
    top: -0.15rem;
    background-color: rgba(255, 255, 255, 0.1);
}
.userinfo .u-accounts .u-auth em {
    background: url('../../static/hw/my-arrow.png') no-repeat right center;
    background-size: 0.25rem 0.25rem;
    padding-right: 0.3rem;
}
.userinfo .u-vip {
    position: relative;
    top: -0.2rem;
}
.userinfo .u-vip a {
    position: relative;
    display: inline-block;
    height: 0.9rem;
    border-radius: 0.5rem;
    background-color: #ffc63c;
    border-bottom: 0.05rem solid #da9d40;
    border-top: 0.05rem solid #fbd79e;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
}
.userinfo .u-vip span {
    font-size: 0.5rem;
    height: 100%;
    color: #934200;
    padding: 0 0.4rem;
    overflow: hidden;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -moz-align-items: center;
    align-items: center;
}
.userinfo .u-vip span .icon-benefit {
    width: 0.5rem;
    height: 0.5rem;
    display: block;
    background: url('../../static/hw/quanyi.png') no-repeat;
    background-size: 0.5rem 0.5rem;
    margin-right: 0.15rem;
}
.userinfo .u-vip span em {
    max-width: 5rem;
    height: 0.6rem;
    line-height: 0.6rem;
    padding-top: 0.11rem;
    -webkit-align-self: center;
    align-self: center;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
}
.userinfo .u-accounts .u-img {
    width: 1.2rem;
    height: 1.2rem;
    display: inline-block;
    margin-right: 0.4rem;
}
.userinfo .u-info .shortcut .icon-message {
    background: transparent url('../../static/hw/message.png') scroll no-repeat;
    position: relative;
    padding: 0.4rem 0.5rem;
    margin: 0 0.3rem;
    background-size: 1.2rem 1.2rem;
    background-position: center;
    height: 1.2rem;
    width: 1.2rem;
    display: inline-block;
}
.userinfo .b .u-img {
    background-color: #eaeaea;
    border-radius: 50%;
    float: left;
    width: 2.75rem;
    height: 2.75rem;
    position: absolute;
    bottom: -1.25rem;
    left: 50%;
    margin-left: -1.38rem;
    z-index: 10;
}
.userinfo .b .u-img img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    vertical-align: top;
    overflow: hidden;
}
.m-property {
    padding: 0.2rem 0;
    background-color: #fff;
    margin-bottom: 0.3rem;
    text-align: center;
}
.m-property ul {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -moz-align-items: center;
    align-items: center;
}
.m-property ul li {
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    line-height: 0.65rem;
}
.m-property ul li a {
    display: block;
    position: relative;
}

a {
    text-decoration: none;
    color: #333;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
a, input {
    background-clip: padding-box;
}
.m-property ul li a .m-icon {
    width: 1rem;
    height: 0.65rem;
}

.m-property ul li a span {
    display: inline-block;
}
.m-property ul li a .m-title {
    font-size: 0.55rem;
    color: #888;
}
.m-property ul li a .m-icon img {
    width: 100%;
    position: relative;
    top: -0.05rem;
}

img {
    border: 0;
    max-width: 100%;
    height: auto;
    vertical-align: top;
}
.m-property ul li a:after {
    content: "";
    width: 1px;
    height: 0.65rem;
    background-color: #eee;
    position: absolute;
    right: 0;
    top: 50%;
    margin-top: -0.35rem;
}
.m-property ul li a .m-num {
    font-size: 0.55rem;
    line-height: 1.8;
    color: #333;
    display: block;
}
.m-menu {
    background-color: #fff;
    margin-bottom: 0.3rem;
}
.m-order .my-row {
    padding: 0;
}

.my-row {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: box;
    display: -webkit-flex;
    display: flex;
    text-align: center;
    overflow: hidden;
    position: relative;
    padding: 0 0.25rem;
}
.m-menu .h {
    padding: 0 0.8rem;
    border-bottom: 1px solid #eaeaea;
    height: 2rem;
    line-height: 2rem;
    position: relative;
}
.m-menu .h span {
    font-size: 0.65rem;
    color: #333;
    position: relative;
    top: -0.1rem;
}
.m-menu .h span.fr {
    font-size: 0.55rem;
    line-height: 3;
    color: #888;
    padding-right: 0.55rem;
    background: url("../../static/hw/my-arrow.png") no-repeat right center;
    background-size: 0.55rem 0.55rem;
    position: absolute;
    right: 0.8rem;
    top: 0.1rem;
    display: block;
}
.my-row li {
    width: 25%;
}
.m-order .my-row li a {
    padding: 0.5rem 0;
}

.my-row li a {
    display: block;
    padding: 0.7rem 0;
}
.m-order .my-row .m-icon {
    width: 1.2rem;
    height: 1.2rem;
}

.my-row .m-icon {
    width: 1.5rem;
    height: 1.5rem;
    display: block;
    margin: 0 auto;
    position: relative;
}
.my-row .m-title {
    padding-top: 0.25rem;
}
.my-row .m-title span {
    display: block;
    font-size: 0.55rem;
    color: #333;
    line-height: 1;
}
.my-row .m-info span {
    display: block;
    font-size: 0.5rem;
    color: #888;
    line-height: 1.5;
}
.m-ads {
    margin-bottom: 0.3rem;
}
.m-ads a {
    display: block;
    text-align: center;
}
.m-menu {
    background-color: #fff;
    margin-bottom: 0.3rem;
}
.m-loading {
    padding: 1rem 2rem 1.95rem;
    text-align: center;
    overflow: hidden;
}
.m-loading h3 {
    display: block;
    width: 100%;
    height: 1px;
    border-bottom: 1px solid #d2d2d2;
}
.m-loading h3 span {
    color: #888;
    font-size: 0.65rem;
    line-height: 1.3;
    height: 0.7rem;
    padding: 0 0.75rem;
    white-space: nowrap;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
    position: relative;
    top: -0.6rem;
    background-color: #eaeaea;
}
.m-loading h3 span a {
    color: #888;
    position: relative;
}
.m-loading h3 span a:after {
    content: "";
    height: 1px;
    width: 100%;
    background-color: #888;
    position: absolute;
    bottom: 2px;
    left: 0;
}
h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
}
.m-news {
    border-bottom: 1px solid #eaeaea;
    padding: 0 0.8rem;
}
.m-news .h-news {
    height: 1.75rem;
    line-height: 1.75rem;
    position: relative;
}
.m-news .m-ads {
    padding-bottom: 0.5rem;
    margin-bottom: 0;
}

.m-ads {
    margin-bottom: 0.3rem;
}
.m-news .h-news span {
    font-size: 0.6rem;
    color: #333;
    position: relative;
    top: -0.1rem;
}
.m-news .h-news time {
    font-size: 0.5rem;
    color: #888;
    padding-left: 0.5rem;
    position: relative;
    top: -0.1rem;
}
.m-ads a {
    display: block;
    text-align: center;
}
.m-news .m-news-list {
    padding-bottom: 0.5rem;
}
.m-news .m-news-list a {
    display: table;
    width: 100%;
    height: 4rem;
    background-color: #f6f6f6;
    position: relative;
}
.m-news .m-news-list .m-n-img {
    width: 2.6rem;
    height: 100%;
    display: table;
    position: absolute;
    top: 0;
    left: 0.6rem;
}
.m-news .m-news-list .m-n-img span {
    display: table-cell;
    vertical-align: middle;
}
.m-news .m-news-list .m-n-cont {
    padding: .7rem 0.5rem .45rem 3.8rem;
    vertical-align: middle;
}
.m-news .m-news-list .m-n-title.red {
    color: #ca141d;
}

.m-news .m-news-list-rec .m-n-title {
    -webkit-line-clamp: 1;
}
.m-news .m-news-list .m-n-title {
    font-size: 0.65rem;
    color: #333;
    line-height: 1.3;
    padding-bottom: .05rem;
    max-height: 1.8rem;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.red {
    color: #CA151E;
}
.m-news .m-news-list-rec .m-n-promotion {
    -webkit-line-clamp: 2;
    padding-top: .15rem;
}

.m-news .m-news-list .m-n-promotion {
    font-size: 0.55rem;
    color: #888;
    line-height: 1.2;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}
.bottom-area {
    position: relative;
    bottom: 0;
    /* z-index: 19; */
    width: 100%;
    background-color: #ffffff;
    margin-top: 0.4rem;
    padding: 0 0.3rem;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
    text-align: center;
}
.bottom-area p.login {
    padding: 0.25rem 0;
    height: 2rem;
    display: block;
    font-size: 0;
}
.bottom-area p.touch {
    padding: 0.6rem 0;
    height: 3.1rem;
    text-align: center;
    display: block;
    font-size: 0;
}
.bottom-area p.login a {
    display: inline-block;
    width: 3.7rem;
    font-size: 0.7rem;
    height: 1.5rem;
    line-height: 1.5rem;
    position: relative;
}
.bottom-area p.login a:first-child:before {
    content: "";
    position: absolute;
    right: 0;
    top: 50%;
    margin-top: -0.25rem;
    height: 0.5rem;
    width: 0;
    border-right: 1px solid #eaeaea;
}
.bottom-area p.touch:before {
    content: "";
    display: block;
    width: 200%;
    position: relative;
    top: -0.5rem;
    border-top: 1px solid #eaeaea;
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
    -webkit-transform-origin: left top;
    transform-origin: left top;
}
.bottom-area p.touch a:first-child {
    margin-left: 0;
}

.bottom-area p.touch a {
    display: inline-block;
    margin-left: 1.8rem;
}
.bottom-area p.touch a:first-child i {
    background-image: url('../../static/hw/phone.png');
}

.bottom-area p.touch a i {
    display: block;
    height: 1.8rem;
    width: 1.8rem;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center center;
}
.bottom-area p.touch a span {
    display: block;
    font-size: 0.6rem;
    line-height: 1.3;
    color: #9b9b9b;
}
.bottom-area p.touch a:nth-child(2) i {
    background-image: url('../../static/hw/shou.png');
}
.bottom-area p.touch a:last-child i {
    background-image: url('../../static/hw/computer.png');
}
.bottom-area p.copyright {
    padding: 0.3rem 0 1.5rem 0;
    line-height: 1;
}
.clearfix:before, .clearfix:after {
    content: " ";
    display: table;
}
.clearfix:after, .clearfix:before {
    content: " ";
    display: table;
}
.bottom-area p.copyright a:first-child, .bottom-area p.copyright a:nth-child(2) {
    padding: 0 0.5rem;
    font-size: 0.6rem;
    line-height: 1.5;
}

.bottom-area p.copyright a, .bottom-area p.copyright span {
    font-size: 0.5rem;
    color: #9b9b9b;
    position: relative;
    padding: 0 0.2rem;
}
.bottom-area p.copyright a:first-child:before {
    content: "";
    position: absolute;
    right: 0;
    top: 50%;
    margin-top: -0.25rem;
    height: 0.5rem;
    width: 0;
    border-right: 1px solid #eaeaea;
}
</style>
