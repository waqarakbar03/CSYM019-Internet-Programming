function myFuction() {
    var element = document.getElementById('circle');
    var circleOpacity = parseFloat(element.style.opacity)
    element.style.opacity = circleOpacity + 0.1;
}
function myLoadFuction() {
    var element = document.getElementById('circle');
    element.style.opacity = '0.5'
    element.addEventListener('click', myFuction);
}
document.addEventListener('DOMContentLoaded', myLoadFuction);