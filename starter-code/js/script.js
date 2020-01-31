window.onload = function () {
    document.getElementById("start-button").onclick = (e) => {
        if (!game.isRunning) {
            game.init()
        }
    }
}