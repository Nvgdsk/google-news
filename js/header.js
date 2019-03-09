let menu_button = document.getElementsByClassName('hitem')[0];
let elem = document.getElementById("opensing");
let elem1 = document.getElementsByClassName("modal")[0];
function open_left_menu() {

    if (document.getElementsByClassName('leftbar')[0].style.left === "-280px") {

        document.getElementsByClassName('leftbar')[0].style= "display: block;left: 0;";


        document.getElementsByClassName('content')[0].style = "margin: 0 auto;";
    }
    else {

        document.getElementsByClassName('leftbar')[0].style= "display: block;left: -280px;";
        document.getElementsByClassName('content')[0].style = "margin: 0 auto;";
    }

}
function openmodal() {
    document.getElementsByClassName("modal-content")[0].style = ("display:block");
    document.getElementsByClassName("modal")[0].style = ("display:block");

}

function closemodal() {
    document.getElementsByClassName("modal-content")[0].style = ("display:none");
    document.getElementsByClassName("modal")[0].style = ("display:none;");

}
elem.onclick = openmodal;
elem1.onclick = closemodal;
menu_button.onclick = open_left_menu;