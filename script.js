// 😈 TITLE TYPING ANIMATION
let titleText = "KYA GUNDA BNEGA RE TU";
let titleIndex = 0;

function typeTitle() {
    if (titleIndex < titleText.length) {
        document.getElementById("title").innerHTML += titleText.charAt(titleIndex);
        titleIndex++;
        setTimeout(typeTitle, 100);
    }
}


// 🔥 STATUS TYPING
let statusText = "ACCESSING SYSTEM...";
let statusIndex = 0;

function typeStatus() {
    if (statusIndex < statusText.length) {
        document.getElementById("status").innerHTML += statusText.charAt(statusIndex);
        statusIndex++;
        setTimeout(typeStatus, 80);
    }
}


// 🚀 PAGE LOAD START
window.onload = function () {
    typeTitle();
    setTimeout(typeStatus, 2000);
};


// 🔥 FINAL LOGIN FUNCTION
function login() {

    let mobile = document.getElementById("mobile").value.trim();
    let email = document.getElementById("email").value.trim();

    // empty check
    if (mobile === "" || email === "") {
        alert("Sab fill kar 😎");
        return;
    }

    // mobile must be 10 digits
    if (mobile.length !== 10 || isNaN(mobile)) {
        alert("Mobile number 10 digit hona chahiye ❌");
        return;
    }

    // simple email validation
    if (!email.includes("@") || !email.includes(".")) {
        alert("Invalid Email ❌");
        return;
    }

    // SUCCESS
    document.body.innerHTML =
        "<h1 style='color:lime;text-align:center;'>ACCESS GRANTED 😈</h1>";
}
