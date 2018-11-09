<template>
    <div style="background-color: rgb(194, 33, 42)">
        <!-- <router-link to='/my'>1111111111</router-link> -->
        <div class="J_mod mod-topnav topnav-244464">
    <!-- WAP页头导航 登录注册-->
            <div class="area">
                <a class="unlogin" href="javascript:;" :style="login== true ? 'display: none; background: rgba(255, 255, 255, 0.1);':'display: block; background: rgba(255, 255, 255, 0.1);'">
                    <img src="https://res.vmallres.com/pimages//sale/2018-02/20180227205926118.png">
                    <span>登录 | 注册</span>
                </a>
                <a class="login hide" href="javascript:;" :style="login== true ? 'display: block; background: rgba(255, 255, 255, 0.1);':'display: none; background: rgba(255, 255, 255, 0.1);'">
                    <img src="https://res.vmallres.com/pimages//sale/2018-02/20180227205926118.png" :style="login== true ? '':'display: none;'">
                    <span class="loginName">{{loginName}}</span>
                </a>
            </div>
            <div class="wrp" style="background-color:;">
                <img src="https://res2.vmallres.com/shopdc/pic/4fe69989-ee12-4ba1-b651-148380593b14.jpg"> 
            </div>
            <!-- 热点区 -->
            <div class="J_anchors">
                <a class="J_anchor anchor-hotList" href="" style="width:5.4em; height:1.7em; left:0.55em; top:0em;" target="_blank"></a>     
            </div>
    <!-- /WAP页头导航 -->
        </div>
        
        <div class="J_mod mod-pic" style="margin-top:0em;margin-bottom:0em;position: relative;">
    <!-- 图模块 -->
            <div class="pic-wrap">
                <img src="https://res6.vmallres.com/shopdc/pic/1ec26eeb-f5c9-401f-8b49-daa0cb0eedfb.jpg" alt="">
            </div>
                <!-- 热点区 -->
            <div class="J_anchors">
            </div>
    <!-- /图模块 -->
        </div>

        <div class="J_mod mod-pic" style="margin-top:0em;margin-bottom:0em;position: relative;">
    <!-- 图模块 -->
            <div class="pic-wrap">
                <img src="https://res4.vmallres.com/shopdc/pic/094e289d-1068-40c2-80b0-071c9af5eb2d.jpg" alt="">
            </div>
             <!-- 热点区 -->
            <div class="J_anchors">
                <a class="J_anchor anchor-hotList" href="" style="width:3.875em; height:10.825em; left:2.6em; top:1.075em;"></a>
                <a class="J_anchor anchor-hotList" href="" style="width:6.625em; height:4.025em; left:5.1em; top:11.775em;"></a>
                <a class="J_anchor anchor-hotList" href="" style="width:6.075em; height:4.025em; left:11.875em; top:11.775em;"></a>
                <a class="J_anchor anchor-hotList" href="" style="width:4.95em; height:4.05em; left:0em; top:11.75em;"></a>
                <a class="J_anchor anchor-hotList" href="" style="width:3.975em; height:10.625em; left:6.6em; top:1.1em;"></a>
                <a class="J_anchor anchor-hotList" href="" style="width:4.525em; height:10.65em; left:10.725em; top:1.1em;"></a>
            </div>
    <!-- /图模块 -->
        </div>
        
        <div class="J_mod mod-mobile-fixednav fixednav-244470">
    <!-- H5固定导航 -->
            <div class="mobileMod14-wrp" style="height:2.5em;">
                <nav class="mobileMod14 list_nav" style="height: 2.5em; position: relative; top: 0px;"  :style="searchBarFixed == true ? 'position:fixed;' :'position: relative;'">
                    <ul id="fixedNav" class="flex clearfix" style="height:2.5em;background:#5a018e url(https://res1.vmallres.com/shopdc/pic/539e7afd-9f54-4c6d-8d87-80dcfcf2e71c.jpg) no-repeat center center;background-size:100% auto;">
                        <li class="current" style="width:25%;height:2.5em;line-height:2.5em;" @click="jump(0)">
                            <a href="javascript:;" data-anchor="gps-1" style="font-size:0.8em;"></a>
                        </li>
                        <li style="width:25%;height:2.5em;line-height:2.5em;" class="current" @click="jump(1)">
                            <a href="javascript:;" data-anchor="gps-2" style="font-size:0.8em;"></a>
                        </li>
                        <li style="width:25%;height:2.5em;line-height:2.5em;" class="current" @click="jump(2)">
                            <a href="javascript:;" data-anchor="gps-3" style="font-size:0.8em;"></a>
                        </li>
                        <li style="width:25%;height:2.5em;line-height:2.5em;" class="current" @click="jump(3)">
                            <a href="javascript:;" data-anchor="gps-4" style="font-size:0.8em;"></a>
                        </li>
                    </ul>
                </nav>
            </div>
    <!-- /H5固定导航 -->
        </div>

        <div class="J_mod mod-pic" style="margin-top:0em;margin-bottom:0em;position: relative;">
    <!-- 图模块 -->
            <div class="pic-wrap">
                <img src="https://res7.vmallres.com/shopdc/pic/5419f934-285e-474c-a554-0e5471f50a88.jpg" alt="">
            </div>
            <!-- 热点区 -->
            <div class="J_anchors">
            </div>
    <!-- /图模块 -->
        </div>

        <div class="J_mod mod-mobile-coupons couponpic-244474">
    <!-- pic领券 -->
            <div class="mobileMod19-coupons-wrp" style="background:url('') no-repeat center center ;padding-top:0em; padding-bottom:0em;">
                <div class="mobileMod19-coupons">
                    <div class="J_anchors coupons clearfix">
                                            <!-- 券链接 -->
                        <a href="javascript:;"  class="J_anchor anchor-otherHotList" style="width:5.95rem;height:6.05rem;left:0.075rem;top:0rem;"></a>
                        <a href="javascript:;" class="J_anchor anchor-otherHotList" style="width:5.65rem;height:5.975rem;left:6.175rem;top:0.05rem;"></a>
                        <a href="javascript:;" class="J_anchor anchor-otherHotList" style="width:5.925rem;height:5.95rem;left:11.975rem;top:0rem;"></a>
                                <!-- 超链接 -->
                    </div>
                        <img src="https://res2.vmallres.com/shopdc/pic/31d5f3e8-994b-4173-ae39-0542d24bd7bb.jpg" alt="">
                </div>
            </div>
    <!-- /pic领券 -->
        </div>

        <div class="J_mod mod-mobile-coupons couponpic-244476">
    <!-- pic领券 -->
            <div class="mobileMod19-coupons-wrp" style="background:url('') no-repeat center center ;padding-top:0em; padding-bottom:0em;">
                <div class="mobileMod19-coupons">
                    <div class="J_anchors coupons clearfix">
                                            <!-- 券链接 -->
                        <a href="javascript:;" class="J_anchor anchor-otherHotList" style="width:5.425rem;height:5.75rem;left:0.525rem;top:0.15rem;"></a>
                        <a href="javascript:;" class="J_anchor anchor-otherHotList" style="width:5.375rem;height:5.725rem;left:6.375rem;top:0.2rem;"></a>
                        <a href="javascript:;" class="J_anchor anchor-otherHotList state-disable" style="width: 5.575rem; height: 5.75rem; left: 11.95rem; top: 0.15rem; padding-top: 54px;">已领完</a>
                                <!-- 超链接 -->
                    </div>
                        <img src="https://res8.vmallres.com/shopdc/pic/58f51eb2-c4c1-4b28-8123-1af60cf6773e.jpg" alt="">
                </div>
            </div>
    <!-- /pic领券 -->
        </div>

<!-- 年度旗舰 -->
        <div class="J_mod mod-pic" style="margin-top:0em;margin-bottom:0em;position: relative;">
    <!-- 图模块 -->
            <div id="gps-1" class="hrefs">

            </div>
            <div class="pic-wrap">
                <img src="https://res3.vmallres.com/shopdc/pic/9657319c-52fe-42d9-ab3d-c4668ee623f6.jpg" alt="">
            </div>
            <!-- 热点区 -->
            <div class="J_anchors">
            </div>
    <!-- /图模块 -->
        </div>

        <div class="J_mod mod-mobile-coupons couponpic-244480">
    <!-- pic领券 -->
            <div class="mobileMod19-coupons-wrp" style="background:url('') no-repeat center center ;padding-top:0em; padding-bottom:0.3em;">
                <div class="mobileMod19-coupons">
                    <div class="J_anchors coupons clearfix">
                                            <!-- 券链接 -->
                                <!-- 超链接 -->
                        <a href="https://m.vmall.com/product/10086885129494.html" class="J_anchor anchor-hotList" style="width:6.675rem;height:13.625rem;left:0rem;top:0rem;"></a>
                        <a href="https://m.vmall.com/product/10086211949427.html" class="J_anchor anchor-hotList" style="width:5.775rem;height:13.6rem;left:6.75rem;top:0rem;"></a>
                        <a href="https://m.vmall.com/product/10086393052224.html" class="J_anchor anchor-hotList" style="width:5.15rem;height:13.575rem;left:12.624998474121094rem;top:0rem;"></a>
                    </div>
                        <img src="https://res8.vmallres.com/shopdc/pic/e149969d-0ec6-4373-ab02-a36cd7d1a268.jpg" alt="">
                </div>
            </div>
    <!-- /pic领券 -->
        </div>

        <div class="J_mod mod-prohotone mod-coupons">
            <div class="qqkh-wp-full qqkh-top-pro-tab qqkh-tab-item c-" style="position:relative;background: ;background-size:100% auto;">    
                <div class="qqkh-pro-ads" style="background: initial">
                    <div class="qqkh-wp">
                        <div class="qqkh-row clearfix">
                            <div class="col-12" style="box-sizing: border-box !important;">
                                <div class="hotOne1 ">
                                    <div class="swiper-container">
                                        <div class="swiper-wrapper">
                                            <a href="" v-for="(item,index) in swiperList" class="swiper-slide hotOneItem swiper-slide-duplicate" :key="index">
                                                <div class="col-7" style="overflow: initial;position:relative">
                                                    <img style="max-height:4.3rem" :src="item.bannerUrl">
                                                </div>
                                                <div class="col-4">
                                                    <h1 style="margin-bottom: 0.15rem;">
                                                        {{item.bannerTit}}
                                                    </h1>
                                                    <h3 style="margin-bottom:0.1rem;height:0.6rem;">
                                                        {{item.bannerGn}}
                                                    </h3>
                                                    <div class="pro-price" style="text-align: left;">
                                                        <div class="p">
                                                            <span><i>￥</i>{{item.money}}<i>起</i></span>
                                                            <span class="get_coupons effect">{{item.whyShop}}</span>
                                                        </div>
                                                    </div>
                                                    <button style="margin-top: .5rem;">立即购买</button>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <i class="fa hotOneLeft swiper-button-prev"></i>
                                    <i class="fa hotOneRight swiper-button-next"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


<!-- 双十一抢购 -->
        <div class="J_mod mod-pic" style="margin-top:0em;margin-bottom:0em;position: relative;">
    <!-- 图模块 -->
            <div id="gps-2" class="hrefs"></div>
            <div class="pic-wrap">
                <img src="https://res5.vmallres.com/shopdc/pic/ea7a8fcd-a4df-4add-aa88-cca857bd5a00.jpg" alt="">
            </div>
            <!-- 热点区 -->
            <div class="J_anchors">
            </div>
    <!-- /图模块 -->
        </div>
        <div class="J_mod mod-mobile-coupons couponpic-244484" v-for="(item,index) in twoList" :key="index">
    <!-- pic领券  跳转详情页-->
            <div class="mobileMod19-coupons-wrp" style="background:url('') no-repeat center center ;padding-top:0em; padding-bottom:0em;">
                <div class="mobileMod19-coupons">
                    <div class="J_anchors coupons clearfix">
                        <a href="javascript:;" @click="routerTo(item.id)" class="J_anchor anchor-hotList" style="width:8.85rem;height:14.675rem;left:0rem;top:0.05rem;"></a>
                        <a href="" class="J_anchor anchor-hotList" style="width:9.025rem;height:14.725rem;left:8.975rem;top:0rem;"></a>
                    </div>
                    <img :src="item.picUrl" alt="">
                </div>
            </div>
    <!-- /pic领券 -->
        </div>

<!-- 超值巨惠 -->
        <div class="J_mod mod-pic" style="margin-top:0em;margin-bottom:0em;position: relative;">
    <!-- 图模块 -->
            <div id="gps-3" class="hrefs">

            </div>
            <div class="pic-wrap">
                <img src="https://res7.vmallres.com/shopdc/pic/7199ed84-5a78-444c-a5d0-5bc51db3fd33.jpg" alt="">
            </div>
            <!-- 热点区 -->
            <div class="J_anchors">
            </div>
    <!-- /图模块 -->
        </div>
        <div class="J_mod mod-mobile-coupons couponpic-244500">
    <!-- pic领券 -->
            <div class="mobileMod19-coupons-wrp" style="background:url('') no-repeat center center ;padding-top:0em; padding-bottom:0.5em;">
                <div class="mobileMod19-coupons">
                    <div class="J_anchors coupons clearfix">
                                            <!-- 券链接 -->
                        <a class="J_anchor anchor-otherHotList" style="width:5.5rem;height:5.9rem;left:0.5rem;top:0.375rem;"></a>
                        <a class="J_anchor anchor-otherHotList" style="width:5.525rem;height:5.9rem;left:6.3375rem;top:0.3533332824707031rem;"></a>
                        <a class="J_anchor anchor-otherHotList" style="width:5.45rem;height:6.05rem;left:12.049583435058594rem;top:0.2rem;"></a>
                                <!-- 超链接 -->
                    </div>
                    <img src="https://res4.vmallres.com/shopdc/pic/3584a327-8e53-4423-9314-efd02ee4d884.jpg" alt="">
                </div>
            </div>
    <!-- /pic领券 -->
        </div>
        
        <div class="J_mod mod-mobile-coupons couponpic-244484" v-for="(item,index) in chaozhi" :key="index+10">
    <!-- pic领券 -->
            <div class="mobileMod19-coupons-wrp" style="padding-top:0em; padding-bottom:0em;">
                <div class="mobileMod19-coupons">
                    <div class="J_anchors coupons clearfix">
                        <a href="" class="J_anchor anchor-hotList" style="width:8.85rem;height:14.675rem;left:0rem;top:0.05rem;"></a>
                        <a href="" class="J_anchor anchor-hotList" style="width:9.025rem;height:14.725rem;left:8.975rem;top:0rem;"></a>
                    </div>
                    <img :src="item.picUrl" alt="">
                </div>
            </div>
    <!-- /pic领券 -->
        </div>
        <!-- 点击 -->
        <div class="J_mod mod-siqmbfprdtab mod-siqmbfprdgoodlist mod-coupon-siq coupon-244508 mod-244508" style="margin-top: $tools.math.div($params.marginTop, 40)em;margin-bottom: $tools.math.div($params.marginBottom, 40)em">
            <div class="nav-container">
            <!--热门手机-->
                <div id="nav-4">
                    <div class="tab-box tab1">
                        <div class="tab-title-over">
                            <ul class="tab-title" style="background-color: #ff6600;">
                                <li v-for="(item,index) in Tabs" 
                                :key="index"
                                :class='{"act":dataNav==item.id}'
                                @click='dataNav=item.id'
                                style="width:20%;color:#000000">
                                    <i>{{item.name}}<em></em></i>
                                </li>
                            </ul>
                        </div>
                        <div v-if="dataNav=='computer'">
                            <div class="tab-container goods-list" v-for="(item, index) in mac" :key="index">
                                <div class="goods-item zq0" data-zq="zq0" style="margin-bottom: 0px;margin-top: 0.27em; ">
                                    <a data-track="2" href="">
                                        <div class="item-img">
                                            <img class="prodct-img" :src="item.picUrl">
                                        </div>
                                    </a>
                                    <div class="item-title" style="height: 1.2em;line-height: 1.2;">{{ item.title }}</div>
                                    <div class="item-desc" style="height: 1.4em;line-height: 1.4em;margin-top:0.52em">{{ item.gneng }}</div>
                                    <div class="item-price" style="font-size: 0.7rem;">
                                        <em style="font-size:0.55rem;height:0.75rem;line-height:0.75rem">活动价</em>
                                        {{item.price}}
                                        <span style="font-size: 0.4rem !important;">起</span>                            
                                    </div>
                                    <div class="item-buy">
                                        <div class="add-cart">
                                            <a style="line-height: 1.1rem;" skuid="777872533" data-track="3" data-sbomcode="2101010000414"><em style="background: url(https://res4.vmallres.com/shopdc/cdn/modules-bf/siqm/com/wap/img/car-icon.png);background-size: contain;width: .45rem;height: .45rem;"></em>加入购物车</a>
                                        </div>
                                        <div class="buy-now" style="display:block;">
                                            <a style="line-height: 1.1rem;border: 1px solid #d31f1f;" href="" >立即购买</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-else-if="dataNav=='erji'">
                            <div class="tab-container goods-list" v-for="(item, index) in erji" :key="index">
                                <div class="goods-item zq0" data-zq="zq0" style="margin-bottom: 0px;margin-top: 0.27em; ">
                                    <a data-track="2" href="">
                                        <div class="item-img">
                                            <img class="prodct-img" :src="item.picUrl">
                                        </div>
                                    </a>
                                    <div class="item-title" style="height: 1.2em;line-height: 1.2;">{{ item.title }}</div>
                                    <div class="item-desc" style="height: 1.4em;line-height: 1.4em;margin-top:0.52em">{{ item.gneng }}</div>
                                    <div class="item-price" style="font-size: 0.7rem;">
                                        <em style="font-size:0.55rem;height:0.75rem;line-height:0.75rem">活动价</em>
                                        {{item.price}}
                                        <span style="font-size: 0.4rem !important;">起</span>                            
                                    </div>
                                    <div class="item-buy">
                                        <div class="add-cart">
                                            <a style="line-height: 1.1rem;" skuid="777872533" data-track="3" data-sbomcode="2101010000414"><em style="background: url(https://res4.vmallres.com/shopdc/cdn/modules-bf/siqm/com/wap/img/car-icon.png);background-size: contain;width: .45rem;height: .45rem;"></em>加入购物车</a>
                                        </div>
                                        <div class="buy-now" style="display:block;">
                                            <a style="line-height: 1.1rem;border: 1px solid #d31f1f;" href="" >立即购买</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div v-else-if="dataNav=='zhineng'">
                            <div class="tab-container goods-list" v-for="(item, index) in zhineng" :key="index">
                                <div class="goods-item zq0" data-zq="zq0" style="margin-bottom: 0px;margin-top: 0.27em; ">
                                    <a data-track="2" href="">
                                        <div class="item-img">
                                            <img class="prodct-img" :src="item.picUrl">
                                        </div>
                                    </a>
                                    <div class="item-title" style="height: 1.2em;line-height: 1.2;">{{ item.title }}</div>
                                    <div class="item-desc" style="height: 1.4em;line-height: 1.4em;margin-top:0.52em">{{ item.gneng }}</div>
                                    <div class="item-price" style="font-size: 0.7rem;">
                                        <em style="font-size:0.55rem;height:0.75rem;line-height:0.75rem">活动价</em>
                                        {{item.price}}
                                        <span style="font-size: 0.4rem !important;">起</span>                            
                                    </div>
                                    <div class="item-buy">
                                        <div class="add-cart">
                                            <a style="line-height: 1.1rem;" skuid="777872533" data-track="3" data-sbomcode="2101010000414"><em style="background: url(https://res4.vmallres.com/shopdc/cdn/modules-bf/siqm/com/wap/img/car-icon.png);background-size: contain;width: .45rem;height: .45rem;"></em>加入购物车</a>
                                        </div>
                                        <div class="buy-now" style="display:block;">
                                            <a style="line-height: 1.1rem;border: 1px solid #d31f1f;" href="" >立即购买</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div v-else-if="dataNav=='dianyuan'">
                            <div class="tab-container goods-list" v-for="(item, index) in dianyuan" :key="index">
                                <div class="goods-item zq0" data-zq="zq0" style="margin-bottom: 0px;margin-top: 0.27em; ">
                                    <a data-track="2" href="">
                                        <div class="item-img">
                                            <img class="prodct-img" :src="item.picUrl">
                                        </div>
                                    </a>
                                    <div class="item-title" style="height: 1.2em;line-height: 1.2;">{{ item.title }}</div>
                                    <div class="item-desc" style="height: 1.4em;line-height: 1.4em;margin-top:0.52em">{{ item.gneng }}</div>
                                    <div class="item-price" style="font-size: 0.7rem;">
                                        <em style="font-size:0.55rem;height:0.75rem;line-height:0.75rem">活动价</em>
                                        {{item.price}}
                                        <span style="font-size: 0.4rem !important;">起</span>                            
                                    </div>
                                    <div class="item-buy">
                                        <div class="add-cart">
                                            <a style="line-height: 1.1rem;" skuid="777872533" data-track="3" data-sbomcode="2101010000414"><em style="background: url(https://res4.vmallres.com/shopdc/cdn/modules-bf/siqm/com/wap/img/car-icon.png);background-size: contain;width: .45rem;height: .45rem;"></em>加入购物车</a>
                                        </div>
                                        <div class="buy-now" style="display:block;">
                                            <a style="line-height: 1.1rem;border: 1px solid #d31f1f;" href="" >立即购买</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-else-if="dataNav=='jiaju'">
                            <div class="tab-container goods-list" v-for="(item, index) in jiaju" :key="index">
                                <div class="goods-item zq0" data-zq="zq0" style="margin-bottom: 0px;margin-top: 0.27em; ">
                                    <a data-track="2" href="">
                                        <div class="item-img">
                                            <img class="prodct-img" :src="item.picUrl">
                                        </div>
                                    </a>
                                    <div class="item-title" style="height: 1.2em;line-height: 1.2;">{{ item.title }}</div>
                                    <div class="item-desc" style="height: 1.4em;line-height: 1.4em;margin-top:0.52em">{{ item.gneng }}</div>
                                    <div class="item-price" style="font-size: 0.7rem;">
                                        <em style="font-size:0.55rem;height:0.75rem;line-height:0.75rem">活动价</em>
                                        {{item.price}}
                                        <span style="font-size: 0.4rem !important;">起</span>                            
                                    </div>
                                    <div class="item-buy">
                                        <div class="add-cart">
                                            <a style="line-height: 1.1rem;" skuid="777872533" data-track="3" data-sbomcode="2101010000414"><em style="background: url(https://res4.vmallres.com/shopdc/cdn/modules-bf/siqm/com/wap/img/car-icon.png);background-size: contain;width: .45rem;height: .45rem;"></em>加入购物车</a>
                                        </div>
                                        <div class="buy-now" style="display:block;">
                                            <a style="line-height: 1.1rem;border: 1px solid #d31f1f;" href="" >立即购买</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
        
        <div class="J_mod mod-moblie-swiper" style="margin-top:0.5em;margin-bottom:0.5em;">
    <!-- H5轮播图 -->
            <section class="pro-gallery" style="position:relative">
                <div class="swiper-container swiper-container-horizontal">
                    <ul style="width: 100%; transform: translate3d(-716px, 0px, 0px); transition-duration: 0ms;" class="swiper-wrapper">
                        <li v-for="(item,index) in banner2" style="width: 375px;" class="swiper-slide swiper-slide-duplicate" :key="index">
                            <a href="" target="_blank" data-track="true">
                                <img :src="item.bannerUrl" alt="" style="height:;">
                            </a>
                        </li>
                    </ul>
                </div>
                <nav class="swiper-pagination swiper-pagination-white swiper-pagination-clickable swiper-pagination-bullets">
                    <span class="swiper-pagination-bullet"></span>
                    <span class="swiper-pagination-bullet"></span>
                    <span class="swiper-pagination-bullet"></span>
                    <span class="swiper-pagination-bullet"></span>
                </nav>
            </section>
    <!--/H5轮播图-->
        </div>
<!-- 购机福利 -->
        <div class="J_mod mod-pic" style="margin-top:0em;margin-bottom:0em;position: relative;">
    <!-- 图模块 -->
            <div id="gps-4" class="hrefs"></div>
            <div class="pic-wrap">
                <img src="https://res4.vmallres.com/shopdc/pic/03d35e2f-eb35-462b-aee6-283c702292e7.jpg" alt="">
            </div>
            <!-- 热点区 -->
            <div class="J_anchors">
                <a class="J_anchor anchor-hotList" href="https://msale.vmall.com/huawei1111.html" style="width:5.575em; height:6.275em; left:0.525em; top:3.725em;" target="_blank"></a>
            </div>
    <!-- /图模块 -->
        </div>

        <div class="J_mod mod-pic" style="margin-top:0em;margin-bottom:0em;position: relative;">
    <!-- 图模块 -->
            <div class="pic-wrap">
                <img src="https://res5.vmallres.com/shopdc/pic/662e9644-1bc5-4120-a501-a36babed4ce1.jpg" alt="">
            </div>
            <!-- 热点区 -->
            <div class="J_anchors">
            </div>
    <!-- /图模块 -->
        </div>


        <div class="J_mod mod-pic" style="margin-top:0em;margin-bottom:0em;position: relative;">
    <!-- 图模块 -->
            <div class="pic-wrap">
                <img src="https://res8.vmallres.com/shopdc/pic/af638e74-b05a-47b5-8ee6-d9be72981f01.jpg" alt="">
            </div>
        <!-- 热点区 -->
            <div class="J_anchors">
                <a class="J_anchor anchor-hotList" href="https://msale.vmall.com/cjdzz.html" style="width:5.625em; height:6.3em; left:6.2em; top:0em;" ></a>
            </div>
    <!-- /图模块 -->
        </div>

        <div class="J_mod mod-pic" style="margin-top:0em;margin-bottom:0em;position: relative;">
    <!-- 图模块 -->
            <div id="gps-6" class="hrefs"></div>
            <div class="pic-wrap">
                <img src="https://res1.vmallres.com/shopdc/pic/c6d1ab60-0dbc-484f-947b-42a8a89ddc1e.jpg" alt="">
            </div>
            <!-- 热点区 -->
            <div class="J_anchors">
            </div>
    <!-- /图模块 -->
        </div>


        <div class="J_mod mod-pic" style="margin-top:0em;margin-bottom:0em;position: relative;">
    <!-- 图模块 -->
            <div id="gps-7" class="hrefs"></div>
            <div class="pic-wrap">
                <img src="https://res5.vmallres.com/shopdc/pic/a88ac05e-0fca-48a9-ba31-02a75746653c.jpg" alt="">
            </div>
            <!-- 热点区 -->
            <div class="J_anchors">
                <a class="J_anchor anchor-hotList" href="https://msale.vmall.com/11kj5.html" style="width:8.325em; height:11.125em; left:0.375em; top:3.75em;" target="_blank"></a>
                <a class="J_anchor anchor-hotList" href="https://msale.vmall.com/11kj2.html" style="width:8.5em; height:11.025em; left:9.025em; top:3.875em;" target="_blank"></a>
            </div>
    <!-- /图模块 -->
        </div>


        <div class="mobileMod19-coupons-wrp" style="background:url('') no-repeat center center ;padding-top:0em; padding-bottom:0em;">
            <div class="mobileMod19-coupons">
                <div class="J_anchors coupons clearfix">
                                            <!-- 券链接 -->
                    <a href="javascript:;" data-validate-student="false" class="J_anchor anchor-otherHotList" style="width:4.425rem;height:2.125rem;left:4.7rem;top:4.65rem;"></a>
                    <a href="javascript:;" class="J_anchor anchor-otherHotList" style="width:4.5rem;height:2.25rem;left:9.3rem;top:4.6rem;"></a>
                                <!-- 超链接 -->
                </div>
                <img src="https://res1.vmallres.com/shopdc/pic/b239920d-cbf3-4c61-9d4e-35dad015596c.jpg" alt="">
            </div>
        </div>




        <div class="J_mod mod-pic" style="margin-top:0em;margin-bottom:0em;position: relative;">
    <!-- 图模块 -->
            <div class="pic-wrap">
                <img src="https://res9.vmallres.com/shopdc/pic/597f11e1-fc45-4494-8b30-9e063b04bc89.jpg" alt="">
            </div>
        <!-- 热点区 -->
            <div class="J_anchors">
                <a class="J_anchor anchor-hotList" href="" style="width:5.025em; height:2.9em; left:2.95em; top:1.425em;" ></a>
                <a class="J_anchor anchor-hotList" href="0" style="width:5.225em; height:2.625em; left:9.825em; top:1.475em;"></a>
            </div>
    <!-- /图模块 -->
</div>

    </div>
</template>



<script>
import Swiper from "../../static/swiper-3.4.2.min.js"
import axios from "axios"


export default {
    data() {
        return {
            swiperList: [],
            twoList:[],
            dataNav:'computer',
            mac:[],
            erji:[],
            zhineng:[],
            dianyuan:[],
            jiaju:[],
            chaozhi:[],
            banner2:[],
            gouji:[],
            Tabs:[
                {
                    id: 'computer',
                    name: '笔记本/平板'
                }, {
                    id: 'erji',
                    name: '耳机'
                }, {
                    id: 'zhineng',
                    name: '智能穿戴'
                },{
                    id:'dianyuan',
                    name:'电源/充电器'
                },{
                    id:'jiaju',
                    name:'智能家居'
                }
            ],
            searchBarFixed:false,
            login:false,
            loginName:''
        }
    },
    methods: {
        getList(){
            axios.get("/static/caiw-json/hw.json").then((res) => {
                this.swiperList=res.data.data.sale.bannerUrl;
                this.twoList=res.data.data.oneone.contentUrl;
                this.mac=res.data.data.sale.clickUrl.mac;
                this.erji=res.data.data.sale.clickUrl.erji;
                this.zhineng=res.data.data.sale.clickUrl.zhineng;
                this.dianyuan=res.data.data.sale.clickUrl.dianyuan;
                this.jiaju=res.data.data.sale.clickUrl.jiaju;
                this.chaozhi=res.data.data.sale.contentUrl;
                this.banner2=res.data.data.banner2;
                this.gouji=res.data.data.gouji;
                }).catch((result)=>{
                    console.log(result);
                })
        },
        createSwiper() {
                var swiper = new Swiper('.swiper-container', {
                direction: 'horizontal',
                paginationClickable: true,
                pagination : '.swiper-pagination',
                observer:true,
                observeParents:true,
                loop: true,
                speed: 600,
                autoplay: 2000,
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                });
        },
        handleScroll () {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            if (scrollTop >682) {
            this.searchBarFixed = true;
            } else {
            this.searchBarFixed = false
            }
        },
        jump (index) {
            clearInterval(timer);
            let total = [1114,1672,4120,5896];
            var timer=null;
            timer = setInterval(function(e) {
				var e = e || event;
				if(document.documentElement.scrollTop >= total[index]) {
					document.documentElement.scrollTop = total[index];
					if(document.documentElement.scrollTop <= total[index]) {
						clearInterval(timer);
					}
				} else {
					document.documentElement.scrollTop = total[index];
					if(document.documentElement.scrollTop >= total[index]) {
						clearInterval(timer);
					}
				}
			}, 1);
        },
        routerTo(sid){
            // console.log(sid);
            this.$router.push({name:'xq',params:{id:sid}})
        },
        setLocalStorage(){
            localStorage.setItem('loginInfo', '1');
        },
        ifLogin(){
            if(localStorage.getItem('loginInfo')){
                this.loginName=localStorage.getItem('loginInfo');
                // console.log(localStorage.getItem('loginInfo'))
                this.login=true
            }else{
                this.login=false;
            }
        }
    },
    mounted(){
        window.addEventListener('scroll', this.handleScroll);
        this.getList();
        this.createSwiper();
        this.setLocalStorage();
        this.ifLogin();
    }
};
</script>


<style scoped>
  @import url(https://res8.vmallres.com/shopdc/cdn/modules/common/mb/css/common.css?v=20181106000017);

.mod-topnav {
  position: relative;
}
.J_mod {
  overflow: hidden;
}
img,
video {
  border: none;
  max-width: 100%;
  vertical-align: top;
  outline-width: 0;
}
.mod-topnav .area {
  position: absolute;
  z-index: 1;
  display: table;
  height: 1.1rem;
}
.topnav-244464 .area {
  top: 0.75rem;
  right: 0.75rem;
}
.topnav-244464 a {
  color: #fff;
}
.mod-topnav .login,
.mod-topnav .unlogin {
  border: 1px solid transparent;
  border-radius: 2rem;
  vertical-align: middle;
  padding: 0.15rem 0.4rem 0.1rem;
  font-size: 0.5rem;
  text-align: center;
  line-height: 1.2;
  min-width: 2rem;
  max-width: 9rem;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.mod-topnav .unlogin img,
.mod-topnav .login img {
  display: inline-block;
  width: 0.4rem;
  height: 0.5rem;
  vertical-align: middle;
  margin-right: 0.15rem;
}
.mod-pic {
  position: relative;
  width: 100%;
}
.mod-pic .pic-wrap {
  width: 100%;
}
.mobileMod14-wrp {
    position: relative;
    width: 100%;
    z-index: 19;
}
nav.mobileMod14 {
    position: absolute;
    width: 100%;
    max-width: 720px;
    overflow: hidden;
    top: 0;
}
.clearfix:before, .clearfix:after {
    content: "";
    display: table;
}
nav.mobileMod14 li {
    text-align: center;
    float: left;
}
.mod-mobile-coupons {
    position: relative;
}
.mod-mobile-coupons .anchor-otherHotList {
    line-height: 1.2em;
    box-sizing: border-box;
    font-size: 0.35rem;
    text-indent: 0;
    text-align: center;
    color: #666;
    font-weight: bold;
    text-decoration: none;
}   
.mod-mobile-coupons .anchor-otherHotList {
    line-height:1.2em;
    box-sizing:border-box;
    font-size:0.35rem;
    text-indent:0;
    text-align:center;
    color:#666;
    font-weight:bold;
    text-decoration:none;
}
.couponpic-244476 a.state-disable {
    background: url(//res.vmallres.com/pimages/sale/2018-04/20180425151152793.png) center center / auto 100% no-repeat;
    cursor:not-allowed;
} 
.mobileMod19-coupons img {
    width: 100%;
    display: block;
}
.couponpic-244480 a.state-disable {
    background: url(//res.vmallres.com/pimages/sale/2018-04/20180425151152793.png) center center / auto 100% no-repeat;
    cursor:not-allowed;
}
.state-empty-244502 { 
    background: url(https://res9.vmallres.com/shopdc/cdn/modules-bf/yiqm/couponcom/mb/img/btn4.png)  no-repeat;
}
.state-general-244502 { 
    background: url(https://res8.vmallres.com/shopdc/cdn/modules-bf/yiqm/couponcom/mb/img/btn2.png)  no-repeat;
}
.state-got-244502 { 
    background: url(https://res7.vmallres.com/shopdc/cdn/modules-bf/yiqm/couponcom/mb/img/btn1.png)  no-repeat;
}
.state-begin-244502 {
    background: url(https://res1.vmallres.com/shopdc/cdn/modules-bf/yiqm/couponcom/mb/img/btn3.png)  no-repeat;
}
.state-over-244502 { 
    background: url(https://res2.vmallres.com/shopdc/cdn/modules-bf/yiqm/couponcom/mb/img/btn5.png)  no-repeat;
}
.mod-prohotone {
    box-sizing: border-box;
}
.mod-prohotone .col-12 {
    width: 100%;
}
.mod-prohotone .qqkh-wp {
    margin: 0 auto;
    padding: 0 .5rem;
}
.mod-prohotone .qqkh-wp-full {
    width: 100%;
    margin: 0 auto;
    max-width: 750px;
    min-width: 320px;
}
.mod-prohotone .qqkh-top-pro-tab .qqkh-pro-ads {
    background: #F5F5F5;
}
.mod-prohotone .clearfix:after, .mod-prohotone .clearfix:before {
    content: '';
    display: block;
    height: 0;
    overflow: hidden;
}   
.mod-prohotone .qqkh-wp .qqkh-row {
    margin-left: -.25rem;
    margin-right: -.25rem;
} 
.mod-prohotone .qqkh-top-pro-tab .qqkh-pro-ads .hotOne1 {
    background: #fff;
    border: 1px solid #E7E7E7;
    display: block;
    padding: 0 .8rem;
    position: relative;
    margin-bottom: .5rem;
}
.mod-prohotone .qqkh-top-pro-tab .qqkh-pro-ads .hotOne1 .hotOneItem {
    margin: .8rem 0;
}

.mod-prohotone a {
    text-decoration: none;
} 
.mod-prohotone .col-7 {
    overflow: hidden;
    max-height: 4.3rem;
    width: 58.33333333%;
}
.mod-prohotone .qqkh-top-pro-tab .qqkh-pro-ads .hotOne1 img {
    width: 88%;
} 
.mod-prohotone .col-4 {
    width: 33.33333333%;
} 
.mod-prohotone .qqkh-top-pro-tab .qqkh-pro-ads .hotOne1 .hotOneItem h1 {
    font-size: .65rem;
    font-weight: 400;
    font-family: Arial,Helvetica,sans-serif,'Lucida Grande',Verdana;
    color: #333;
    margin-bottom: .35rem;
    margin-top: 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}   
.mod-prohotone .qqkh-top-pro-tab .qqkh-pro-ads .hotOne1 .hotOneItem h3 {
    font-size: .6em;
    color: #868686;
    margin-bottom: .25rem;
    margin-top: 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: normal;
    /* overflow: hidden; */
}
.mod-prohotone .qqkh-top-pro-tab .qqkh-pro-ads .pro-price {
    text-align: center;
    position: relative;
}
.mod-prohotone .qqkh-top-pro-tab .qqkh-pro-ads .hotOne1 .hotOneItem button {
    margin-top: .35rem;
    font-size: .7rem;
    background: #C81118;
    padding: .1rem 1rem;
    border: 0;
    border-radius: .75rem;
    display: inline-block;
    color: #FDD73F;
}
button, input {
    font-family: inherit;
    font-size: 100%;
    border: 0 none;
    outline: none;
}
.mod-prohotone .qqkh-top-pro-tab .qqkh-pro-ads .pro-price .p {
    margin-right: -.38rem;
    font-size: .75rem;
    color: #C61118;
    margin-bottom: 0;
    vertical-align: middle;
}
.mod-prohotone .qqkh-top-pro-tab .qqkh-pro-ads .pro-price .p span:nth-child(1) {
    font-size: .75rem;
}

.mod-prohotone .qqkh-top-pro-tab .qqkh-pro-ads .pro-price .p span {
    font-size: .55rem;
    vertical-align: middle;
}
.mod-prohotone .get_coupons {
    background: #C81118;
    color: #fff;
    border-radius: 5px;
    font-size: .4rem;
    text-align: center;
    text-decoration: none;
    padding: .15rem .2rem;
}
.mod-prohotone .effect {
    text-decoration: none;
    transition: all 1s cubic-bezier(.175,.885,.32,1) 0s;
}
.mod-prohotone .qqkh-top-pro-tab .qqkh-pro-ads .pro-price .p span i {
    font-size: .45rem;
    font-style: normal;
}
.mod-prohotone .qqkh-top-pro-tab .qqkh-pro-ads .hotOne1 .hotOneRight {
    position: absolute;
    right: .2rem;
    top: 50%;
    transform: translateY(-50%);
    width: .5rem;
    height: 1rem;
    background-image: url("../../static/hw/right.png");
    background-size: .5rem 1rem;
    z-index: 2;
}
.mod-prohotone .qqkh-top-pro-tab .qqkh-pro-ads .hotOne1 .hotOneLeft {
    position: absolute;
    left: .2rem;
    top: 50%;
    transform: translateY(-50%);
    width: .5rem;
    height: 1rem;
    background-image: url("../../static/hw/left.png");
    background-size: .5rem 1rem;
    z-index: 2;
}
.mod-prohotone .col-1, .mod-prohotone .col-10, .mod-prohotone .col-11, .mod-prohotone .col-12, .mod-prohotone .col-2, .mod-prohotone .col-3, .mod-prohotone .col-4, .mod-prohotone .col-5, .mod-prohotone .col-6, .mod-prohotone .col-7, .mod-prohotone .col-8, .mod-prohotone .col-9 {
    float: left;
    padding: 0 .25rem;
}
.mod-244508 .nav-container{
    background-color: #c2212a !important;
    padding-top:0.175em;
    padding-bottom: 0.25em;
}

.mod-244508 .tab-title li.act i{
    background-color: #ffffff;
}

.mod-244508 .tab-title li.act i em{
    border-top-color: #ffffff;
}

.mod-244508 .tab-box .tab-title li:after{
    background: url() center no-repeat;
}

.coupon-244508 .state-empty { 
    background: url(https://res2.vmallres.com/shopdc/cdn/modules-bf/siqm/com/wap/img/empty.png)  center center no-repeat /auto 100%;
    cursor:not-allowed !important;
}
.coupon-244508 .state-got { 
    background: url(https://res8.vmallres.com/shopdc/cdn/modules-bf/siqm/com/wap/img/got.png)  center center no-repeat /auto 100%;
    cursor:not-allowed !important;
}
.coupon-244508 .state-begin {
    background: url(https://res1.vmallres.com/shopdc/cdn/modules-bf/siqm/com/wap/img/begin.png)  center center no-repeat /auto 100%;
    cursor:not-allowed !important;
}
.coupon-244508 .state-over { 
    background: url(https://res7.vmallres.com/shopdc/cdn/modules-bf/siqm/com/wap/img/over.png)  center center no-repeat /auto 100%;
    cursor:not-allowed !important;
}
.mod-siqmbfprdtab .tab-box .tab-title {
    height: 1.25rem;
    font-size: .5em;
}
.mod-siqmbfprdtab .tab-box .tab-container {
    margin-top: .4rem;
}
ol, ul {
    list-style: none;
}
html, body, footer, header, section, ul, ol, li, p {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
}
user agent stylesheet
ul, menu, dir {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
}
.mod-siqmbfprdtab .tab-box .tab-title li:first-child:nth-last-child(5), .mod-siqmbfprdtab .tab-box .tab-title li:first-child:nth-last-child(5)~li {
    width: 20%;
}

.mod-siqmbfprdtab .tab-box .tab-title li {
    height: 1.25rem;
    line-height: 1.25rem;
    float: left;
    text-align: center;
    font-weight: 500;
    color: #fff;
    position: relative;
}
i, cite, em, var, address, dfn {
    font-style: italic;
}

.mod-siqmbfprdtab .tab-box .tab-title li.act i {
    height: 1.4rem;
    line-height: 1.25rem;
}



.mod-siqmbfprdtab .tab-box .tab-title li i {
    display: block;
    position: absolute;
    width: 100%;
    height: 1.25rem;
    line-height: 1.25rem;
    top: -.075em;
    font-style: normal;
}
.mod-siqmbfprdgoodlist .goods-list .goods-item {
    width: 8.6em;
    padding: .7em;
    background: #fff;
    text-align: center;
    float: left;
    margin-left: .27em;
    margin-bottom: .27em;
    position: relative;
}
.mod-siqmbfprdgoodlist .goods-list * {
    box-sizing: border-box;
    text-decoration: none;
}
.mod-siqmbfprdgoodlist .goods-list .goods-item .item-title {
    margin-top: 1.3em;
    font-size: .6em;
    height: .95833333em;
    line-height: .95833333em;
    color: #333;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.mod-siqmbfprdgoodlist .goods-list .goods-item .item-desc {
    font-size: .45em;
    height: .94444444em;
    line-height: .94444444em;
    color: #898989;
    margin-top: .72222222em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.mod-siqmbfprdgoodlist .goods-list .goods-item .item-price {
    font-size: .6rem;
    color: #d31f1f;
    margin-top: 5px;
}
.mod-siqmbfprdgoodlist .goods-list .goods-item .item-img {
    width: 100%;
    height: 6.875em;
}
.mod-siqmbfprdgoodlist .goods-list .goods-item .item-img img {
    width: 98%;
}
.mod-siqmbfprdgoodlist .goods-list .goods-item .item-price em {
    display: inline-block;
    font-size: .4rem;
    color: #fff;
    padding: 0 .5em;
    border-radius: .8em;
    font-style: normal;
    background-color: #d31f1f;
    vertical-align: middle;
    margin-right: 4px;
    margin-top: -.35em;
}
.mod-siqmbfprdgoodlist .goods-list .goods-item .item-buy .add-cart {
    float: left;
    width: 50%;
    color: #E60041;
    border-right: 0;
    text-align: center;
}
.mod-siqmbfprdgoodlist .goods-list .goods-item .item-buy .add-cart a {
    display: block;
    border: 1px dashed #d31f1f;
    height: 1.1rem;
    line-height: 1.025rem;
    font-size: .45em;
    color: #E60041;
}
.mod-siqmbfprdgoodlist .goods-list .goods-item .item-buy .add-cart a em {
    display: inline-block;
    width: .88888889em;
    height: .88888889em;
    background-size: 100%;
    vertical-align: -.025rem;
    margin-right: .125rem;
}
.mod-siqmbfprdgoodlist .goods-list .goods-item .item-buy .buy-now {
    float: left;
    width: 50%;
}
.mod-siqmbfprdgoodlist .goods-list .goods-item .item-buy .buy-now a {
    display: block;
    height: 1.1rem;
    line-height: 1.1rem;
    font-size: .45em;
    font-weight: 500;
    background: #d31f1f;
    text-align: center;
    color: #fff;
}
.mod-siqmbfprdgoodlist .goods-list .goods-item .item-coupon {
    position: absolute;
    line-height: 1.6em;
    background-size: 100%;
    right: .3em;
    color: #fff;
    text-align: left;
    font-weight: 700;
    padding-left: .3em;
}

.tab-box .tab-title li i em {
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    bottom: -.325em;
    left: 50%;
    margin-left: -.212em;
    border-top: .425em solid transparent;
    border-right: .425em solid transparent;
    border-left: .425em solid transparent;
}
.mod-244508 .tab-box .tab-title li:after {
    background: url() center no-repeat;
}
.mod-siqmbfprdtab .tab-box .tab-title li:after {
    display: block;
    content: ' ';
    width: 3px;
    height: 1.2rem;
    position: absolute;
    right: 0;
    top: .1em;
}
.pro-gallery nav {
    position: absolute;
    right: .4em;
    bottom: .4em;
    z-index: 1;
}

</style>

