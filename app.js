//ff595e RED
//ffca3a YELLOW
//8ac926 GREEN
//1982c4 BLUE

var gridSize = 6

var canvas = document.getElementById("root")
var element ='<div class="cell animated"></div>'
for(let i = 0; i < gridSize*gridSize - 1; i++){
    element += '<div class="cell"></div>'
}

document.body.style.setProperty('--grid-size', gridSize);

document.getElementById("container").innerHTML = element

setInterval(() => {
    document.body.style.height = "" + window.innerHeight+ "px"
    document.body.style.wdith = "" + window.innerWidth + "px"
    canvas.style.width = "" + Math.min(window.innerHeight, window.innerWidth) + "px"
    canvas.style.height = "" + Math.min(window.innerHeight, window.innerWidth) + "px"
}, 0)
