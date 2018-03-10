var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    res.render('index',{title:'欢迎'})
})
router.use('/user',require('./user'));
router.use('/price',require('./price'));
router.use('/order',require('./order'));
module.exports = router;

