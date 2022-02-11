import {Levels} from "./levels.js"

var canvas = document.getElementById("root")
var currentLevel = 0
var availableForMovement = true
var controls = "R to reolad and WASD to move"
if (
	/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
		navigator.userAgent
	)
) {
	controls = "Swipe to move tap here to reload"
}
newLevel()

document.body.style.height = window.innerHeight + "px"
document.body.style.wdith = window.innerWidth + "px"
canvas.style.width = Math.min(window.innerHeight, window.innerWidth) + "px"
canvas.style.height = Math.min(window.innerHeight, window.innerWidth) + "px"

window.onresize = () => {
	document.body.style.height = window.innerHeight + "px"
	document.body.style.wdith = window.innerWidth + "px"
	canvas.style.width = Math.min(window.innerHeight, window.innerWidth) + "px"
	canvas.style.height = Math.min(window.innerHeight, window.innerWidth) + "px"
}

function newLevel() {
	currentLevel++
	document.body.style.setProperty(
		"--grid-size",
		Levels.levels[currentLevel - 1].gridSize
	)
	document.getElementById("container").innerHTML = Levels.map_to_html(
		Levels.levels[currentLevel - 1].map,
		controls
	)
	navigator.vibrate(200)
}

function reload() {
	document.body.style.setProperty(
		"--grid-size",
		Levels.levels[currentLevel - 1].gridSize
	)
	document.getElementById("container").innerHTML = Levels.map_to_html(
		Levels.levels[currentLevel - 1].map,
		controls
	)
	navigator.vibrate(200)
}

function move(animation, x, y) {
	availableForMovement = false
	setTimeout(() => (availableForMovement = true), 120)
	let player = document.getElementsByClassName("player")[0]
	let coord = player.id.split(",")
	let nextCell = document.getElementById(
		"" + (parseInt(coord[0]) + x) + "," + (parseInt(coord[1]) + y)
	)
	if (nextCell.classList.contains("wall")) {
		player.style.animation = animation + "Deny 0.05s alternate 2"
		setTimeout(() => {
			player.style.animation = ""
		}, 100)
	} else if (
		nextCell.classList.contains("box-red") ||
		nextCell.classList.contains("box-green")
	) {
		let nextNextCell = document.getElementById(
			"" +
				(parseInt(coord[0]) + x + x) +
				"," +
				(parseInt(coord[1]) + y + y)
		)
		if (
			nextNextCell.classList.contains("wall") ||
			nextNextCell.classList.contains("box-red") ||
			nextNextCell.classList.contains("box-green")
		) {
			player.style.animation = animation + "Deny 0.05s alternate 2"
			setTimeout(() => {
				player.style.animation = ""
			}, 100)
		} else {
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
				nextCell.classList.remove("box-green")
				nextNextCell.classList.add("box-red")

				let levelOver = true
				let allGoals = document.getElementsByClassName("goal")
				for (let i = 0; i < allGoals.length; i++) {
					if (
						allGoals[i].classList.contains("box-red") ||
						allGoals[i].classList.contains("box-green")
					) {
						allGoals[i].classList.replace("box-red", "box-green")
					} else {
						levelOver = false
					}
				}
				if (levelOver) {
					newLevel()
				}
			}, 100)
		}
	} else {
		player.style.animation = animation + " 0.1s alternate 2"
		setTimeout(() => {
			player.style.animation = ""
			player.classList.remove("player")
			nextCell.classList.add("player")
		}, 100)
	}
}

window.onkeydown = (event) => {
	if (availableForMovement) {
		switch (event.key) {
			case "d":
			case "D":
				move("moveRight", 1, 0)
				break
			case "a":
			case "A":
				move("moveLeft", -1, 0)
				break
			case "w":
			case "W":
				move("moveUp", 0, -1)
				break
			case "s":
			case "S":
				move("moveDown", 0, 1)
				break
			case "r":
			case "R":
				reload()
		}
	}
}

//Implementation of touch
var touchStartX = 0
var touchStartY = 0

canvas.addEventListener("touchstart", function (event) {
	event.preventDefault()
	touchStartX = event.targetTouches[0].clientX
	touchStartY = event.targetTouches[0].clientY
})

canvas.addEventListener("touchend", function (event) {
	event.preventDefault()
	if (availableForMovement) {
		let touchDeltaX = touchStartX - event.changedTouches[0].clientX
		let touchDeltaY = touchStartY - event.changedTouches[0].clientY
		if (Math.abs(touchDeltaX) > Math.abs(touchDeltaY)) {
			if (touchDeltaX > 0) {
				move("moveLeft", -1, 0)
			} else {
				move("moveRight", 1, 0)
			}
		} else {
			if (touchDeltaY > 0) {
				move("moveUp", 0, -1)
			} else {
				move("moveDown", 0, 1)
			}
		}
	}
})

if ("serviceWorker" in navigator) {
	navigator.serviceWorker.register("sw.js")
}

document.getElementsByClassName("controls")[0].onclick = reload
