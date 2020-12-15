
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
