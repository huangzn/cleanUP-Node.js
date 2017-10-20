/**
 * Created by Danny on 2015/9/22 9:22.
 */
 // 引用express模块
var express = require("express");
// 调用express模块
var app = express();

// 通过get方式请求默认地址时，返回给客户端‘你好’
app.get("/",function(req,res){
    res.send("你好");
});
// 通过get方式请求haha地址时
app.get("/haha",function(req,res){
    res.send("这是haha页面，哈哈哈哈哈哈");
});

app.get(/^\/student\/([\d]{10})$/,function(req,res){
    res.send("学生信息，学号" + req.params[0]);
});
// 通过get方式请求/teacher/:gonghao地址,:gonghao为变量名称，可以通过req.params.gonghao得到
app.get("/teacher/:gonghao",function(req,res){
    res.send("老师信息，工号" + req.params.gonghao);
});

// 监听的地址，默认为127.0.0.1，端口号这里设置为3000
app.listen(3000);