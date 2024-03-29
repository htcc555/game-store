// 文件操作

//引入fs(文件)模块,可以对文件进行读写操作
const fs = require('fs')

fs.writeFile("静夜思.txt","床前明月光,疑是地上霜。",err=>{
    if(err){
        console.log("创建文件错误")
    }else{
        console.log("写入文件成功!")
    }
})