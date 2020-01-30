class Enemies {
    constructor(ctx, posX, posY, velX) {
        this.ctx = ctx
        this.posX = posX
        this.posY = posY
        this.velY = 0.3
        this.velX = velX
        this.width = 35;
        this.height = 35;
        this.image = new Image();
        this.image.src = "img/enemy.png";

    }

    draw() {
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
        this.move()
    }

    move() {
        this.posY += this.velY;
        console.log(this.posX)
        this.posX -= this.velX
        console.log(this.posX)

        if (this.posX <= 0) {
            this.velX *= -1
        }
        if (this.posX + this.width >= game.canvas.width) {
            this.velX *= -1
        }

    }
}