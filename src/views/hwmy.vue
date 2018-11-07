<template>
    <div>


        <section class="userinfo">
            <div class="u-info">
                <p class="u-bg" style="opacity: 0;"></p> 
                <div class="u-state">
                    <p class="u-login" style="display: block;">
                        <a href="/account/applogin?url=/personal">
                        登录 / 注册
                            <i class="arrow"></i>
                        </a> 
                        <a href="/account/applogin?url=/personal" class="u-m-vip" style="display: block;">享受更多会员权益</a>
                    </p>
                </div> 
                <section class="shortcut">
                    <a class="icon-message"></a>
                </section>
            </div> 
            <div class="b" style="opacity: 1;">
                <p class="u-img">
                    <a href="/member/point">
                        <img src="https://res.vmallres.com/nwap/20181015/staticm/img/personal/defaultface_user_after.png"> <!---->
                    </a>
                </p>
            </div>
        </section>


        <section class="m-property"><ul><li><a href="/member/score/detail" class=""><span class="m-icon"><img src="https://res.vmallres.com/nwap/20181015/staticm/img/personal/wap_mine_score.png"></span> <span class="m-title">积分</span> <span class="m-num">-- 分</span></a></li><li><a href="/member/coupon" class=""><span class="m-icon"><img src="https://res.vmallres.com/nwap/20181015/staticm/img/personal/wap_mine_coupon.png"></span> <span class="m-title">优惠券</span> <span class="m-num">-- 张</span></a></li><li><a href="/voucher/detail" class=""><span class="m-icon"><img src="https://res.vmallres.com/nwap/20181015/staticm/img/personal/wap_mine_voucher.png"></span> <span class="m-title">代金券</span> <span class="m-num">-- 元</span></a></li></ul></section>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
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
</style>
