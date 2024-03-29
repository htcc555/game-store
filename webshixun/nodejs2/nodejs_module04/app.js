//引入内置模块
const http = require('http')
const fs = require('fs')
const qs = require('querystring')
//创建并启动服务器
const server = http.createServer();
server.listen(3000)

server.on("request",(req,res)=>{
    if(req.url=="/" || req.url == '/index.html'){
        var indexData = fs.readFileSync("/public/index.html")
        indexData = indexData.toString();
        res.writeHead(200,{
            "Content-Type":"text/html;charset=utf8"
        })
        res.write(indexData);
        res.end();
    }else if(req.url=="/login.html"){
        var loginData = fs.readFileSync("/public/login.html")
        loginData = loginData.toString();
        res.writeHead(200,{
            "Content-Type":"text/html;charset=utf8"
        })
        res.write(loginData);
        res.end();
    }else if(req.url.indexOf("/login")!=-1){
        if(req.method == "GET"){
            //查询字符串解析  /login?username=xxx&upwd=xxx
            var urlObj = new URL(req.url,"http://127.0.0.1:3000");
            var searchStr = urlObj.search;//?username=xxx&wpwd=xxx
            var qsStr = searchStr.substring(1) // username=xxx& wpwd=xxx
            var params = qs.parse(qsStr)
            console.log(params);
            res.writeHead(200,{
                "Content-Type":"text/html;charset=utf8"
            })
            res.write(`欢迎您,<h1>${params.username}</h1>`)
            res.end();
        }else if(req.method == "POST"){
            var str = ''
            req.on("data",(chunk)=>{
                str += chunk.toString()
            })
            req.on("end",(err)=>{
                var data = qs.parse(str)
                console.log(data)
                res.writeHead(200,{
                    "Content-Type":"text/html;charset=utf8"
                })
                res.write(`欢迎您,<h1>${data.username}</h1>`)
                res.end();
            })
        }
    }else if(req.url == "/register.html"){
        var register = fs.readFileSync("./register.html")
        register = register.toString();
        res.writeHead(200,{
            "Content-Type":"text/html;charset=utf8"
        })
        res.write(register);
        res.end();
    }else if(req.url.indexOf("/register")!=-1){
        var dataStr = '';
        req.on("data",chunk=>{
            dataStr = chunk.toString();
        })
        req.on("end",()=>{
            var infoObj = qs.parse(dataStr);
            console.log(infoObj)
            //通过后台进行判断用户名和密码是否输入,如果没有输入其一则返回3
            if(infoObj.username == "" || infoObj.upwd==""){
                res.write("3")
                res.end();
            }else if(infoObj.username == 'admin'){
                res.write("2")
                res.end();
            }else{
                res.write("1")
                res.end();
            }
        })
    }

})
