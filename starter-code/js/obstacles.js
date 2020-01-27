class obstacles {
    constructor(ctx, wSize) {
        this.ctx = ctx
        this._wSize = wSize
        this.posX = window.innerWidth / 2
        this.posY = 0
        this.width = width;
        this.height = height;
        this.imageB = new Image();
        this.imageB.src = "img/black-enemy.png";
        this._size = {
            width: 50,
            height: 60
        }
    }


    drawBlack() {
        this._ctx.drawImage(this.image, this.posX, this.posY, this._size.width, this._size.height)

    }
}