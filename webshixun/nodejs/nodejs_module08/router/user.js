//用户路由文件
const express=require('express')
const userRouter=express.Router();
const pool=require('../pool.js')

//注册接口
userRouter.post("/reg",(req,res)=>{//如果查询内容(result列表)为空,则证明该用户不存在
    console.log(req.body);
    //通过用户名进行查询
    
    pool.query("select password from user where username=?",req.body.username,(err,result)=>{
        console.log(result)
        if(result.length==0){
            var options="insert into user values(null,?,?)"
            var QuertOptions=[req.body.username,req.body.password]
            pool.query(options,QuertOptions,(err,result)=>{
                if(err){
                    throw err;
                }
                else{
                    res.send('1')
                }
            })
        }
        else
        {
            res.send("2")
        }
    })
})

//登录接口
userRouter.post("/login",(req,res)=>{
    console.log(req.body);

    pool.query("select password from user where username=?",req.body.username,(err,result)=>{
        if(result.length!=0){
        if(result[0].password==req.body.password){
           res.send("1")
        }
        else{
            res.send('2')
        }
        }
        else
        {
            res.send("2")
        }
    })

})


module.exports=userRouter