const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    }, 
    email:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
   
    message:{
        type:String,
        required:true
    }
})

const User =mongoose.model("userdata",userSchema)
module.exports=User