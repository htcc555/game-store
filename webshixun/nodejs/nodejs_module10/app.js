/**
 * 程序入口文件
 * 创建时间:23/8/17
 * 开发者:sg
 */

const express=require('express')
const bodyParser=require('body-parser')
const multiparty=require('multiparty')  
const fs=require('fs')

const bannerRouter=require('./public/router/banner')

const server=express();
server.listen(3000)



server.use(express.static(__dirname+'/public'))
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({
    extended:false
}))

//处理图片上传,将图片存于指定目录下,并且返回图片存储路径
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
        console.log(req.query.name)
        if(err)
        throw err;
        console.log('删除完成')
    })
})



server.use('/banner',bannerRouter)