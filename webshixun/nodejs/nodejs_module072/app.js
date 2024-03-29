/*
服务器入口文件
创建日期:23/8/15
开发者:WLT
*/

const express = require('express');
const bodyParser = require('body-parser');

const userRouter = require('./router/user');

const server = express();
server.listen(3000);

server.use(express.static(__dirname+"/public"));
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({
    extended:false
}))

//挂载路由器:不同路由器模块下可能有同名路由器,用户详情/detail,商品详情/detail,为了区分不同
//模块下的路由,在挂载路由器时,可为该路由器下所有的路由添加前缀,请求必须填写完整,如
// /user/login
server.use("/user",userRouter);

server.get("/detail",(req,res)=>{
    res.send("app中的detail")
})