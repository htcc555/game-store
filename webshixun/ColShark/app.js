/**
 * 程序入口文件
 * 创建时间:23/8/18
 * 开发者:sg
 */

//引入模块 
const express=require('express')
const bodyParser=require('body-parser')
const multiparty=require('multiparty')  
const fs=require('fs')
const bannerRouter=require('./public/router/banner')
const productRouter=require('./public/router/product')

//创建并启动服务器
const server=express();
server.listen(3000)

//挂载服务
server.use(express.static(__dirname+'/public'))
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({
    extended:false
}))

//挂载路由
server.use('/banner',bannerRouter)
server.use('/product',productRouter)

//接口
server.post('/upload',(req,res)=>{
    var form=new multiparty.Form()
    //上传图片需要保存某一个目录,目录必须存在
    form.uploadDir='./public/upload'
    form.parse(req,(err,fields,files)=>{
        console.log(files.picFile[0].path)
        res.send(files.picFile[0].path)
    })
})

//处理图片删除,get获取图片路径,删除图片
server.get('/remove',(req,res)=>{
    console.log(req.query.name)
    //需要根据图片的存储路径来进行删除
    fs.unlink(req.query.name,err=>{
        if(err)
        throw err;
        console.log('删除完成')
    })
})