//题目：
function Person(name,age,gender){
	this.name = name,
	this.age = age,
	this.gender = gender
}
var per = new Person("j",14,"a");
var per2 = new Person("a",21,"v");
var per3 = new Person("c",31,"v");
var per4 = new Person("k",14,"v");
var arr = new Array(per,per2,per3,per4);
//题目：将未满18岁的挑出来并返回。

var num = 0;

function getAdult(){
	for(var i = 0;i<arr.length;i++){
		if(arr[i].age >= 18){
			num++;
			console.log(arr[i]);
		}
	}
}
getAdult();

//方法2 ——老师答案
num = 0;
function getAdult2(ar){
	var ar2 = [];
	for(i = 0;i<ar.length;i++){
		if(ar[i].age >= 18){
			ar2.push(ar[i]);
		}
	}
	return ar2;
}
var result = getAdult2(arr);
console.log(result);