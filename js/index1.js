function showMessage(){
    console.log('Я учу JavaScript!');
}
showMessage();

let image = document.getElementById('slider-img');
function btnLeft(){
image.src = 'img/caption.jpg';
}
function btnRight(){
    image.src = 'img/road.jpg';
}