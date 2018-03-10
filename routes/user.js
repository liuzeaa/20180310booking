var express = require('express');
var router = express.Router();
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
router.post('/create',function(req,res,next){
    User.create(req.body,function(err,doc){
        if(err){
            console.log(err.message);
            return;
        }
        console.log(doc)
    })
})
//编辑接口
router.get('/edit/:id',function(req,res,next){
    User.findById(req.params.id,function(err,list){
        res.render('user/edit',{list:list})
    })

})
router.post('/edit/:id',function(req,res,next){
    var data = Object.assign({},req.body,{updatedAt:new Date()});
    User.update({_id:req.params.id},{
        $set:data
    },function(err,doc){
        if(err){
            console.log('edit success')
        }
    })
})
//删除接口
router.get('/user/delete/:id',function(req,res,next){
    User.update({_id:req.params.id},{
        $set:{
            isDelected:false
        }
    },function(err,doc){
        if(err){
            console.log('delete success')
        }
    })
})
module.exports = router;