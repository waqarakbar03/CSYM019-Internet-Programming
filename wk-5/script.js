function myFuction() {
    var element = document.getElementById('circle');
    element.style.backgroundColor = 'blue';
    element.style.opacity = '1';
}
function myLoadFuction() {
    var element = document.getElementById('circle');
    element.addEventListener('click', myFuction);
}
document.addEventListener('DOMContentLoaded', myLoadFuction);