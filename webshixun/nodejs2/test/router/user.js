// 用户路由器文件，用于定于所有跟用户相关的路由（接口），登录，登出，注册，注销，查看，修改等
// 引入express
const express = require("express");
// 导入数据库连接池对象，所有数据库操作都通过数据库连接池对象的query方法处理
const pool = require("../pool");
// 创建路由器对象
const userRouter = express.Router();
// 路由器对象定义路由的方式与服务器定义路由方法一致，get()/post
userRouter.post("/login",(req,res)=>{
    console.log(req.body);
    if(req.body.username == "wang" && req.body.password == "123"){
        res.send("1");
    }else{
        res.send("2")
    }
});
userRouter.get("/regist",(req,res)=>{
    // get请求查询字符串带参数，直接通过req.query获取参数对象
    console.log(req.query);
    pool.query("insert into user values(null,?,?,null)",[req.query.username,req.query.password],(err,result)=>{
        if(err){
            throw err;
        }
        res.send("1")
    })
});
userRouter.get("/detail",(req,res)=>{
    res.send("查看用户详情")
});
userRouter.post("/update",(req,res)=>{
    res.send("用户修改接口")
});
userRouter.get("/list",(req,res)=>{
    pool.query("select * from user",(err,result)=>{
        if(err){
            throw err;
        }else{
            //执行成功
            console.log(result);
            res.send(result)
        }
    })
});

// NodeJS中所有的js文件都是模块对象，如果外界想引入该模块对象或引入模块中的数据，必须配合模块内部的到处一起使用
// 设置用户路由器对象为当前模块的导出对象
module.exports = userRouter;