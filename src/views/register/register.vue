<template>
            <div class="register-wrap">
            <h3>使用手机号注册</h3>
            <div class="choosecountry">
                <a class="c_left">国家/地区</a>
                <a class="c_right">中国 +86</a>
            </div>
            <input class="l_height" type="text" placeholder="请输入手机号" v-model="newUsername" @blur="regnewUsername">
            <p v-if="isnewUsername">请输入正确的手机号</p>
            <input type="password" placeholder="密码" v-model="newPassword" @blur="regnewPassword">
            <p v-if="isnewPassword">请输入6-20位非空密码</p>
            <input type="password" placeholder="确认密码" >
            <div class="gray-tips-EMUI5 reg-tip-gray">
                <a>至少 8 个字符，不能含有空格。字母、数字、符号至少包含2种。</a>
            </div>
            <div class="wrapRegister-emptyBgLine"></div>
            <button class="submit" @click="addUser">注册</button>
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
        // import {setCookie,getCookie} from '../../assets/js/cookie.js'
    export default{
        data () {
            return{
                newUsername: '',
                newPassword: '',
                isnewUsername: false,
                isnewPassword: false,
            }
        },
        methods: {
        addUser () {
            var newUsername = this.newUsername
            var newPassword = this.newPassword
           axios.post('./api/user/addUser',{
               newUsername: newUsername,
               newPassword: newPassword
           }).then((result) => {
               console.log(result);
                alert('注册成功');
           })
        },
        regnewUsername () {
            var reg = /^1[3578]\d{9}$/;
            if (!reg.test(this.newUsername)) {
                this.isnewUsername = true;
            } else {
                this.isPhone = false;
                axios.get('/api/user/onlyUser',{
                params: {
                    newUsername:this.newUsername
                },
                }).then((result) => {
                console.log(result);
                if (result.data.length > 0){
                    alert('该用户已注册')
          }
        })
      }
    },
        regnewPassword () {
            var reg = /^\S{6,20}$/;
            if (!reg.test(this.newPassword)) {
                this.isnewPassword = true;
            } else {
                this.isnewPassword = false;
            }
            },
      }
       
    }
    </script>
    