// heading click effect (पहले वाला)
let title = document.getElementById("title");

title.addEventListener("click", function(){

    alert("Hacker mode activated 😎");

    title.innerText = "WELCOME BHAI 🗿✨";

    title.style.color = "red";

    document.body.style.backgroundColor = "black";
});


// 🔥 Login function (final)
function login(){

let mobile = document.getElementById("mobile").value;
let email = document.getElementById("email").value;

// validation
if(mobile === "" || email === ""){
    alert("Sab fill kar bhai 😎");
    return;
}

// fake hacker loading
document.body.innerHTML = "<h1 style='color:lime;'>ACCESS GRANTED 😈</h1>";

}
