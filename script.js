"use strict";

let form = document.getElementById('form');
let visibility = document.getElementById('animate');

let formSubmit = document.getElementById('button-submit');

onload = function() {
    form.style.left = "0px";
    form.style.borderRadius = "0px";
    form.style.transition = "all 2s";
    visibility.style.display = "block";
    visibility.style.transition = "all 2s";
}

const Verification = () => {
    if(document.getElementById('email-value').value === "123@gmail.com" && document.getElementById('password-value').value === "12345"){
        location.href="welcome.html";
    }
    else {
        location.href="error.html";
    }
}

formSubmit.addEventListener('click', Verification);

