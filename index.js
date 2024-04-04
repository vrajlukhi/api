const express=  require("express")
const { dirname } = require("path")
const connect = require("./config/db")
const Route = require("./routes/user.router")
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set("view engine","ejs")
app.set("views",__dirname+"/views")

app.use(Route)

app.listen(8090,()=>{
    console.log("Server 8090");
    connect()
})