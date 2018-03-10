//使用mongoose,连接mongodb
var mongoose = require('mongoose');
//连接哪个数据库
mongoose.connect('mongodb://localhost:27017/booking2');

var db= mongoose.connection;

db.once("open",function(){
    console.log("数据库成功打开");
});
module.exports = db;