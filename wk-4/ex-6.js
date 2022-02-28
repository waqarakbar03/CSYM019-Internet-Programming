function myClickFunction_H() {
    var element1 = document.getElementById('page_heading');
    element1.firstChild.nodeValue = 'New heading';
}
function myClickFunction_P() {
    var element2 = document.getElementById('paragraph');
    element2.firstChild.nodeValue = 'New paragraph';
}


function ClickFunction_H() {
    var element1 = document.getElementById('page_heading');
    element1.firstChild.nodeValue = 'page_heading';
}
function ClickFunction_P() {
    var element2 = document.getElementById('paragraph');
    element2.firstChild.nodeValue = 'paragraph';
}

function myFunction() {
    var element1 = document.getElementById('page_heading');
    element1.addEventListener('mouseenter', myClickFunction_H);

    var element2 = document.getElementById('paragraph');
    element2.addEventListener('mouseenter', myClickFunction_P);


    var element1 = document.getElementById('page_heading');
    element1.addEventListener('mouseout', ClickFunction_H);

    var element2 = document.getElementById('paragraph');
    element2.addEventListener('mouseout', ClickFunction_P);


}

document.addEventListener('DOMContentLoaded', myFunction);