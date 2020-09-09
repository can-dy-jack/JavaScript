var Account = prompt("登录账户");  
var PassWord;
if(Account == 0){
	alert("找不到该账户！");
}else {
	PassWord = prompt("输入密码");//接收信息
}
if(PassWord == 0){
	alert("密码错误");
}