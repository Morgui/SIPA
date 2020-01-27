class Player {
    constructor(ctx, gameW, gameH, keys) {
        this.ctx = ctx
        this.posX = window.innerWidth / 3.1
        this.posY = window.innerHeight / 1.45
        this.posY0 = this.posY

        this.gameWidth = gameW;
        this.gameHeight = gameH;
        this.image = new Image()
        this.image.src = "img/player.png"

        this.width = 50
        this.height = 60
        this.velY = 1

        this.keys = keys
        this.setListeners();
    }

    draw() {
        // console.log(this.image, this.posX, this.posY, this.width, this.height),
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
    }

    setListeners() {
        console.log("muevete")
        document.onkeydown = e => {
            e.keyCode == 37 && this.posX <= 600 ? this.move("left") : null
            e.keyCode == 39 && this.posX > 530 ? this.move("right") : null
        }
    }

    move(mov) {

        console.log("moveeeeeer")
        mov === "right" ? this.posX += this.velY : null
        mov === "left" ? this.posX -= this.velY : null

        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
    }
}