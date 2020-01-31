class Player {
    constructor(ctx, gameW, gameH, keys) {
        this._ctx = ctx
        this._posX = window.innerWidth / 3
        this._posY = window.innerHeight / 1.4
        this._posY0 = 0

        this._gameWidth = gameW
        this._gameHeight = gameH
        this._image = new Image()
        this._image.src = "img/player.png"

        this._width = 40
        this._height = 50
        this._velY = 10
        this._shoots = [];
        this.shotAudio = new Audio("./music/retro_shot.wav")

        this._keys = keys
        this.setListeners();
    }

    draw() {
        this._ctx.drawImage(this._image, this._posX, this._posY, this._width, this._height)
    }
    //test
    setListeners() {
        document.addEventListener("keydown", e => {
            switch (e.keyCode) {
                case this._keys.left:
                    console.log(game.isRunning)
                    game.isRunning ? this.move("left") : null;
                    break;
                case this._keys.right:
                    game.isRunning ? this.move("right") : null;
                    break;
                case this._keys.attack:
                    if (game.isRunning) {
                        this._shoots.push(new Shoots(this._ctx, this._posX + this._width / 2, this._posY))
                        this.shotAudio.play()
                    }
                    break;
            }
        });

    }

    move(mov) {
        if (mov === "right" && this._posX < (this._gameWidth - this._width)) {
            this._posX += this._velY;
        }
        if (mov === "left" && this._posX > this._posY0) {
            this._posX -= this._velY;
        }

        this._ctx.drawImage(this._image, this._posX, this._posY, this._width, this._height)
    }
}