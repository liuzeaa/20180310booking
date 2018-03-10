var express = require('express');
var router = express.Router();
var User = require('../schemas/user')
router.get('/',function(req,res,next){
    User.find({isDelected:false},function(err,list){
        res.render('user/user',{list:list})
    })
})

module.exports = router;