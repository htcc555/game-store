//用户路由器文件,用于定义所有跟用户相关的路由(接口),登录,登出,注册,注销,查看,修改等
//引入express
const express = require('express')
const pool = require('../pool')
//创建路由器对象
const userRouter = express.Router();
//路由器对象定义路由的方式与服务器定义路由方法一致,get()/post

//登录接口
userRouter.get("/login",(req,res)=>{
    res.send("用户登录接口")
})
//注册接口
userRouter.get("/reg",(req,res)=>{
    console.log(req.query)
    //insert into user values(null,?,?)
    pool.query("insert into user values(null,?,?)",[req.query.username,req.query.password],(err,result)=>{
        if(err){
            throw err;
        }
        res.send("注册成功!")
    })
    
})
//NodeJS中所有的文件都是模块对象,如果外界想引入该模块或引入模块中的数据,必须配合模块内部
//的导出一起使用

//设置用户路由器对象为当前模块的导出对象
module.exports = userRouter;