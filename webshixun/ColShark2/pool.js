/**
 * 作用于数据库连接
 * 创建时间:23/8/18
 * 开发者:WLT
 */

const mysql = require('mysql')
const pool = mysql.createPool({
    host:'127.0.0.1',
    port:3306,
    user:"root",
    password:"root",
    database:"cqupt",
    connectionLimit:20
})

module.exports = pool