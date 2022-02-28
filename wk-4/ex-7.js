function ClickFunction() {
    var element = document.getElementById('myinput');
    alert(element.value);
}

function myFunction() {
    var element = document.getElementById('mybutton');
    element.addEventListener('click', ClickFunction);

}

document.addEventListener('DOMContentLoaded', myFunction);