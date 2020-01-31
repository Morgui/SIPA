class Background {
    constructor(ctx, width, height) {
        this._ctx = ctx;
        this._width = width;
        this._height = height;
        this._image = new Image();
        this._image.src = "img/bg_with_planet.jpg";
        this._posX = 0;
        this._posY = 0;

    }
    draw() {
        this._ctx.drawImage(this._image, this._posX - 1, this._posY - 1, this._width, this._height);
    }


}