const mongoose = require('mongoose')

const DataSchema = mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true,
        unique:true  
    },
    UserID:{
        type:Number,
        default:function(){return Math.floor(Date.now()/1000)}
    },
    Password:{
       type:String,
       required:true,
     
    },
    CreateDate:{
        type:Date,
        default:Date.now()
    }
},{versionKey:false})

const UserModel = mongoose.model('user',DataSchema)

module.exports = UserModel;