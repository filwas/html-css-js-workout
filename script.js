
COLOURS = ["red", "green", "blue", "cyan", "magenta", "yellow", "black"];
function changeBorderColourRandomly() {
    let random = Math.floor(Math.random()*COLOURS.length)
    document.querySelector(".box").style.borderColor = COLOURS[random];
}

setInterval(changeBorderColourRandomly, 3000)