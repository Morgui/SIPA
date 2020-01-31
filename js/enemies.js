class Enemies {
    constructor(ctx, posX, posY, velX) {
        this._ctx = ctx
        this._posX = posX
        this._posY = posY
        this._velY = 0.3
        this._velX = velX
        this._width = 35;
        this._height = 35;
        this._image = new Image();
        this._image.src = "img/enemy.png";

    }

    draw() {
        this._ctx.drawImage(this._image, this._posX, this._posY, this._width, this._height)
        this.move()
    }

    move() {
        this._posY += this._velY;
        this._posX -= this._velX

        if (this._posX <= 0) {
            this._velX *= -1
        }
        if (this._posX + this._width >= game.canvas.width) {
            this._velX *= -1
        }

    }
}