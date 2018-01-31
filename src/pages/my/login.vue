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
            <li><a href="javascript:;">普通登录</a><i class="triangle"></i></li>
            <li><a href="javascript:;">手机动态密码登录</a></li>
          </ul>
        </div>
      </div>
    </header>
    <!--用户名密码-->
    <div class="profession">
      <div class="formbox">
        <form action="" method="post">
          <div>
            <ul class="mform">
              <li>
                <span class="iconfont icf">&#xe600;</span>
                <input type="text" id="username" placeholder="手机号/邮箱/用户名" />
              </li>
            </ul>
          </div>
          <div>
            <ul class="mform">
              <li>
                <span class="iconfont icf">&#xe61b;</span>
                <input type="text" id="psw" placeholder="输入密码" />
              </li>
            </ul>
          </div>
        </form>
        <form action="" method="post">
        </form>
      </div>
      <!--忘记密码-->
      <div class="forgetpsw">
        <a href="">忘记密码？</a>
        <div class="clear" style="clear: both;"></div>
      </div>
      <!--登录按钮-->
      <div class="loginbut"><a href="">登  录</a></div>
    </div>
    <!--height-->
    <div style="height: 10em;"></div>
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
export default {
  name: 'login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  .box
    background: url(../../assets/img/log.png);
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
    background: url(../../assets/img/lt.png) no-repeat;
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
    float: left;
    width: 50%;
    text-align: center;
    height: 44px;
    line-height: 44px;
    position: relative;

  .ll ul li a
    font-size: 15px;
    color: #fff;
    display: block;

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

  .loginbut
    padding-top: 0.5em;
    text-align: center;

  .loginbut a
    display: block;
    letter-spacing: 5px;
    margin: 0 4%;
    border-radius: 5px;
    background: #2ec975;
    font-size: 15px;
    padding: .6em 0;
    text-align: center;
    color: #fff;

  .joinweb
    color: #d7d7d7;
    margin-top: 0.5em;
    font-size: 1em;
    text-align: center;

  .web
    padding: 1.5em 0;
    display: table;
    content: " ";

  .web::after
    clear: both;

  .web li
    width: 33.3%;
    padding: 0 1.2em;
    float: left;
    display: inline;

  .web li img
    width: 60%;
    height: auto;
    display: block;
    margin: auto;
    max-width: 176px;

</style>
