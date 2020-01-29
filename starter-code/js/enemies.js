class Enemies {
    constructor(ctx, posX, posY) {
        this.ctx = ctx
        this.posX = posX
        this.posY = posY
        this.velY = 0.5
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
        //(tengo que hacerle un
        //    if a y, si y es superior que el canvas.heigth entonces y va ser 0 - enemies.heigth)

    }
}