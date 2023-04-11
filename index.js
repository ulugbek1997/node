const express = require("express")

const app = express()

const  users = [
    {id:1,username:"fifa"},
    {id:2,username:"fish"}

]

app.get("/",(req,res)=>{
    res.json({
        "message":"Hello World"
    })
})
app.get("/users",(req,res)=>{
    res.json(users)
})
app.get("/users/:id",(req,res)=>{
    const user = users.find(u=>u.id==req.params.id)
    res.json(user)
})
app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})