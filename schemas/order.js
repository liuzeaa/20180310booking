
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var orderSchma = new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    phone:Number,
    address:String,
    goTime:Date,
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

var Order = mongoose.model('Order',orderSchma);
module.exports = Order;