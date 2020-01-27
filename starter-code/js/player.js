class Player {
    constructor(ctx, width, height, posX, posY) {
        this.ctx = ctx
        this.posX = 125
        this.posY = 500
        this.gameWidth = width
        this.gameHeight = height
        this.image = new Image()
        this.image.src = "img/player.png"

        this.width = 200
        this.height = 200
    }

    draw() {
        console.log(this.image, this.posX, this.posY, this.width, this.height),
            this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
    }
}