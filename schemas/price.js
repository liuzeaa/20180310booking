
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var priceSchma = new Schema({
    price:Number,
    createdAt:{
        type:Date,
        defalut:Date.now()
    },
    updatedAt:Date,
    isDelected:{
        type:Boolean,
        default:false
    }
})

var Price = mongoose.model('Price',priceSchma);
module.exports =Price