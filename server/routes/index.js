var express = require('express');
var router = express.Router();
var UsersModel = require('../model/user')


/* GET home page. */
router.get('/',function(req,res,next) {
  res.render('index', { title: '欢迎你'});
})
// 重定向
router.post('/api/buy', function(req, res, next) {
    if(req.session.username == null || req.session == null){
      res.redirect("login");//重定向
      console.log('session is  biubiubiu') 
      return;
    }
});
// 登陆验证
router.post('/api/loginA', function(req, res, next) {
  var username = req.body.username
  var psw = req.body.psw
  // console.log(username,psw)
  var result = {
        code : 1,
        message: "登陆成功,等待两秒后跳转到首页"
  }
  //查询数据库中有无这个用户名和密码
  UsersModel.find({username : username,psw : psw},function(err,docs){
        if(docs.length == 0) {
          result.code = -101;
          result.message = "您的账号或密码错误。请重新登录。"
          console.log(username,psw)
        } else {
          //登陆成功生成session
          console.log(username,psw)
          req.session.username = username;
          // console.log(req.session)
        }
        res.json(result)
  })
});
// 注册验证
router.post('/api/register', function(req, res, next) {
  var username = req.body.username
  var psw = req.body.psw
  console.log(username,psw)
    var result = {
        code : 1,
        message: "注册成功,点击去往登录页面"
    }
  UsersModel.find({username : username},function(err,docs){
        //检验用户名是否已经注册
        if(docs.length > 0){
          result.code = -99;
          result.message = "用户名已经被注册了，请您重新注册";
          res.json(result);
          return;
        }
  // 存入数据
  var um = new UsersModel();
      um.username = username;
      um.psw = psw;
      um.save(function(err){
        if(err){
          result.code = 100;
          result.message = "保存失败啦";
      //            res.json(result);
          res.send("失败")
        }
        res.json(result);
      });
    });
});
module.exports = router;