//使用mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var crypto = require('crypto');
//新建表的字段
var userSchema = new Schema({
    name:String,
    password:String,
    nickName:String,
    createdAt:{
        type:Date,
        default:Date.now()
    },
    updateddAt:Date,
    isDelected:{
        type:Boolean,
        default:false
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
})
//插入表
var User = mongoose.model('User',userSchema);
//密码加密
var md5 = crypto.createHash("md5");
var newPas = md5.update('123qwe').digest("hex");
//默认账户
var userItem = new User({
    name:'admin',
    password:newPas,
    nickName:'超级管理员',
    isAdmin:true
});
//先查找数据库中是否有该条数据
User.findOne({
    name:'admin',
    isDelected:false,
    nickName:"超级管理员",
    isAdmin:true
},function(err,doc){
    if(doc==null){
        //插入
        userItem.save((err,doc2)=>{
            console.log(doc2);
        })
    }
})


module.exports = User;