function myFuction() {
    var element = document.getElementById('circle');
    var circleOpacity = parseFloat(element.style.opacity)
    element.style.opacity = circleOpacity - 0.01;
    setInterval(myFuction, 1000);
}
function myLoadFuction() {
    var element = document.getElementById('circle');
    element.style.opacity = '1'
    element.addEventListener('click', myFuction);
}
document.addEventListener('DOMContentLoaded', myLoadFuction);