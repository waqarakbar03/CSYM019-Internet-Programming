function myFunction() {
    var element1 = document.getElementById('page_heading');
    element1.firstChild.nodeValue = 'New heading';
    var element2 = document.getElementById('paragraph');
    element2.firstChild.nodeValue = 'New paragraph';
}
document.addEventListener('DOMContentLoaded', myFunction);