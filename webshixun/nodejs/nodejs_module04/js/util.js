//封装Ajax异步请求,如果是get请求,带参数时直接传递完整URL
//如果是带参数的post请求,需设置请求头并放在请求体中传递
/*
    参数介绍
    method:暂时只考虑 get/post
    url:请求地址
    data:请求数据
*/

function sendRequest(method,url,data){
    var xhr=new XMLHttpRequest()
    //2.监听对象的改变,xhr.readyState属性会返回0,1,2,3,4,代表不同状态,4代表服务器端响应属性下载完毕
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4&& xhr.status==200){
            console.log(xhr.responseText)
        }
    }
    xhr.open(method,url)
    //设置请求头并发送数据
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded")
    if(method=="post"&&data){
        //如果是带参数的post请求,将数据放在请求体中携带传输
        xhr.send(data)
        return;
    }
    xhr.send()
}