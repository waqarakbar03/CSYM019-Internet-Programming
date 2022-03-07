function myFuction() {
    var element = document.getElementById('circle');
    element.style.backgroundColor = 'blue';
}
function myLoadFuction() {
    var element = document.getElementById('circle');
    element.addEventListener('click', myFuction);
}
document.addEventListener('DOMContentLoaded', myLoadFuction);