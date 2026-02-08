// =======================
// LOGIN
// =======================

function login(){
bootScreen();
}



// =======================
// BOOT SCREEN
// =======================

function bootScreen(){

document.body.innerHTML=
"<div style='padding:20px'>Booting UltraLegend MAX++...</div>";

document.body.style.background="black";
document.body.style.color="lime";
document.body.style.fontFamily="monospace";

setTimeout(loadDesktop,1500);

}



// =======================
// DESKTOP
// =======================

let selectedIcon=null;

function loadDesktop(){

document.body.innerHTML=`

<canvas id="matrix"></canvas>

<div id="desktop"></div>

<div id="taskbar">
<button onclick="toggleStart()">☰ Start</button>
<button onclick="changeTheme('lime')">Green</button>
<button onclick="changeTheme('red')">Red</button>
<button onclick="changeTheme('cyan')">Blue</button>
</div>

<div id="startMenu" style="display:none">
<button onclick="openTerminal()">💻 Terminal</button>
<button onclick="openEditor()">📝 Editor</button>
<button onclick="createFolder()">📂 New Folder</button>
</div>

<div id="contextMenu" style="display:none">
<div onclick="createFolder()">New Folder</div>
<div onclick="renameSelected()">Rename</div>
<div onclick="deleteSelected()">Delete</div>
</div>

<div id="notification"></div>

`;

applyStyle();
matrixRain();

addIcon("💻 Terminal",20);
addIcon("📁 Files",60);

document.addEventListener("contextmenu",showMenu);

}



// =======================
// STYLE
// =======================

function applyStyle(){

let style=document.createElement("style");

style.innerHTML=`

body{margin:0;color:lime;font-family:monospace;overflow:hidden}

.icon{position:absolute;left:20px;cursor:pointer}

.window{
position:absolute;
top:120px;
left:120px;
width:420px;
height:300px;
background:black;
border:1px solid currentColor
}

.titlebar{
background:#001100;
cursor:move;
display:flex;
justify-content:space-between;
padding:3px
}

#taskbar{
position:fixed;
bottom:0;
width:100%;
background:#001100;
padding:5px
}

#startMenu{
position:fixed;
bottom:30px;
left:0;
background:black;
border:1px solid lime
}

#contextMenu{
position:absolute;
background:black;
border:1px solid lime
}

#notification{
position:fixed;
right:10px;
bottom:50px;
}

`;

document.head.appendChild(style);

}



// =======================
// MATRIX BACKGROUND
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

ctx.fillStyle="currentColor";
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
// ICON SYSTEM
// =======================

function addIcon(name,top){

let icon=document.createElement("div");

icon.className="icon";
icon.innerText=name;
icon.style.top=top+"px";

icon.onclick=function(){

selectedIcon=icon;

if(name.includes("Terminal")) openTerminal();

};

makeDraggable(icon);

document.getElementById("desktop").appendChild(icon);

}

function createFolder(){

addIcon("📂 New Folder",Math.random()*300);

notify("Folder Created");

}



// DRAG

function makeDraggable(el){

let isDown=false;
let offset=[0,0];

el.addEventListener("mousedown",function(e){

isDown=true;
offset=[el.offsetLeft-e.clientX,el.offsetTop-e.clientY];
selectedIcon=el;

});

document.addEventListener("mouseup",()=>isDown=false);

document.addEventListener("mousemove",function(e){

if(isDown){

el.style.left=(e.clientX+offset[0])+'px';
el.style.top=(e.clientY+offset[1])+'px';

}

});

}



// =======================
// CONTEXT MENU
// =======================

function showMenu(e){

e.preventDefault();

let menu=document.getElementById("contextMenu");

menu.style.display="block";
menu.style.left=e.pageX+"px";
menu.style.top=e.pageY+"px";

}

function renameSelected(){

if(selectedIcon){

let newName=prompt("Rename:");

if(newName) selectedIcon.innerText=newName;

}

}

function deleteSelected(){

if(selectedIcon){

selectedIcon.remove();
notify("Deleted");

}

}



// =======================
// WINDOWS
// =======================

function createWindow(title,content){

let win=document.createElement("div");

win.className="window";

win.innerHTML=`

<div class="titlebar">

<span>${title}</span>

<div>
<button onclick="maximizeWindow(this)">⬜</button>
<button onclick="this.closest('.window').remove()">X</button>
</div>

</div>

<div>${content}</div>

`;

document.body.appendChild(win);

makeDraggable(win);

}



// MAXIMIZE

function maximizeWindow(btn){

let win=btn.closest(".window");

win.style.top="0";
win.style.left="0";
win.style.width="100%";
win.style.height="95%";

}



// =======================
// TERMINAL WITH DYNAMIC TEXT
// =======================

function openTerminal(){

createWindow("Terminal",
"<div id='terminalText'></div><input id='cmd' placeholder='type command...'>");

startDynamicTyping();
terminalCommands();

}

function startDynamicTyping(){

let el=document.getElementById("terminalText");

let lines=[
"Initializing system...",
"Scanning memory...",
"Bypassing firewall...",
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

setTimeout(typeLine,500);

}

},40);

}

typeLine();

}

function terminalCommands(){

let input=document.getElementById("cmd");

input.addEventListener("keydown",function(e){

if(e.key==="Enter"){

let el=document.getElementById("terminalText");

let cmd=this.value;

if(cmd==="help") el.innerHTML+="Available: help scan clear<br>";
else if(cmd==="scan") el.innerHTML+="Scanning network...<br>";
else if(cmd==="clear") el.innerHTML="";
else el.innerHTML+="Unknown command<br>";

this.value="";

}

});

}



// =======================
// EDITOR
// =======================

function openEditor(){

createWindow("Editor",
"<textarea style='width:100%;height:220px;background:black;color:lime'></textarea>");

}



// START MENU

function toggleStart(){

let menu=document.getElementById("startMenu");

menu.style.display =
menu.style.display==="none"?"block":"none";

}



// THEME

function changeTheme(color){

document.body.style.color=color;

}



// NOTIFICATION

function notify(text){

let n=document.createElement("div");

n.innerText=text;

document.getElementById("notification").appendChild(n);

setTimeout(()=>n.remove(),2000);

}
