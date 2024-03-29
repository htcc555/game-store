//引入内置模块
const http=require('http')
const fs=require('fs')
const qs=require('querystring')
//创建并启动服务器
const server=http.createServer()
server.listen(3000)

server.on("request",(req,res)=>{
    if(req.url=="/" || req.url=='/index.html')
    {
        var indexDate=fs.readFileSync("./index.html")
        indexDate=indexDate.toString()
        res.writeHead(200,{
            "Content-Type":"text.html;charset=utf8"
        })
        res.write(indexDate)
        res.end()
    }
    else if(req.url=='/login.html')
    {
        var loginDate=fs.readFileSync("./login.html")
        loginDate=loginDate.toString()
        res.writeHead(200,{
            "Content-Type":"text.html;charset=utf8"
        })
        res.write(loginDate)
        res.end()
    }
    else if(req.url=='/register.html')
    {
        var registerData=fs.readFileSync("./register.html")
        registerData=registerData.toString()
        res.writeHead(200,{
            "Content-Type":"text.html;charset=utf8"
        })
        res.write(registerData)
        res.end()
    }
    else if(req.url.indexOf("/login")!=-1){
        if(req.method=='GET'){
            //查询字符串解析 /login?username=xxx&upwd=xxx
            var urlObj=new URL(req.url,"http://127.0.0.1:3000")
            var searchStr=urlObj.search;//?username=xxx&upwd=xxx
            var qsStr=searchStr.substring(1)//username=xxx&upwd=xxx
            var params=qs.parse(qsStr)
            console.log(params)
            res.writeHead(200,{
                "Content-Type":"text/html;charset=utf8"
            })
            res.write(`欢迎您,<h1>${params.username}</h1>`)
            res.end()
        }
        else if(req.method=="POST"){
            var str=''
            req.on('data',(chunk)=>{
                str+=chunk.toString()
            })
            req.on("end",(err)=>{
                var data=qs.parse(str)  
                console.log(data)
                res.writeHead(200,{
                    "Content-Type":"text/html;charset=utf8"
                })
                res.write(`欢迎您,<h1>${data.username}</h1>`)
                res.end()              
            })
            
        }
    }
    else if(req.url.indexOf("/register")!=-1){
        if(req.method=="POST"){
            var str=''
            req.on('data',(chunk)=>{
                str+=chunk.toString()
            })
            req.on("end",(err)=>{
                var data=qs.parse(str)  
                console.log(data)
                res.writeHead(200,{
                    "Content-Type":"text/html;charset=utf8"
                })
                if(data.username=='admin'){
                    res.write(`2`)
                    res.end() 
                }
                else if(data.username=='' || data.upwd==''){
                    res.write(`3`)
                    res.end()
                }
                else{
                    res.write(`1`)
                    res.end()   
                }
                          
            })
            
        }
    }
})