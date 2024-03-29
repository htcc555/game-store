//1.引入node.js内容模块
const http = require("http");
//引入内置文件系统模块,(提供文件读写的一系列方法)
const fs = require("fs");
//引入内置url模块
const url = require("url");
//querystring用于解析查询字符串,将其解析为对象
const qs = require("querystring");
//2.创建web服务器
const server = http.createServer();
//3.启动服务器(ip/域名,端口) 本机启动的话,服务器的ip是127.0.0.1
server.listen(3000);
//服务器监听客户端发来的请求,并且针对请求地址分门别类做出响应
//监听请求事件 request,一旦有请求进来,自动执行处理函数.
//函数中有接收两个参数,分别对应请求对象和响应对象
server.on("request",(req,res)=>{
    console.log(req)
    if(req.url == '/'){
        //请求服务器根目录,响应首页
        //设置响应头,处理中文乱码(响应状态码,头信息设置)
        res.writeHead(200,{
            "Content-Type":"text/html;charset=utf8"
        })
        //通过响应对象设置相应信息
        res.write("<h1>欢迎来到首页</h1>")
        //并发送响应
        res.end()
    }else if(req.url == "/index"){
        res.writeHead(200,{
            "Content-Type":"text/html;charset=utf8"
        })
        //通过响应对象设置相应信息
        res.write("<h1>欢迎来到首页</h1>")
        //并发送响应
        res.end()
    }else if(req.url == "/detail"){
        //读取当前目录下的detail.html的内容,并响应前端
        var fileData = fs.readFileSync("detail.html");
        //读取结果为buffer字节流数据,并不是直接的字符串
        console.log("---fileData---",fileData)
        //将buffer转换成字符串
        fileData = fileData.toString();
        console.log("---转换完成后fileData---",fileData)
        res.writeHead(200,{
            "Content-Type":"text/html;charset=utf8"
        })
        res.write(fileData)
        res.end()//响应回前端
    }else if(req.url.indexOf("/detail?") != -1){//匹配带参数的detail接口
        //根据当前的请求地址,创建url对象,请求地址如果是相对路径,必须补全协议和域名信息
        var urlObj = new URL(req.url,"http://127.0.0.1:3000")
        console.log(urlObj)
        //urlObj.searchParams方法获取查询字符串对象;该对象只读,想要获取内部属性,只能
        //通过get("属性名")获取,不能直接点语法
        console.log(urlObj.searchParams.get("proId"));
        //截取search字符串问号后面的查询字符串 ?proId=10
        //string.substring(startIndex[,endIndex]),从指定下标开始截取内容,默认截至末尾
        //qs解析后返回普通对象,可以点语法直接访问属性
        var obj = qs.parse(urlObj.search.substring(1))
        console.log(obj)
    }
})
