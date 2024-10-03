const mongoose = require('mongoose')

const DataSchema = mongoose.Schema({
    UserID:{
        type:Number,
        default:function(){return Math.floor(Date.now()/1000)}
    },
    CreateDate:{
        type:Date,
        default:new Date()
    },
    SL:{
        type:Number
    },
    Name:{
        type:String,
    },
    Email:{
        type:String
    },
    Head:{
        type:String,
    },
    Type:{
       type:String,
    },
    Amount:{
        type:Number
    },
    Date:{
        type:String
    }
   
},{versionKey:false})

const IncomeModel = mongoose.model('income',DataSchema)

module.exports = IncomeModel;