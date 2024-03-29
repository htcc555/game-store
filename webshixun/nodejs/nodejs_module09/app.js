/**
 * 程序入口文件
 * 创建时间:23/8/17
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