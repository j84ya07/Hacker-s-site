// =======================
// PAGE LOAD
// =======================

document.addEventListener("DOMContentLoaded", function(){

document.getElementById("title").innerText =
"Kya Gunda banega re tu 😈";

startStatusTyping();


// COUNTRY SELECTOR

let phoneInput=document.querySelector("#mobile");

window.intlTelInput(phoneInput,{
initialCountry:"in",
separateDialCode:true,
preferredCountries:["in","us","gb"]
});

});



// =======================
// STATUS TYPING
// =======================

function startStatusTyping(){

let text="System accessing...";
let el=document.getElementById("status");

let i=0;

let typing=setInterval(()=>{

el.innerHTML+=text.charAt(i);

i++;

if(i>=text.length) clearInterval(typing);

},80);

}



// =======================
// LOGIN FUNCTION
// =======================

function login(){

let phoneInput=document.querySelector("#mobile");
let iti=window.intlTelInputGlobals.getInstance(phoneInput);

let mobile=phoneInput.value.trim();
let email=document.getElementById("email").value.trim();

if(mobile===""||email===""){
alert("Sab fill kar 😎");
return;
}

if(!iti.isValidNumber()){
alert("Invalid number ❌");
return;
}

if(!email.includes("@")){
alert("Email invalid ❌");
return;
}


// DEMO LOGIN CHECK

if(email==="test@gmail.com"){

loadHackerMode();

}else{

alert("Invalid Credentials ❌");

}

}



// =======================
// HACKER INTERFACE
// =======================

function loadHackerMode(){

document.body.innerHTML=`

<canvas id="matrix"></canvas>

<div id="terminal">
<p id="hackText"></p>
<span id="cursor">_</span>
</div>

`;

applyStyle();
matrixRain();
startTerminalTyping();
blinkCursor();

}



// =======================
// STYLE
// =======================

function applyStyle(){

document.body.style.background="black";
document.body.style.color="lime";
document.body.style.fontFamily="monospace";

}



// =======================
// MATRIX RAIN
// =======================

function matrixRain(){

let canvas=document.getElementById("matrix");
let ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let letters="01ABCDEF".split("");
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



// =======================
// TERMINAL TYPING
// =======================

function startTerminalTyping(){

let el=document.getElementById("hackText");

let lines=[

"Initializing secure terminal...",
"Connecting to remote server...",
"Scanning memory sectors...",
"Bypassing firewall...",
"Decrypting encrypted files...",
"ACCESS GRANTED 😈"

];

let index=0;

function typeLine(){

if(index>=lines.length) return;

let text=lines[index];
let i=0;

let typing=setInterval(()=>{

el.innerHTML+=text.charAt(i);
i++;

if(i>=text.length){

clearInterval(typing);

el.innerHTML+="<br>";

window.scrollTo(0,document.body.scrollHeight);

index++;

setTimeout(typeLine,500);

}

},30);

}

typeLine();

}



// =======================
// BLINKING CURSOR
// =======================

function blinkCursor(){

setInterval(()=>{

let c=document.getElementById("cursor");

if(c){

c.style.visibility=
c.style.visibility==="hidden"?"visible":"hidden";

}

},500);

}
