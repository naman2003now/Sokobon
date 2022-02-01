import { Levels } from "./levels.js"

var canvas = document.getElementById("root")
var currentLevel = 0;
newLevel()

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

function newLevel() {
    currentLevel++
    document.body.style.setProperty("--grid-size", Levels.levels[currentLevel - 1].gridSize)
    document.getElementById("container").innerHTML = Levels.map_to_html(Levels.levels[currentLevel - 1].map)
}

function reload(){
    document.body.style.setProperty("--grid-size", Levels.levels[currentLevel - 1].gridSize)
    document.getElementById("container").innerHTML = Levels.map_to_html(Levels.levels[currentLevel - 1].map)
}

function move(animation, x, y){
    let player = document.getElementsByClassName("player")[0]
    let coord = player.id.split(",")
    let nextCell = document.getElementById("" + (parseInt(coord[0]) + x)+ "," + (parseInt(coord[1]) + y))
    if(nextCell.classList.contains("wall")){
        player.style.animation = animation + "Deny 0.05s alternate 2"
        setTimeout(() => {
            player.style.animation = ""
        }, 100)
    }
    else if(nextCell.classList.contains("box-red") || nextCell.classList.contains("box-green")){
        let nextNextCell = document.getElementById("" + (parseInt(coord[0]) + x + x)+ "," + (parseInt(coord[1]) + y + y))
        if(nextNextCell.classList.contains("wall")){
            player.style.animation = animation + "Deny 0.05s alternate 2"
            setTimeout(() => {
                player.style.animation = ""
            }, 100)
        }else{
            player.style.animation = animation + " 0.1s alternate 2"
            setTimeout(() => {
                player.style.animation = ""
                player.classList.remove("player")
                nextCell.classList.add("player")
            }, 100)
            nextCell.style.animation = animation + " 0.1s alternate 2"
            setTimeout(() => {
                nextCell.style.animation = ""
                nextCell.classList.remove("box-red")
                nextNextCell.classList.add("box-red")

                let levelOver = true
                let allGoals = document.getElementsByClassName("goal")
                for(let i  = 0; i < allGoals.length; i++){
                    if(allGoals[i].classList.contains("box-red")){
                        allGoals[i].classList.replace("box-red", "box-green")
                    }else{
                        levelOver = false
                    }
                }
                if(levelOver){
                    newLevel()
                }
            }, 100)
        }
    }
    else{
        player.style.animation = animation + " 0.1s alternate 2"
        setTimeout(() => {
            player.style.animation = ""
            player.classList.remove("player")
            nextCell.classList.add("player")
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
        case "r":
            reload()
    }
}
