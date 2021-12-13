$(document).ready(function () {
    tabmenu(0)
});

var lateraltabsbutton = document.querySelectorAll(".my-panel-button-content button");
var lateraltabspanel = document.querySelectorAll(".my-panel-content .my-panel");

function tabmenu(menuIndex) {
    lateraltabsbutton.forEach(function (node) {
        node.style.color = "";
        node.style.color = "";
        node.style.backgroundColor = "";
    })

    lateraltabsbutton[menuIndex].style.color = "#f2f2f2";
    lateraltabsbutton[menuIndex].style.backgroundColor = "#62647e";
    
    lateraltabspanel.forEach(function (node) {
        node.style.display = "none";
    })
    lateraltabspanel[menuIndex].style.display = "block";
}