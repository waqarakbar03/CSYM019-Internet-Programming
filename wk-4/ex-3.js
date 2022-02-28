function myFunction() {
    var element = document.getElementById('page_heading');
    element.firstChild.nodeValue = 'New heading';
}
document.addEventListener('DOMContentLoaded', myFunction);