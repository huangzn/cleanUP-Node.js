var express = require("express");
var app = express();
var session = require("express-session");

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));

// 访问/时,会将请求发向服务器,会找对应的生成的session(存在服务器中)
app.get("/",function(req,res){
	if(req.session.login == "1"){
		res.send("欢迎" + req.session.username);
	}else{
		res.send("没有成功登陆");
	}
});

// 访问login页面时,产生session乱码,存入服务器,session乱码指向{
// 	'login':1,
// 	'username':'考拉'
// }
// 注意session是会话级别的,服务器一旦重启,session就消失了
app.get("/login",function(req,res){
	req.session.login = "1";	//设置这个session
	req.session.username = "考拉";
	res.send("你已经成功登陆");
});

app.listen(3000);