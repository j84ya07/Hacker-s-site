// 😎 Hacker typing animation (optional - heading auto type)
let text = "ACCESSING SYSTEM...";
let index = 0;
let title = document.getElementById("title");

function typeEffect(){
    if(title && index < text.length){
        title.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect,100);
    }
}
typeEffect();


// 🔥 FINAL LOGIN FUNCTION
function login(){

let mobile = document.getElementById("mobile").value.trim();
let email = document.getElementById("email").value.trim();

// empty check
if(mobile === "" || email === ""){
    alert("Sab fill kar 😎");
    return;
}

// valid credentials check
if(mobile === "9876543210" && email === "test@gmail.com"){

    document.body.innerHTML = "<h1 style='color:lime; text-align:center;'>ACCESS GRANTED 😈</h1>";

}else{

    alert("Invalid Credentials ❌");

}

}
