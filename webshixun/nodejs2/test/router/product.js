// 商品路由器模块，用于管理与商品相关的路由（列表，详情，修改，上下架等）
const express = require("express");
const proRouter = express.Router();

proRouter.get("/detail",(req,res)=>{
    res.send("商品详情");
})

// 导出路由器对象
module.exports = proRouter;