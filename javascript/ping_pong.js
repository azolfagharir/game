let x = 0; // Initial value of x
let speed = 1000; // Speed in milliseconds. 1000ms = 1 second
const ball = document.querySelector(".");
let intervalId = setInterval(function() {
  x += 1; 
  console.log(x); 
}, speed);


var canvas = document.querySelectror("myCanvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI*2);
ctx.fillstyle = "#0095DD";
ctx.fillstyle();
ctx.closePath();

ctx.beginPath();
ctx.rect(20, 150, 10, 75);
ctx.fillstyle();
ctx.closePath();

ctx.beginPath();
ctx.rect(450, 150, 10, 75);
ctx.fillStyle =  "#0095DD";
ctx.fillStyle();
ctx.closePath();