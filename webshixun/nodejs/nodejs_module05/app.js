/**
 * 服务器入口文件
 * 创建日期:23/8/14
 * 开发者:sg
 */

//引入express模块
const express=require("express")
//引入内置body-parser模块,专门用于解析请求体数据,(post.put请求携带数据的话,都是放在请求体中传输)
const bodyParser=require("body-parser")

//使用express创建服务器
const server=express()
//分配端口号并启动服务器
server.listen(3000)

//模块内置变量保存当前目录所在的绝对路径和文件所在的绝对路径
console.log(__dirname,__filename)

//服务器托管静态资源路径
server.request(express.static(__dirname+"/public"))