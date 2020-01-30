class Shoots {
    constructor(ctx, posX, posY) {
        this._ctx = ctx
        this._posX = posX
        this._posY = posY
        this._width = 3.5
        this._heigth = 10
        this._destroyed = false;
    }
    draw() {
        this._posY -= 5;
        this._ctx.fillStyle = "white"
        this._ctx.fillRect(this._posX, this._posY - 1, this._width, this._heigth);
        this.checkCollision()
    }
    checkCollision() { //comprobar si hay un enemigo cerca con el que se pueda hacer colisión
        let enemy;
        for (let i = 0; i < game.enemies.length; i++) {
            enemy = game.enemies[i];
            //para destruir al enemigo si lo encuentra, los marca como null 
            if (this.collision(enemy)) {
                game.enemies[i] = null;
                this._destroyed = true
                game.score += 10
            }
        }

    }
    collision(enemy) {
        // console.log(this._posX <= enemy._posX + 35)
        //si la pos de la bala esta cerca de la pos del enemigo más su ancho/altura, colisionará
        return (
            this._posX >= enemy._posX &&
            this._posX <= enemy._posX + 35 &&
            this._posY >= enemy._posY &&
            this._posY <= enemy._posY + 35
        )
    }
}