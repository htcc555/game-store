//引入内置模块
const http = require("http")
const fs = require("fs")
const qs = require("querystring")
//创建并启动服务器
const server = http.createServer();
server.listen(3000)

server.on("request",(req,res)=>{
    //1.访问服务器根目录,响应首页,首页包含一个连接
    if(req.url == "/" || req.url == "/index" || req.url == "/index.html"){
        var indexData = fs.readFileSync("./index.html");
        indexData = indexData.toString();
        res.writeHead(200,{
            "Content-Type":"text/html;charset=utf8"
        });
        res.write(indexData);
        res.end();
    }else if(req.url == "/login.html"){
        var loginData = fs.readFileSync("./login.html");
        loginData = loginData.toString();
        res.writeHead(200,{
            "Content-Type":"text/html;charset=utf8"
        });
        res.write(loginData);
        res.end();
    }else if(req.url.indexOf("/login")!=-1){
        console.log(req.url,req.method)
        //请求方式不同,携带参数的方式不同,服务器获取和解析参数的方式也不同
        if(req.method=="GET"){
            //当请求方式为GET时执行代码
            //查询字符串req.url : /login?username=123&upwd=123
            var urlObj = new URL(req.url,"http://127.0.0.1:3000");
            var searchStr = urlObj.search;// "?username=123&upwd=123"
            var qsStr = searchStr.substring(1); // "username=123&upwd=123"
            var params = qs.parse(qsStr)
            console.log(params)
            res.writeHead(200,{
                "Content-Type":"text/html;charset=utf8"
            })
            // 检测固定账号和密码,将来此处需要连接数据库,查询表记录,以判断是否存在该用户
            if(params.username=="wang" && params.upwd=="123"){
                res.write(`欢迎您,<h1>${params.username}</h1>`)
            }else{
                res.write("账号不存在!")
            }
            res.end()
        }else if(req.method=="POST"){
            //当请求方式为POST时执行代码
            //从请求体中解析
            //请求对象监听数据传入并接收buffer数据(以字节流的形式传递,需要转换字符串)
            // 如果数据量大,会分段接受和传递,接收时也需要拼接最终接收完整
            var str = ""
            req.on("data",chunk=>{
                console.log(chunk)
                console.log("chunk.toString()",chunk.toString())
                str += chunk.toString()
            });
            //监听数据传输是否结束,结束后会自动发回回调函数
            req.on("end",(err)=>{
                //解析数据
                var data = qs.parse(str);
                console.log(data)
                res.writeHead(200,{
                    "Content-Type":"text/html;charset=utf8"
                })
                if(data.username=="wang"&&data.upwd=="123456"){
                    res.write("post登录成功")
                }else{
                    res.write("账号或密码错误!")
                }
                res.end();
            })
        }
    }
})