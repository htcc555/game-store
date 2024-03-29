/**
 * 服务器入口文件
 * 创建日期 23/8/15
 * 开发者:sg
 */

//引入express模块
const express=require("express")

//引入内置的body-parser模块,专门解析请求体
const bodyParser=require("body-parser")

//使用express创建服务器
const server=express();
server.listen(3000);

//用post传数据时须加上这行代码
server.use(bodyParser.json())

//服务器托管静态资源目录
server.use(express.static(__dirname+"/public"))

//bodyParser.urlencoded()返回中间件对象,专门用于解析请求体中的数据,
//extended用于设置使用哪一个模块解析,false表示不拓展,使用nodejs内置querystring模块解析请求体
//会将解析后的参数对象,保存在请求对象的body属性上
server.use(bodyParser.urlencoded({
    extended:false
}))
server.post("/dog",(req,res)=>{
    //post请求传参数时,通过req
    console.log(req.body)
    if(req.body.weight / req.body.height<0.7)
    {
        res.send("1")
    }
    else{
        res.send("2")
    }
    
})