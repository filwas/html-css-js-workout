
function changeBorderColour() {
    let colours = ["red", "green", "blue", "cyan", "magenta", "yellow", "black"];
    let random = Math.floor(Math.random()*colours.length)
    document.getElementsByClassName("box")[0].style.borderColor = colours[random];
}

setInterval(changeBorderColour, 3000)