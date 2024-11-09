
// Pin Navigation and cover Button Up
window.onscroll = function () { myFunction() };

var header = document.getElementById("nav");
var buttup = document.getElementById("buttonup");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        buttup.classList.remove("visible");
    } else {
        header.classList.remove("sticky");
        buttup.classList.add("visible");
    }
}

// Open & close <p> in the "60-30-10 rule" section

function openP(type1, type2){
    param1 = document.getElementById(type1);
    param2 = document.getElementById(type2);
    if(param1.style.display == "none") {
        param1.style.display = "block";
        param2.classList.add("rule-open-img");
    } else {
        param1.style.display = "none";
        param2.classList.remove("rule-open-img");
    }
}


// Open optional window for download

$(document).ready(function(){
    $("#but-qr").click(function(){
        $("#qr-window-id").animate({
            height: 'toggle'
        });
    });
}); 
