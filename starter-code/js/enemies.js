class Enemies {
    constructor(ctx, posX, posY) {
        this.ctx = ctx
        this.posX = posX
        this.posY = posY
        this.velY = 0.3
        this.velX = 1
        this.width = 35;
        this.height = 35;
        this.image = new Image();
        this.image.src = "img/enemy.png";
    }

    draw() {
        this.move()
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
    }

    move() {
        this.posY += this.velY;

        this.posX -= this.velX
        if (this.posX <= 0) {
            this.velX *= -1
        }
        if (this.posX + this.width >= game.canvas.width) {
            this.velX *= -1
        }

    }
}