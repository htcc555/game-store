请求方式
get:浏览器地址栏发起请求的一律是get请求
<form action="" methods=""></form>
post:涉及到隐私数据,或者二进制数据(文件,图片,音频视频等),必须通过post传递

可以通过html表单元素发起get/post请求

updata/delete:这两者需前后端商定使用,前端需要借助Ajax或其他请求方法来实现

2.参数携带
    1)以查询字符串(querystring)方式携带传输,与get请求配合使用,以键值对的形式拼接地址
    后携带传输接口
    地址?key=value&key=value
    例:http://127.0.0.1:3000/detail?proId=5&time=1661654654
    2)放在请求体中携带传输,常见与post请求,以json的形式携带传输