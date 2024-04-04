const mongoose=require("mongoose")
const connect=async()=>{
    await mongoose.connect("mongodb+srv://vrajlukhi:vrajlukhi@cluster0.h0qqzcb.mongodb.net/task/api?retryWrites=true&w=majority&appName=Cluster0")
    console.log("Mongoose connected");
}
module.exports=connect