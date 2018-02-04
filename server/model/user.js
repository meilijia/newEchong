var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Users = new Schema({
    username    : String,
    psw	 		: String
    // date    : {type : Date, default: Date.now}
});
// 创建model对象
var UsersModel = mongoose.model('user', Users);
// 公开对象，暴露接口
module.exports = UsersModel;