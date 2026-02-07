heading click effect (पहले वाला)
let title = document.getElementById("title");

title.addEventListener("click", function(){

    alert("Hacker mode activated 😎");

    title.innerText = "WELCOME BHAI 🗿✨";

    title.style.color = "red";

    document.body.style.backgroundColor = "black";
});


function login(){

let mobile = document.getElementById("mobile").value;
let email = document.getElementById("email").value;

// empty check
if(mobile === "" || email === ""){
alert("Sab fill kar 😎");
return;
}

// VALID credentials check
if(mobile === "9876543210" && email === "test@gmail.com"){

document.body.innerHTML = "<h1 style='color:lime;'>ACCESS GRANTED 😈</h1>";

}else{

alert("Invalid Credentials ❌");

}

}
