const express=require('express')
const proRouter=express.Router()

proRouter.get('/detail',(req,res)=>{
    res.send('这是detail接口')
})
proRouter.get('/list',(req,res)=>{
    res.send('这是list接口')
})

module.exports=proRouter