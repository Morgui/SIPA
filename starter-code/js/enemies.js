class Enemies {
    constructor(ctx, posX, posY) {
        this.ctx = ctx
        this.posX = posX
        this.posY = posY
        this.width = 50;
        this.height = 50;
        this.image = new Image();
        this.image.src = "img/enemy.png";
    }

    draw() {
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)

    }
}