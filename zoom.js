const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const imgToScale = document.getElementById('zoom-this-image');
const zoomResult = document.getElementById('zoomResult');
zoomResult.style.display = 'none';

function useImage1() {
    imgToScale.src = './images/img1.jpeg';
    zoomResult.style.backgroundImage = 'url("./images/img1.jpeg")';
}

function useImage2() {
    imgToScale.src = './images/img2.jpeg';
    zoomResult.style.backgroundImage = 'url("./images/img2.jpeg")';
}

function useImage3() {
    imgToScale.src = './images/img3.jpeg';
    zoomResult.style.backgroundImage = 'url("./images/img3.jpeg")';
}

function zoomIn(event) {
    const element = document.getElementById('zoomResult');
    element.style.display = 'inline-block';
    const img = document.getElementById('zoom-this-image');
    let posX = event.offsetX ? (event.offsetX) : event.pageX - img.offsetLeft;
    let posY = event.offsetY ? (event.offsetY) : event.pageY - img.offsetTop;
    element.style.backgroundPosition = ( -posX / 1.7 ) + 'px ' + ( -posY / 1.3 ) + "px";
    element.style.transform = 'scale(2.0)';
    element.style.marginLeft = '97px';
    element.style.marginTop = '50px';
    element.style.width = '180px';
    element.style.height = '100px';
}

function zoomOut(event) {
    const element = document.getElementById('zoomResult');
    element.style.display = 'none';
}