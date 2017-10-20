
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.once('open', function (callback) {
    console.log("数据库成功打开");
});

//博客的结构
var animalSchema = new mongoose.Schema({
    "name" : String,
    "type" : String
});

//创建animalSchema的实例方法，找到同类
animalSchema.methods.zhaotonglei = function(callback){
    this.model('Animal').find({"type":this.type},callback);
}

var Animal = mongoose.model('Animal', animalSchema);

//先创建几个动物，并且存储起来(类.create是API)
//Animal.create({"name":"汤姆","type":"猫"});
//Animal.create({"name":"咪咪","type":"猫"});
//Animal.create({"name":"小白","type":"狗"});
//Animal.create({"name":"snoopy","type":"狗"});

//下面的代码在创建动物时是没有的,将动物存储后,将创建动物的代码注释，再执行下面的代码
//(类.findOne是API)找到name=小白的动物并找到他的同类
Animal.findOne({"name":"小白"},function(err,result){
    var dog = result;
    dog.zhaotonglei(function(err,result){
        console.log(result);
    });
});