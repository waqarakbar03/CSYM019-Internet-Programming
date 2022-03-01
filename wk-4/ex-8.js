function ClickFunction() {
    var element = document.getElementById('myinput');
    var div = document.getElementById('result');
    div.firstChild.nodeValue = element.value;
}

function myFunction() {
    var element = document.getElementById('mybutton');
    element.addEventListener('click', ClickFunction);

}

document.addEventListener('DOMContentLoaded', myFunction);