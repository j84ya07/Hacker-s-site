 window.onload = function(){

let title = document.getElementById("title");

title.addEventListener("click", function(){

    alert("Hacker mode activated 😎");

    title.innerText = "Aur bhai kya haal chaal";

    title.style.color = "red";

    document.body.style.backgroundColor = "black";

});

};
function login(){

let mobile = document.getElementById("mobile").value;
let email = document.getElementById("email").value;

alert("Mobile: " + mobile + "\nEmail: " + email);

}
