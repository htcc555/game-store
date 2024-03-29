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

//返回用户列表
userRouter.get('/list',(req,res)=>{
    pool.query("select * from user",(err,result)=>{
        if(err) 
        throw err;
        res.send(result)
    })
})


userRouter.get('/del',(req,res)=>{
    console.log(req.query)
    pool.query("delete from user where id=?",req.query.id,(err,result)=>{
        if(err)
        throw err
    })
})


userRouter.get('/info',(req,res)=>{
    console.log(req.query)
    pool.query("select * from user where id=?",req.query.id,(err,result)=>{
        console.log(result[0])
        res.send(result[0])
    })
})


userRouter.post("/send",(req,res)=>{
    console.log(req.body)
    pool.query("update user set password=? where id=?",[req.body.password,req.body.id],(err,result)=>{
        if(err)
        throw err
    })
})

module.exports=userRouter