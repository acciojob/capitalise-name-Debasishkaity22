//your JS code here. If required.
let input1=document.getElementById("fname");
input1.addEventListener("blur",function(){
	input1.value=input1.value.toUpperCase();
})