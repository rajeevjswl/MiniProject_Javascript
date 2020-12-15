(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){(function (){

var func2=require('./file2.js');
global.result=function (o1,operator,o2){
	if(operator=="+")
  document.getElementById("display").innerHTML = "Result= "+add(o1,o2);   
  else if(operator=="-")
  document.getElementById("display").innerHTML = "Result= "+sub(o1,o2); 
if(operator=="*")
  document.getElementById("display").innerHTML = "Result= "+func2.multiply(o1,o2);   
  else if(operator=="/")
  document.getElementById("display").innerHTML = "Result= "+func2.divide(o1,o2);
}
add=function(o1,o2){
	return Number(o1)+Number(o2);
}
sub=function(o1,o2){
	return Number(o1)-Number(o2);
};

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./file2.js":2}],2:[function(require,module,exports){

multiply=function(o1,o2){
	return Number(o1)*Number(o2);
}
divide=function(o1,o2){
	return Number(o1)/Number(o2);
	}
exports.multiply=multiply;
exports.divide=divide;
},{}]},{},[1,2]);
