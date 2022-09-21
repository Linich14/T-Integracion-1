
var fontSize = 1;

function zoomIn() {
    fontSize += 0.1;
    body = document.getElementById('body')
    body.style.fontSize = fontSize + "em";
}

function zoomOut() {
    fontSize -= 0.1;
    body = document.getElementById('body')
    body.style.fontSize = fontSize + "em";
}
