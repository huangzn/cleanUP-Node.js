// crypto为node自带的加密包
var crypto = require("crypto");

// 这里是md5的多次加密
console.log(md5(md5("123456").substr(11,7) + md5("123456")));

function md5(mingma){
	//createHash为选择加密的方式,我们选择md5方式
	var md5 = crypto.createHash('md5');
	//update为要加密(更新的内容)   digest为将md5码进行整理，base64为整理为64位。
	var password = md5.update(mingma).digest('base64');
	return password;
}