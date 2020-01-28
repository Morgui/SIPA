class Shoots {
    constructor(ctx, posX, posY) {
        this.ctx = ctx
        this.posX = posX / 2
        this.posY = posY / 1.5
        this.width = 3.5
        this.heigth = 10


    }
    draw() {
        this.ctx.fillStyle = "white"
        this.ctx.fillRect(this.posX, this.posY - 1, this.width, this.heigth);
    }
}