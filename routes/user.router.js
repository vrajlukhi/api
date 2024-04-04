const{Router}=require("express")
const UserModel = require("../models/User.Schma")
const Route=Router()

Route.get("/",(req,res)=>{
    res.render("index")
})
Route.post("/Register",async(req,res)=>{
    let{name,email,phone,image}=req.body
    let data=await UserModel.findOne({email:email})
    if(data){
        res.json("Alredy Extis User !")
    }
    else{
        let user=await UserModel.create(req.body)
        res.json("add sucessfully")
    }
})
Route.get("/alldata",async(req,res)=>{
    let data=await UserModel.find()
    res.json(data)
})
Route.put("/update/:id",async(req,res)=>{
    let{id}=req.params
    let data=await UserModel.findByIdAndUpdate(id,req.body)
    res.json("Update sucessfully")
})
Route.get("/search",async(req,res)=>{
    let{search}=req.query
    let data=await UserModel.find({$or:[{name:search},{email:search},{phone:search}]})
    res.json(data)
})
Route.delete("/delete/:id",async(req,res)=>{
    let{id}=req.body
    let data=await UserModel.findByIdAndDelete(id)
    data.save()
    res.json(data)
})

module.exports=Route