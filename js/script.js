// text change
function textChange(){
	document.getElementById('h2').innerHTML = "hello there!";
}
// bulb on
function bulbOn(){
	document.getElementById('bulb').src = "img/bulb_on.gif";
}
// bulb off
function bulbOff(){
	document.getElementById('bulb').src = "img/bulb_off.gif";
}
// contentChange
function contentChangeQue(){
	document.getElementById('pc').innerHTML = "What is your name?";
	document.getElementById('pc').style.display ="block";
}
function contentChange(){
	document.getElementById('pc').innerHTML = "hi! i am minhazul islam";
}
// color change
function colorChange(){
	document.getElementById('clr').style.color = "red";
}
// dubble click
function dubbleClick(){
	document.getElementById('ddbl').innerHTML = "Lorem Ipsum is simply dummy text of the printing"
}
// img hover
function imgNormal(x){
	x.style.height = "32px";
	x.style.width = "32px";
}
function imgBig(x){
	x.style.height = "60px";
	x.style.width = "60px";
}
// text color multiple
function multiColorBlack(x){
	x.style.color = "black";
	x.style.display = "inline"
}
function multiColorBlue(x){
	x.style.color = "blue";
}
function multiColorRed(x){
	x.style.color = "red";
}