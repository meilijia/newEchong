<template>
  <div class="login">
    <header>
      <div class="box">
        <div class="top">
            <a href=""></a>
          <div class="res">
            <a href="">注册</a>
          </div>
        </div>
        <div class="logo">
          <img src="../../assets/img/logo.png"/>
        </div>
        <div class="ll">
          <ul>
            <li @click="changeMethods1()"><a href="javascript:;">普通登录</a><i class="triangle" v-show="user"></i></li>
            <li @click="changeMethods2()"><a href="javascript:;">手机动态密码登录</a><i class="triangle" v-show="tel"></i></li>
          </ul>
        </div>
      </div>
    </header>
    <!--用户名密码-->
    <div class="profession">
      <div class="formbox">
        <form action="" method="post" class="user" v-show="user">
          <div>
            <ul class="mform">
              <li>
                <span class="iconfont icf">&#xe600;</span>
                <input type="text" v-model="username" placeholder="手机号/邮箱/用户名" />
              </li>
            </ul>
          </div>
          <div>
            <ul class="mform">
              <li>
                <span class="iconfont icf">&#xe61b;</span>
                <input type="text" v-model ="psw" placeholder="输入密码" />
              </li>
            </ul>
          </div>
        </form>
        <form action="" method="post" class="tel" v-show="tel">
          <div>
            <ul class="mform">
              <li>
                <span class="iconfont icf">&#xe650;</span>
                <input type="text" id="username" placeholder="已注册手机号" />
              </li>
            </ul>
          </div>
          <div>
            <ul class="mform">
              <li>
                <span class="iconfont icf">&#xe61b;</span>
                <input type="text" id="psw" placeholder="输入手机动态密码" />
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
      <!--登录按钮-->
      <div class="loginbut"><a href="javascript:;" @click="toInd()">登  录</a></div>
    </div>
    <!--height-->
    <div style="height: 10em; text-align: center;
    line-height: 10em;color: red;font-size:1.2em" class="loginmsg">{{msg}}</div>
    <!--其他登录-->
    <div class="otherlogin">
    <div class="joinweb"><b>合作网站登录</b></div>
      <ul class="web">
        <li><a href="https://passport.epet.com/Oauth.html?type=4&returnurl=https%3A%2F%2Fwap.epet.com%2Fuser%2FUserCenter.html"><img src="../../assets/img/login_ico4.png"/></a></li>
        <li><a href="https://passport.epet.com/Oauth.html?type=2&returnurl=https%3A%2F%2Fwap.epet.com%2Fuser%2FUserCenter.html"><img src="../../assets/img/login_ico2.png"/></a></li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'login',
  data () {
    return {
      user: true,
      tel: false,
      username: '',
      psw: '',
      msg: ''
    }
  },
  methods: {
    changeMethods1: function () {
      this.user = true
      this.tel = false
    },
    changeMethods2: function () {
      this.user = false
      this.tel = true
    },
    toInd: function () {
      var that = this
      axios.post('/api/loginA', {
        username: this.username,
        psw: this.psw
      })
        .then(function (res) {
          that.msg = res.data.message
          if (res.data.code === 1) {
            setTimeout(function () {
              location.href = '/#/'
            }, 2000)
          }
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" src="../../assets/css/login.css">
</style>
