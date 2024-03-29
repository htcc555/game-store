/**
 * 商品路由,用于添加商品('/send),删除商品('/del'),
 * 查询所有商品('/list'),用于主页面
 * 根据id查询单个商品('/detail'),用于商品细节页面
 * 根据分类id查询多个商品,('/cate'),用于点击导航栏查询分类商品
 * 根据关键字查询商品,('/search'),用于根据关键字查询商品
 * 创建时间:23/8/18
 * 开发者:sg
 */

/**
 * 商品 id              int
 *      title           varchar(255)
 *      url             varchar(255)        图片url
 *      price           varchar(20)         价格   
 *      old             varchar(20)         老价格
 *      sale            varchar(20)         浏览量
 *      category        varchar(10)         分类id
 */

const express=require('express')
const pool=require('../../pool')
const fs=require('fs')
const productRouter=express.Router();


productRouter.post("/sub",(req,res)=>{
    var a=req.body
    pool.query("insert into product values(null,?,?,?,?,?,?)",[a.title,a.url,a.price,a.odl,a.sale,a.category],(err)=>{
        if(err)
        throw err
    })
})


module.exports=productRouter