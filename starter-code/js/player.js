class Player {
    constructor(ctx, gameW, gameH, keys) {
        this.ctx = ctx
        this.posX = window.innerWidth / 3
        this.posY = window.innerHeight / 1.45
        this.posY0 = 0

        this.gameWidth = gameW;
        this.gameHeight = gameH;
        this.image = new Image()
        this.image.src = "img/player.png"

        this.width = 50
        this.height = 60
        this.velY = 10

        this.keys = keys
        this.setListeners();
    }

    draw() {
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
    }

    setListeners() {
        document.addEventListener("keydown", e => {
            switch (e.keyCode) {
                case this.keys.left:
                    this.move("left");
                    break;
                case this.keys.right:
                    this.move("right");
                    break;
                case this.keys.attack:
                    game.shoots.push(new Shoots(this.ctx, this.posX + this.width / 2, this.posY))
                    break;
            }
        });

    }

    move(mov) {
        if (mov === "right" && this.posX < (this.gameWidth - this.width)) {
            this.posX += this.velY;
        }
        if (mov === "left" && this.posX > this.posY0) {
            this.posX -= this.velY;
        }

        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
    }
}