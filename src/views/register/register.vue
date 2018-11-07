<template>
            <div class="register-wrap">
            <h3>使用手机号注册</h3>
            <p v-show="showTishi">{{ tishi }}</p>
            <div class="choosecountry">
                <a class="c_left">国家/地区</a>
                <a class="c_right">中国 +86</a>
            </div>
            <input class="l_height" type="text" placeholder="请输入用户名" v-model="newUsername">
            <input type="password" placeholder="密码" v-model="newPassword">
            <input type="password" placeholder="确认密码" >
            <div class="gray-tips-EMUI5 reg-tip-gray">
                <a>至少 8 个字符，不能含有空格。字母、数字、符号至少包含2种。</a>
            </div>
            <div class="wrapRegister-emptyBgLine"></div>
            <button click="addUser">注册</button>
            <div class="realine">
                <p><router-link to="login">已有账号？马上登录</router-link></p>
            </div>
        </div>
</template>
<style>
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
        import {setCookie,getCookie} from '../../assets/js/cookie.js'
    export default{
        data () {
            return{
                showTishi: false,
                newUsername: '',
                newPassword: '',
                tishi: '', 
            }
        },
        // mounted(){
        //      /*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/
        // if(getCookie('username')){
        //     this.$router.push('/home')
        // }
      // }，
        methods: {
        addUser () {
            var newUsername = this.newUsername
            var newPassword = this.newPassword
           axios.post('./api/user/addUser',{
               newUsername: newUsername,
               newPassword: newPassword
           }).then((result) => {
               console.log(result);
           })
        },
        register(){
        if(this.newUsername  == "" || this.newPassword  == ""){
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
                        this.showTishi = false
                    }.bind(this),1000)
                }
            })
        }
    },
       
       }
    }