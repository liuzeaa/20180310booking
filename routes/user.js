var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var pinyin = require('pinyin');
var User = require('../schemas/user')
router.get('/',function(req,res,next){
    User.find({isDelected:false},function(err,list){
        res.render('user/user',{list:list})
    })
})
//新增接口
router.get('/create',function(req,res,next){
    res.render('user/createModal',{})
})
//只有nickName，name字段作为登录名，pingyin中间件做处理
router.post('/create',function(req,res,next){
    var md5 = crypto.createHash("md5");
   var password = md5.update('123qwe').digest("hex");
    var name = pinyin(req.body.nickName,{style:pinyin.STYLE_NORMAL}).join(',').replace(/\,+/,'');

    User.create({
        name:name,
        nickName:req.body.nickName,
        password:password
    },function(err,doc){
        if(err){
            console.log(err.message);
            return;
        }
        console.log(doc)
        res.redirect('/user')
    })
})
//编辑接口
router.get('/edit/:id',function(req,res,next){
    User.findById(req.params.id,function(err,list){
        res.render('user/edit',{list:list})
    })

})
router.post('/edit/:id',function(req,res,next){
    User.update({_id:req.params.id},{
        $set:{
            name:name,
            nickName:req.body.nickName,
            updatedAt:new Date()
        }
    },function(err,doc){
        if(err){
            console.log(err.message);
            return;
        }
        console.log('edit success')
        res.redirect('/user')
    })
})
//删除接口
router.get('/user/delete/:id',function(req,res,next){
    User.update({_id:req.params.id},{
        $set:{
            isDelected:true
        }
    },function(err,doc){
        if(err){
            console.log(err.message);
            return;
        }
        console.log('delete success')
        res.redirect('/user')
    })
})
module.exports = router;