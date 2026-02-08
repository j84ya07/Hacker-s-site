document.addEventListener("DOMContentLoaded", function(){

document.getElementById("title").innerText = " Kya Gunda banega re tu 😈";

document.getElementById("status").innerText = "System accessing...";

});
function login(){

let mobile=document.getElementById("mobile").value.trim();
let email=document.getElementById("email").value.trim();

if(mobile===""||email===""){
alert("Sab fill kar 😎");
return;
}

if(mobile.length!==10||isNaN(mobile)){
alert("Mobile invalid ❌");
return;
}

if(!email.includes("@")){
alert("Email invalid ❌");
return;
}


// FULL SCREEN TERMINAL UI
document.body.innerHTML=`
<canvas id="matrix"></canvas>

<div id="terminal">
<p id="hackText"></p>
<span id="cursor">_</span>
</div>
`;

applyStyle();
matrixRain();
startHack();
commandInput();
glitchEffect();
phoneVibrate();
}



// STYLE
function applyStyle(){

document.body.style.background="black";
document.body.style.margin="0";
document.body.style.textShadow="0 0 5px lime,0 0 10px lime";

let style=document.createElement("style");

style.innerHTML=`
#terminal{
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
color:lime;
font-family:monospace;
padding:15px;
overflow:auto;
z-index:2;
}
`;

document.head.appendChild(style);

setInterval(()=>{
let c=document.getElementById("cursor");
if(c){
c.style.visibility=c.style.visibility==="hidden"?"visible":"hidden";
}
},500);
}



// MATRIX RAIN
function matrixRain(){

let canvas=document.getElementById("matrix");
let ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let letters="01ABCDEFGHIJKLMNOPQRSTUVWXYZ#$%".split("");
let fontSize=14;
let columns=canvas.width/fontSize;
let drops=[];

for(let i=0;i<columns;i++) drops[i]=1;

function draw(){

ctx.fillStyle="rgba(0,0,0,0.05)";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="#0f0";
ctx.font=fontSize+"px monospace";

for(let i=0;i<drops.length;i++){

let text=letters[Math.floor(Math.random()*letters.length)];
ctx.fillText(text,i*fontSize,drops[i]*fontSize);

if(drops[i]*fontSize>canvas.height && Math.random()>0.975){
drops[i]=0;
}
drops[i]++;
}
}

setInterval(draw,35);
}



// TERMINAL TYPING
function startHack(){

let hackText=document.getElementById("hackText");

let lines=[
"Initializing secure terminal...",
"Connecting to remote node...",
"Scanning system memory...",
"Bypassing security layer...",
"Running password brute-force...",
"Password cracked: ********",
"Decrypting data blocks...",
"Injecting root access...",
"ROOT ACCESS GRANTED 😈"
];

let index=0;

function type(){

if(index>=lines.length) index=0;

let text=lines[index];
let i=0;

let typing=setInterval(()=>{

hackText.innerHTML+=text.charAt(i);
i++;

if(i>=text.length){
clearInterval(typing);
hackText.innerHTML+="<br>";
document.getElementById("terminal").scrollTop=999999;
index++;
setTimeout(type,300);
}

},20);
}

type();
}



// TERMINAL COMMAND INPUT
function commandInput(){

let input=document.createElement("input");

input.placeholder="Enter command...";
input.style.position="fixed";
input.style.bottom="10px";
input.style.left="10px";
input.style.background="black";
input.style.color="lime";
input.style.border="1px solid lime";
input.style.fontFamily="monospace";

input.onkeydown=function(e){

if(e.key==="Enter"){
document.getElementById("hackText").innerHTML+=
"> "+input.value+"<br>Command executed 😈<br>";
input.value="";
}

};

document.body.appendChild(input);
}



// GLITCH EFFECT
function glitchEffect(){

setInterval(()=>{
document.body.style.filter="hue-rotate(90deg)";
setTimeout(()=>{
document.body.style.filter="none";
},100);
},5000);

}



// FAKE VIBRATION
function phoneVibrate(){

setInterval(()=>{

document.body.style.transform="translateX(5px)";

setTimeout(()=>{
document.body.style.transform="translateX(-5px)";
},50);

setTimeout(()=>{
document.body.style.transform="translateX(0px)";
},100);

},6000);

}
