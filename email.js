'use strict'

var form = document.querySelector(".form");
var butn = document.querySelector(".button");
var email = document.querySelector(".email");
var reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

var textError = document.createTextNode("");
form.appendChild(textError);

butn.onclick = func;

function func() {
    if (!email.value) {
        textError.nodeValue = "Сперва введите e-mail";
    }
    else if (reg.test(email.value) == false) {
        textError.nodeValue = "Введите корректный e-mail";
    }
    else 
        {
            textError.nodeValue = "Отправлено";
        }
        
}