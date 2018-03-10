var express  =require('express');
var app = express();
var path = require('path');

var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var db = require('./db/index')
//设置项目页面访问目录
app.set('views',path.join(__dirname,'views'));
//设置页面模板引擎
/*app.engine('html',require('ejs').__express);*/
app.set('view engine','ejs');
//使用body-parser解析post请求
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
//使用cookie-parser 中间件
app.use(cookieParser());
//设置静态资源目录
app.use(express.static(path.join(__dirname,'public')));

app.use('/',require('./routes/index'));

app.listen(3001,function(){
    console.log('The Server listening on 3001');
})