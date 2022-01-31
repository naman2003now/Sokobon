import { Levels } from "./levels.js"

var gridSize = 6

var canvas = document.getElementById("root")


document.body.style.setProperty('--grid-size', gridSize);

document.getElementById("container").innerHTML = Levels.map_to_html(Levels.levels[0].map)

setInterval(() => {
    document.body.style.height = "" + window.innerHeight+ "px"
    document.body.style.wdith = "" + window.innerWidth + "px"
    canvas.style.width = "" + Math.min(window.innerHeight, window.innerWidth) + "px"
    canvas.style.height = "" + Math.min(window.innerHeight, window.innerWidth) + "px"
}, 0)
