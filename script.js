// =======================
// GLOBAL PHONE INSTANCE
// =======================

let iti;


// =======================
// PAGE LOAD
// =======================

document.addEventListener("DOMContentLoaded", function(){

document.getElementById("title").innerText =
"Kya Gunda banega re tu 😈";

startStatusTyping();

let phoneInput=document.querySelector("#mobile");

iti = window.intlTelInput(phoneInput,{
initialCountry:"in",
separateDialCode:true,
preferredCountries:["in","us","gb"]
});

});



// STATUS TYPING

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
// LOGIN
// =======================

function login(){

let phoneInput = document.querySelector("#mobile");

// intlTelInput instance
let itiInstance = window.intlTelInputGlobals.getInstance(phoneInput);

let fullNumber = itiInstance.getNumber(); // full number with country code
let email = document.getElementById("email").value.trim();


// 😈 EMPTY CHECK
if(fullNumber === "" || email === ""){
alert("Sab fill kar 😎");
return;
}


// 🔥 ALL COUNTRY VALIDATION
if(!itiInstance.isValidNumber()){
alert("Invalid number according to selected country ❌");
return;
}


// 🇮🇳 INDIA EXTRA VALIDATION
let countryData = itiInstance.getSelectedCountryData();

if(countryData.iso2 === "in"){

let localNumber = fullNumber.replace("+91","");

let indiaPattern = /^[6-9]\d{9}$/;

if(!indiaPattern.test(localNumber)){
alert("Invalid Indian mobile number ❌");
return;
}

}


// 📧 EMAIL CHECK
if(!email.includes("@")){
alert("Email invalid ❌");
return;
}


// 😈 LOGIN SUCCESS (tera existing hacker mode)
loadHackerMode();

}


// =======================
// HACKER MODE
// =======================

function loadHackerMode(){

document.body.innerHTML=`

<canvas id="matrix"></canvas>

<div id="terminal" style="position:fixed;top:0;left:0;width:100%;height:100%;padding:15px;color:lime;font-family:monospace;overflow:auto;z-index:2;">
<p id="hackText"></p>
<input id="cmd" placeholder="type command..." style="background:black;color:lime;border:1px solid lime;width:100%">
<span id="cursor">_</span>
</div>

`;

applyStyle();
matrixRain();
startTerminalTyping();
blinkCursor();
terminalCommands();
autoScroll();

}



// STYLE

function applyStyle(){

document.body.style.background="black";
document.body.style.color="lime";
document.body.style.fontFamily="monospace";

}



// MATRIX RAIN

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



// TERMINAL TYPING

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
index++;
setTimeout(typeLine,400);

}

},30);

}

typeLine();

}



// BLINK CURSOR

function blinkCursor(){

setInterval(()=>{

let c=document.getElementById("cursor");

if(c){

c.style.visibility=
c.style.visibility==="hidden"?"visible":"hidden";

}

},500);

}



// AUTO SCROLL

function autoScroll(){

setInterval(()=>{

let terminal=document.getElementById("terminal");

if(terminal){
terminal.scrollTop=terminal.scrollHeight;
}

},200);

}



// TERMINAL COMMANDS

function terminalCommands(){

document.getElementById("cmd").addEventListener("keydown",function(e){

if(e.key==="Enter"){

let value=this.value.trim().toLowerCase();

let output=document.getElementById("hackText");

if(value==="help"){
output.innerHTML+="Available: help scan hack clear<br>";
}
else if(value==="scan"){
output.innerHTML+="Scanning network... OK 😈<br>";
}
else if(value==="hack"){
output.innerHTML+="Injecting payload... ROOT ACCESS 😈<br>";
}
else if(value==="clear"){
output.innerHTML="";
}
else{
output.innerHTML+="Unknown command<br>";
}

this.value="";

}

});

            }
