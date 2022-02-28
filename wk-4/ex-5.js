function myClickFunction_H() {
    var element1 = document.getElementById('page_heading');
    element1.firstChild.nodeValue = 'New heading';
}
function myClickFunction_P() {
    var element2 = document.getElementById('paragraph');
    element2.firstChild.nodeValue = 'New paragraph';
}

function myFunction() {
    var element1 = document.getElementById('page_heading');
    element1.addEventListener('click', myClickFunction_H);

    var element2 = document.getElementById('paragraph');
    element2.addEventListener('click', myClickFunction_P);


}

document.addEventListener('DOMContentLoaded', myFunction);