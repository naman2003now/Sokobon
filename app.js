import { Levels } from "./levels.js"

var gridSize = 6

var canvas = document.getElementById("root")


document.body.style.setProperty('--grid-size', gridSize);

document.getElementById("container").innerHTML = Levels.map_to_html(Levels.levels[0].map)

document.body.style.height = "" + window.innerHeight+ "px"
document.body.style.wdith = "" + window.innerWidth + "px"
canvas.style.width = "" + Math.min(window.innerHeight, window.innerWidth) + "px"
canvas.style.height = "" + Math.min(window.innerHeight, window.innerWidth) + "px"

window.onresize = () => {
    document.body.style.height = "" + window.innerHeight+ "px"
    document.body.style.wdith = "" + window.innerWidth + "px"
    canvas.style.width = "" + Math.min(window.innerHeight, window.innerWidth) + "px"
    canvas.style.height = "" + Math.min(window.innerHeight, window.innerWidth) + "px"
}

function move(animation, x, y){
    let player = document.getElementsByClassName("player")[0]
    let coord = player.id.split(",")
    if(document.getElementById("" + (parseInt(coord[0]) + x)+ "," + (parseInt(coord[1]) + y)).classList.length > 1){
        player.style.animation = animation + "Deny 0.05s alternate 2"
        setTimeout(() => {
            player.style.animation = ""
        }, 100)
    }
    else{
        player.style.animation = animation + " 0.1s alternate 2"
        setTimeout(() => {
            player.style.animation = ""
            player.classList.remove("player")
            document.getElementById("" + (parseInt(coord[0]) + x)+ "," + (parseInt(coord[1]) + y)).classList.add("player")
        }, 100)
    }
}

window.onkeydown = (event) => {
    switch(event.key){
        case "d":
            move("moveRight", 1, 0)
            break
        case "a":
            move("moveLeft", -1, 0)
            break
        case "w":
            move("moveUp", 0, -1)
            break
        case "s":
            move("moveDown", 0, 1)
            break
    }
}
