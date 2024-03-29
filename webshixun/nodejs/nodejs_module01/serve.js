//不是所有的JS文件都是浏览器解析文件,node.js创建的.js文件其实是服务器端文件,
//使用的也是node.js中的内置模块与方法,和浏览器没有关系
//1.引入node.js内置模块
const http=require('http')
//2.创建web服务器
const server=http.createServer();
//3.启动服务器(ip/域名,端口) 本机启动的化,服务器的ip是127.0.0.1
server.listen(3000);
//服务器监听客户端发来的请求,并且针对请求地址分门别类做出响应
//监听请求事件 request,一旦有请求进来,自动执行处理函数
//函数中有接收两个参数,分别对应请求对象和响应对象
server.on("request",(req,res)=>{
    console.log(req)
    if(req.url=='/'){
        //请求服务器根目录,响应首页
        //设置响应头,处理中文乱码(响应乱码状态,头信息设置)
        res.writeHead(200,{
            "Content-Type":"text/plain;charset=utf8"
        })
        //通过响应对象设置相应信息
        res.write("欢迎来到我的页面")
        //并发送响应
        res.end()
    }
}
)
