const mongoose=require("mongoose")
const UserSchema=new mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    image:String,
    status :Boolean,
    created_date:String,
    updated_date:String,
})
const UserModel=mongoose.model("user",UserSchema)
module.exports=UserModel