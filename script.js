 window.onload = function(){

let title = document.getElementById("title");

title.addEventListener("click", function(){

    alert("Hacker mode activated 😎");

    title.innerText = "Aur bhai kya haal chaal";

    title.style.color = "red";

    document.body.style.backgroundColor = "black";

});

};
