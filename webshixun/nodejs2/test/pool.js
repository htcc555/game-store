// mysql模块封装了与数据库服务器连接并执行SQL操作的方法
// 引入mysql模块，
const mysql = require("mysql");
// 创建连接池对象,负责连接数据库，执行sql语句的对象
const pool = mysql.createPool({
    host:"127.0.0.1",
    // 如果修改过端口号，使用哪个端口号就填写哪个端口号
    port:3306,
    user:"root",
    // 有密码写密码
    password:"root",
    // 连接数据库服务器上哪个数据库,指定库名
    database:"tree",
    // 设置最大连接数量
    connectionLimit:20
});

module.exports = pool;
