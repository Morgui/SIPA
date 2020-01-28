class Enemies {
    constructor(ctx, posX, posY) {
        this.ctx = ctx
        this.posX = posX
        this.posY = posY
        // this.velY = 0.5
        this.width = 50;
        this.height = 50;
        this.image = new Image();
        this.image.src = "img/enemy.png";
    }

    draw() {
        // this.posY += this.velY;
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
    }
}