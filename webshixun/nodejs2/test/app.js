/**
 * 服务器入口文件
 * 创建日期:23/8/14
 * 开发者:WLT
 */

//引入express模块
const express = require('express');
//引入内置body-parser模块,专门用于解析请求体数据,(post.put请求携带数据的话,都是放在请求体中传输)
const bodyParser = require("body-parser");
const userRouter = require("./router/user");
const proRouter = require("./router/product");

//使用express创建服务器
const server = express();
//分配端口号并启动服务器
server.listen(3000);

//模块内置变量保存当前目录所在的绝对路径和文件所在的绝对路径
console.log(__dirname,__filename)

//服务器托管静态资源路径
server.use(express.static(__dirname+"/public"));
server.use(bodyParser.json())
// bodyParser.urlencoded()返回中间件对象，专门用于解析请求体中数据，配置项中extended用于设置使用哪一个模块解析请求体。false表示不扩展，使用nodejs内置querystring模块解析请求体，true表示使用第三方模块qs解析请求体。会将解析后的参数对象，保存在请求对象的body属性上
server.use(bodyParser.urlencoded({
    extended:false
}))

// 挂载路由器:不同路由器模块下可能有同名路由，用户详情/detail,商品详情/detail,为了区分不同模块下的路由，在挂载路由器时，可为该路由器下所有路由添加前缀,请求时必须填写完整 /user/detail
server.use("/user",userRouter);
server.use("/pro",proRouter);
