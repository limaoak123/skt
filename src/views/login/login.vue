<template>
    <div>
        <div class="login-wrap" v-show="showLogin">
            <h3>华为账号</h3>
            <p v-show="showTishi">{{tishi}}</p>
            <input type="text" placeholder="手机号/邮件地址" v-model="username">
            <input type="password" placeholder="密码" v-model="password">
            <div class="left">
                <a class="changelogintype medium" data-type="userAccountLogin" style="visibility: visible;">短信验证码登录</a>
            </div>
            <div class="right">
                <label><input name="Fruit" type="checkbox" value="" /><a>记住账号</a></label>
            </div>
            <button v-on:click="login">登录</button>
            <div class="aline">
                <p v-on:click="ToRegister" class="ToRegister">已有账号？马上登录</p>
                <p v-on:click="ToRegiste" class="repassword">忘记密码</p>
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

        <div class="register-wrap" v-show="showRegister">
            <h3>使用手机号注册</h3>
            <div class="choosecountry">
                <a class="c_left">国家/地区</a>
                <a class="c_right">中国 +86</a>
            </div>
            <p v-show="showTishi">{{tishi}}</p>
            <input class="l_height" type="text" placeholder="请输入用户名" v-model="newUsername">
            <input type="password" placeholder="密码" v-model="newPassword">
            <input type="password" placeholder="确认密码" v-model="newPassword">
            <div class="gray-tips-EMUI5 reg-tip-gray">
                <a>至少 8 个字符，不能含有空格。字母、数字、符号至少包含2种。</a>
            </div>
            <div class="wrapRegister-emptyBgLine"></div>
            <button v-on:click="register">注册</button>
            <div class="realine">
                <p v-on:click="ToLogin">已有账号？马上登录</p>
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


    .register-wrap h3{
        font-size: 18px;
        color: #191919;
        height: 50px;
        width:100%;
        line-height: 10px;
        background: #F0F0F0;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        border-top: 8px solid #FCFCFC;
        margin-bottom: 25px;
        font-weight:400;
    }
    .choosecountry{
        line-height:15px;
    }
    .choosecountry .c_left{
        float:left;
        color:#000;
        font-size:15px;
    }
    .choosecountry .c_right{
        float:right;
        color:#808080;
        font-size:13px;
    }
    .l_height{
        margin-top:65px;
    }
    .gray-tips-EMUI5 a{
        color: #808080;
        font-size: 13px;
        margin: 22px 0px;
        width: 95%;
        display: block;
    }
    .wrapRegister-emptyBgLine{
        height: 8px;
        width: 100%;
        background-color: #F2F2F2;
        margin-bottom:30px;
    }
    .realine p{
        font-size: 13px;
        margin-bottom: 16px;
        color: #005bba;
        font-size: 13px;
        font-weight: 500;
        text-decoration: none;
        text-align: center;
    }
</style>

<script>
    import axios from 'axios'
    export default{
        import {setCookie,getCookie} from '../../assets/js/cookie.js'
        data(){
            return{
                showLogin: true,
                showRegister: false,
                showTishi: false,
                tishi: '',
                username: '',
                password: '',
                newUsername: '',
                newPassword: ''
            
           
            }
        },
        mounted(){
             /*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/
        if(getCookie('username')){
            this.$router.push('/home')
        }
       },
        methods: {
        ToRegister(){
        this.showRegister = true
        this.showLogin = false
        },
        ToLogin(){
        this.showRegister = false
        this.showLogin = true
        },
        register(){
        if(this.newUsername == "" || this.newPassword == ""){
            alert("请输入用户名或密码")
        }else{
            let data = {'username':this.newUsername,'password':this.newPassword}
            this.$http.post('http://localhost/vueapi/index.php/Home/user/register',data).then((res)=>{
                console.log(res)
                if(res.data == "ok"){
                    this.tishi = "注册成功"
                    this.showTishi = true
                    this.username = ''
                    this.password = ''
                    /*注册成功之后再跳回登录页*/
                    setTimeout(function(){
                        this.showRegister = false
                        this.showLogin = true
                        this.showTishi = false
                    }.bind(this),1000)
                }
            })
        }
    },
        login(){
            if(this.username == "" || this.password == ""){
                alert("请输入用户名或密码")
            }else{
                let data = {'username':this.username,'password':this.password}
                /*接口请求*/
                this.$http.post('http://localhost/vueapi/index.php/Home/user/login',data).then((res)=>{
                    console.log(res)
                /*接口的传值是(-1,该用户不存在),(0,密码错误)，同时还会检测管理员账号的值*/
                if(res.data == -1){
                    this.tishi = "该用户不存在"
                    this.showTishi = true
                }else if(res.data == 0){
                    this.tishi = "密码输入错误"
                    this.showTishi = true
                }else if(res.data == 'admin'){
                /*路由跳转this.$router.push*/
                    this.$router.push('/main')
                }else{
                    this.tishi = "登录成功"
                    this.showTishi = true
                    setCookie('username',this.username,1000*60)
                    setTimeout(function(){
                        this.$router.push('/home')
                    }.bind(this),1000)
                }
            })
        }
        }
       }
    }



