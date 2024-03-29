/**
 * 商品分类路由,添加分类,删除分类,分类查询
 * 创建时间:23/8/18
 * 开发者:WLT
 */

//导入模块
const express = require('express')
const pool = require('../pool')
//创建路由
const categoryRouter = express.Router();

//添加分类接口
categoryRouter.get('/send',(req,res)=>{
    console.log(req.query.category)
    pool.query('insert into category values(null,?)',req.query.category,(err)=>{
        if(err) throw err;
    })
})

//查询所有分类接口
categoryRouter.get('/list',(req,res)=>{
    pool.query('select * from category',(err,result)=>{
        console.log(result)
        res.send(result)
    })
})

//根据id删除分类
categoryRouter.get('/del',(req,res)=>{
    console.log(req.query.id)
    pool.query('delete from category where id=?',req.query.id,(err)=>{
        if(err) throw err;
    })
})

//导出模块
module.exports = categoryRouter