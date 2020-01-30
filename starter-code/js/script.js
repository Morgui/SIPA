window.onload = function () {
    document.getElementById("start-button").onclick = () => {
        if (game.isRunning === false) {
            game.init()
        }
    }
}