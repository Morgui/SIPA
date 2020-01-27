class Background {
    constructor(ctx, width, height) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.image = new Image();
        this.image.src = "img/bg_with_planet.jpg";
        this.posX = 0;
        this.posY = 0;
        // this.velX = 8;
    }
    draw() {
        this.ctx.drawImage(this.image, this.posX-1, this.posY-1, this.width, this.height);
    }


}