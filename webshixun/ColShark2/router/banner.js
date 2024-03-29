/**
 * 处理轮播图的上传,删除,查询
 * 创建时间:8月18日
 * 开发者:WLT
 */
const express = require('express')
const pool = require('../pool')
const bannerRouter = express.Router();
const fs = require('fs')

//轮播图的上传功能,通过前端传来的图片路径进行存储
bannerRouter.post('/send',(req,res)=>{
    console.log(req.body)
    var url = req.body.url.replace("public","")//将路径中的public去除
    pool.query('insert into banner values(null,?)',url,(err)=>{
        if(err) throw err;
    })
})

//查询所有轮播图
bannerRouter.get('/list',(req,res)=>{
    pool.query('select * from banner',(err,result)=>{
        //console.log(result)
        res.send(result)
    })
    
})

//删除轮播图
bannerRouter.get('/del',(req,res)=>{
    console.log(req.query)
    console.log('前端传来数据为:'+req.query.url)
    //先删除数据库中的轮播图数据(id,url)
    pool.query('delete from banner where url=?',req.query.url,(err)=>{})
    //删除服务器文件中的图片
    fs.unlink("./public"+req.query.url,err=>{
        if(err) throw err;
        console.log("删除完成!");
    })
})



module.exports = bannerRouter