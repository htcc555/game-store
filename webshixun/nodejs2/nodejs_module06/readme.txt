回顾:
服务器端:
    1.创建项目目录,执行npm命令
        npm init -y
        npm install express
    2.使用express模块搭建web服务器
        1)创建服务器文件app.js,引入express模块
        2)创建服务器文件
            const server = express();
            server.listen(3000);
        3)服务器托管静态资源目录
            项目目录下创建文件夹public存放静态资源(html,css,js,img,audio)
            服务器托管该目录之后,客户端对静态资源的请求将直接映射到改目录
            server.use(express.static("目录的绝对路径"))
            效果:前端请求/index.html,后端不需要专门定义接口,就可以自动响应改文件内容
            index.html是默认打开路径
        4)服务器使用body-parser模块,解析请求体中的数据(post,put),并且将解析后的数据对象保存至请求对象的body属性
            引入该模块body-parser,服务器使用时设置extended:false,表示用nodejs内置querystring模块解析请求体数据
            server.use(bodyParser.urlencoded({
                extended:false
            }))

