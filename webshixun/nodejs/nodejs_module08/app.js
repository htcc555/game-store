/**
 * 服务器入口
 * 创建时间:23/8/16
 * 开发者:sg
 */

const express=require('express')
const bodyParser=require('body-parser')
const userRouter=require('./router/user')

const server=express();
server.listen(3000)

server.use(express.static(__dirname+'/public'))
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({
    extended:false
}))

server.use('/user',userRouter);

//接口部分
server.get("/reg",(rep,res)=>{
    res.sendFile(__dirname+"/public/reg.html")
    headers:{
        "Content-Type";"text/html;charset=utf8"
    }
})