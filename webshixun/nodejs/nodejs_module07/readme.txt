回顾:
服务器端:
    1.创建项目目录,执行npm命令
        npm init -y
        npm install express
        npm install mysql
    2.使用express模块搭建web服务器
        1)创建服务器文件app.js,引入express模块
        2)创建服务器文件
            const server=express();
            server.listen(3000);
        3)服务器托管静态资源目录
            项目目录下创建文件夹public存放静态资源(html,css,js,img,audio)
            服务器在托管该目录之后,客户端对静态资源的请求将直接映射到该目录
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
                const userRouter=express.Router()
                userRouter.get("/detail",(req,res)=>{}) 
            -导出路由器对象
                module.exports=userRouter
            -服务器文件中导入并挂载路由器对象
                const userRouter=require("./router/user")
                server.use("./user",userRouter)

数据库Mysql
    安装MariaDB(MySQL的分支),端口号3306,驱动使用的也是mysql
    启动数据库
        1)通过终端打开  mysql -u root -p 键入密码
        2)直接通过mysql client打开 键入密码
    数据库相关语句
    -库相关:
    数据库不区分大小写(指语句,数据还是区分)
    数据库不区分单双引号
    SQL语句以 ; 结尾
        创建数据库:
            create database 库名 charset=utf8;
        查询数据库列表:
            show databases;
        查询数据库创建语句:
            show create database 库名
        删除数据库:
            drop database 库名
        使用库:
            use 库名
    -表相关:
        创建表:
            create table 表名(字段1 类型,字段2 类型,字段3 类型) charset=utf8;
        查询表列表:
            show tables;
        查询表创建语句:
            show create table 表名;
        查询字段:
            desc 表名;
        修改表字段:
            添加字段
            alter table 表名 add 字段名 类型
            添加字段在最前面
            alter table 表名 add 字段名 类型 first
            在特定位置添加字段
            alter table 表名 add 字段名 类型 after 字段名
            修改字段
            alter table 表名 change 原字段 新字段 类型
            删除字段
            alter table 表名 drop 字段名
        删除表
            drop table 表名;
    -数据相关
        添加数据
            添加单条数据
            insert into 表名 values(值1,值2);
            添加指定数据
            insert into 表名(字段1,字段2...) values(值1,值2...);
            批量添加
            insert into 表名 values(值1,值2),(值1,值2),(值1,值2);
        查询数据
            select 内容 from 表名 where 条件
        修改数据
            update 表名 set 字段名=值 where 条件
        删除数据
            delete from 表名 where 条件





