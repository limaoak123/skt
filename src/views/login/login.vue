<template>
    <div>
        <div class="login-wrap">
            <h3>华为账号</h3>
            <input type="text" placeholder="手机号/邮件地址" v-model="username">
            <input type="password" placeholder="密码" v-model="password">
            <div class="left">
                <a class="changelogintype medium" data-type="userAccountLogin" style="visibility: visible;">短信验证码登录</a>
            </div>
            <div class="right">
                <label><input name="Fruit" type="checkbox" value="" /><a>记住账号</a></label>
            </div>
            <button class="submit" @click="sub">登录</button>
            <div class="aline">
                <p><router-link to="register">没有账号？马上注册</router-link></p>
                <p class="repassword">忘记密码</p>
            </div>
            <div class="smallpicture">
                <img src="https://hwid1.vmall.com/CAS/up/idmw_rss_23/css/mobile/standard_rss/images/wap_qq_emui9.png?cas20180928">
                <img src="https://hwid1.vmall.com/CAS/up/idmw_rss_23/css/mobile/standard_rss/images/wap_alipay_emui9.png?cas20180928">
            </div>
            <div class="copy">
                <p class="copy_more">更多</p>
                <p class="copy_tip">继续访问即代表您已同意<a>华为商城服务协议</a>和<a>华为隐私政策</a></p>
            </div>
        </div>
    </div>

</template>

<style>

    .login-wrap{
        text-align:center;
        }
    .login-wrap h3{
        font-size:24px;
        font-weight:400;
    }
    input{
        display:block; 
        width:302px; 
        height:40px; 
        line-height:40px; 
        margin:0 auto; 
        margin-bottom: 10px; 
        outline:none; 
        border:none; 
        padding:10px; 
        box-sizing:border-box;
        border-bottom:1px solid #B3B3B3;
        
        }
    input::-webkit-input-placeholder{
        font-size:15px;
        color:#B3B3B3;
    }
    .medium{
        font-weight:500;
    }
    .left{
        text-align:left;
    } 
    .changelogintype{
        visibility: hidden;
        color: #005BBA;
        line-height: 24px;
        text-decoration: none;
        font-size:13px;
    }
    .right{
        text-align:right;
        margin:-40px 0px 20px 0px;
    }
    .right a{
        display:block;
        margin-top:-20px;
        float:right;
        line-height:17px;
        font-size:13px;
    }
    .right input{
        width:20px;
        height:20px;
        background:#FFFFFF;
        margin:18px 0px 0px 222px;
    }
    p{
        color:red;
        }
    button{    
        padding: 0 8px;
        margin: 0 auto;
        background: #007dff;
        border-radius: 4px;
        font-size: 15px;
        color: #fff;
        height: 32px;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        justify-content: center;
        -webkit-box-pack: center;
        width: 62%;
        margin: auto;
        padding: 0 16px;
        opacity: 0.3;
        outline:none;
        border:none;
        }
    .aline{
        margin-bottom: 24px;
        text-align: center;
        justify-content: center;
        -webkit-box-pack: center;
        margin: 0;
        padding: 0;
        line-height: 1.3;
        display:block;
    }
    .aline p{
        font-size: 13px;
        margin-bottom: 16px;
        color: #005bba;
        font-size: 13px;
        font-weight: 500;
        text-decoration: none;
        text-align: center;
    }
    .smallpicture{
        text-align: center;
        position: relative;
        margin:40px 0px 24px 0px;
    }
    .smallpicture img{
        width: 40px;
        height: 40px;
        max-width: 100%;
        letter-spacing:50px;
    }
    .copy .copy_more{
        color: #005bba;
        font-size: 13px;
        font-weight: 500;
    }
    .copy .copy_tip{
        font-size: 10px;
        color: #888;
    }
    .copy .copy_tip a{
        font-size: 10px;
        color: #267eff;
        line-height: 1px;
        position: relative;
        text-decoration:underline;
    }
    span{
        cursor:pointer;
        }
    span:hover{
        color:#41b883;
        }


    
</style>

<script>
        import axios from 'axios'
        import cookies from 'vue-cookies'
        // import {setCookie,getCookie} from '../../assets/js/cookie.js'
    export default{
        data () {
            return {
                username: '',
                password: '',                      
            }
        },
        methods: {
        sub () {
            var username = this.username;
            var password = this.password;
            console.log(username,password)
           axios.post('./api/user/login',{
               username: username,
               password: password
           }).then((result) => {
               if(result.data.code == 100){
                   console.log(result);
                   var userInfo = result.data.data.username
                   localStorage.setItem('username',userInfo);
                   console.log(localStorage.getItem('username'));
                //    alert('登录成功');
                this.$router.push({name: 'home'})
               }
           })
        },
    
       }
    }
    </script>



