//mysql模块封装了与数据服务器连接并执行SQL操作的方法
//引入mysql模块
const mysql = require('mysql');
//创建连接池对象,执行sql语句的对象
const pool = mysql.createPool({
    //地址
    host:"127.0.0.1",
    //端口号
    port:3306,
    //数据库用户名
    user:"root",
    //用户密码
    password:"root",
    //连接数据库上的那个数据库,指定数据库名
    database:"cqupt",
    //设置最大连接数量
    connectionLimit:20
})

module.exports = pool;