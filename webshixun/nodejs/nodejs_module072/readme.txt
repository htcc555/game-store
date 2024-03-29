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
        5)服务器使用路由器
            路由器可以实现模块化管理路由,便于多人开发和维护
            -项目目录下创建文件夹router,存放所有的路由文件
            -创建路由器,编写接口(用法和服务器定义接口一致)
                const userRouter = express.Router();
                userRouter.get("/detail",(req,res)=>{})
            -导出路由器对象
                module.exports = userRouter
            -服务器文件中导入并挂载路由器对象
                const userRouter = require("./router/user")
                server.use("/user",userRouter)
    练习:书写一个商品路由器,product.js  定义路由前缀为/pro,其中有/detail与/list
