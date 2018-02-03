<template>
  <div class="register">
    <header>
      <div class="box">
        <div class="top">
            <a href=""></a>
          <div class="res">
            <a href="">登录</a>
          </div>
        </div>
        <div class="logo">
          <img src="../assets/img/logo.png"/>
        </div>
        <div class="ll">
          <ul>
            <li @click="changeMethods1()"><a href="javascript:;">欢迎您前来注册</a><i class="triangle" ></i></li>
          </ul>
        </div>
      </div>
    </header>
    <!--用户名密码-->
    <div class="profession">
      <div class="formbox">
        <form action="" method="post" class="user">
          <div>
            <ul class="mform">
              <li>
                <span class="iconfont icf">&#xe600;</span>
                <input type="text" v-model="username" placeholder="注册用户名" />
              </li>
            </ul>
          </div>
          <div>
            <ul class="mform">
              <li>
                <span class="iconfont icf">&#xe61b;</span>
                <input type="text" v-model="psw" placeholder="注册用输入密码" />
              </li>
            </ul>
          </div>
        </form>
      </div>
      <!--忘记密码-->
      <div class="forgetpsw">
        <a href="">忘记密码？</a>
        <div class="clear" style="clear: both;"></div>
      </div>
      <!--注册按钮-->
      <div class="registerbut" @click="regist()"><a href="javascript:;">注 册</a></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'register',
  data () {
    return {
      username: '',
      psw: ''
    }
  },
  methods: {
    regist: function () {
      axios.post('/api/register', {
        username: this.username,
        psw: this.psw
      })
        .then(function (res) {
          alert(res.data.message)
          if (res.data.code === 1) {
            location.href = '/#/login'
          }
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="stylus" scoped>
.box
    background: url(../assets/img/log.png);
    background-size: 100% 100%

  .top
    height: 1rem;
    line-height: 1rem;
    position: relative;
    padding: 0 1em;

  .top>a
    display: block;
    width: 22px;
    height: 20px;
    position: absolute;
    margin-top: 16px;
    background: url(../assets/img/lt.png) no-repeat;
    background-size: 12px 17px;

  .top .res
    right: 10px;
    position: absolute;
    top: 0;

  .res>a
    color: #fff;

  .logo
    padding: 1em 0 2em 0;

  .logo img
    display: block;
    margin: auto;
    width: 20%;

  .ll
    background-color: rgba(255,255,255,0.3);

  .ll ul::before
    display: table;
    content: " ";
    clear: both;

  .ll ul::after
    display: table;
    content: " ";
    clear: both;

  .ll ul li
    width: 100%;
    text-align: center;
    height: 44px;
    line-height: 44px;
    position: relative;

  .ll ul li a
    font-size: 20px;
    color: #fff;
    display: block;
    text-shadow: 5px -2px 2px green;
  .triangle
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #fff;
    position: absolute;
    bottom: 0px;
    left: 0;
    right: 0;
    margin: auto;
    display: block;

  .profession
    background: white;

  .formbox
    background: #fff;
    border-radius: 0.5em;
    margin: 0em 4% 1em 4%;
    padding: 0 1.6%;

  .mform li
    border-bottom: #e2e2e2 solid 1px;
    padding: 12px 0 12px 30px;
    position: relative;

  .icf
    float: left;
    display: inline;
    width: 17px;
    height: 21px;
    margin: 3px 0 0 -25px;
    color: #666;

  .mform li input
    display: block;
    height: 21px;
    width: 100%;
    font-size: 15px;
    border: none;
    padding: 0px;
    color: #999;
    font-family: "Microsoft Yahei",tahoma,arial;
    outline: none;

  .forgetpsw
    padding-left: 2em;
    padding-right: 2em;
    font-size: 0.2rem;

  .forgetpsw a
    color: #898989;
    font-size: 1.4em;
    float: right;

  .registerbut
    padding-top: 0.5em;
    text-align: center;

  .registerbut a
    display: block;
    letter-spacing: 5px;
    margin: 0 4%;
    border-radius: 5px;
    background: #2ec975;
    font-size: 15px;
    padding: .6em 0;
    text-align: center;
    color: #fff;
</style>
