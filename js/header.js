var menu_button = document.getElementsByClassName('hitem')[0];

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

menu_button.onclick = open_left_menu;