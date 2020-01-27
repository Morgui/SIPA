class Enemies {
    constructor(ctx) {
        this.ctx = ctx
        this.posX = window.innerWidth / 2 - 200
        this.posY = 30
        this.width = 50;
        this.height = 50;
        this.image2 = new Image();
        this.image2.src = "img/enemy2.png";
    }

    draw() {
        this.ctx.drawImage(this.image2, this.posX, this.posY, this.width, this.height)

    }
}