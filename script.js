// 😈 MAIN TITLE TYPING
let titleText = "KYA GUNDA BNEGA RE TU";
let titleIndex = 0;

function typeTitle() {
    if (titleIndex < titleText.length) {
        document.getElementById("title").innerHTML += titleText.charAt(titleIndex);
        titleIndex++;
        setTimeout(typeTitle, 100);
    }
}


// 🔥 ACCESSING SYSTEM TYPING
let statusText = "ACCESSING SYSTEM...";
let statusIndex = 0;

function typeStatus() {
    if (statusIndex < statusText.length) {
        document.getElementById("status").innerHTML += statusText.charAt(statusIndex);
        statusIndex++;
        setTimeout(typeStatus, 80);
    }
}


// 🚀 PAGE LOAD
window.onload = function () {
    typeTitle();
    setTimeout(typeStatus, 2000);
};


// 🔥 LOGIN FUNCTION
function login() {

    let mobile = document.getElementById("mobile").value.trim();
    let email = document.getElementById("email").value.trim();

    if (mobile === "" || email === "") {
        alert("Sab fill kar 😎");
        return;
    }

    if (mobile.length !== 10 || isNaN(mobile)) {
        alert("Mobile number 10 digit hona chahiye ❌");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Invalid Email ❌");
        return;
    }

    // 😈 Hacker terminal open
    document.body.innerHTML = `
        <div id="terminal" style="
            background:black;
            color:lime;
            font-family:monospace;
            padding:20px;
            height:100vh;
        ">
            <p id="hackText"></p>
        </div>
    `;

    startHackTyping();
}


// 😈 HACKER TERMINAL DYNAMIC TYPING
let hackLines = [
    "Connecting to device...",
    "Scanning memory sectors...",
    "Injecting exploit...",
    "Accessing private data...",
    "ROOT ACCESS GRANTED 😈"
];

let lineIndex = 0;

function startHackTyping() {

    let hackText = document.getElementById("hackText");

    function typeLine() {

        if (lineIndex < hackLines.length) {

            let text = hackLines[lineIndex];
            let i = 0;

            let typing = setInterval(function(){

                hackText.innerHTML += text.charAt(i);
                i++;

                if(i >= text.length){
                    clearInterval(typing);
                    hackText.innerHTML += "<br>";
                    lineIndex++;
                    setTimeout(typeLine, 800);
                }

            },50);
        }
    }

    typeLine();
}
