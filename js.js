'use strict'

var divel = document.getElementById('dropdownul');
var divel2 = document.getElementById('dropdownul2');

function fun(){
    var a = divel.classList.toggle('hidden');
    divel2.classList.add('hidden');
    if(a){
        document.getElementById("a").src = "images/icon-arrow-down.svg";
    }else{
        document.getElementById("a").src = "images/icon-arrow-up.svg";
    }
};
function fun2(){
   var s = divel2.classList.toggle('hidden');
    divel.classList.add('hidden');
    if(s){
        document.getElementById("s").src = "images/icon-arrow-down.svg";
    }else{
        document.getElementById("s").src = "images/icon-arrow-up.svg";
    }
};


document.getElementById('qq').addEventListener('click', fun);
document.getElementById('qq2').addEventListener('click', fun2);
