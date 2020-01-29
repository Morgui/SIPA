class Shoots {
    constructor(ctx, posX, posY) {
        this.ctx = ctx
        this.posX = posX
        this.posY = posY
        this.width = 3.5
        this.heigth = 10
    }
    draw() {
        this.posY -= 5;
        this.ctx.fillStyle = "white"
        this.ctx.fillRect(this.posX, this.posY - 1, this.width, this.heigth);
        this.checkCollision()
    }
    checkCollision() { //comprobar si hay un enemigo cerca con el que se pueda hacer colisión
        for (let i = 0; i < game.enemies.length; i++) {
            let enemy = game.enemies[i];
            //para destruir al enemigo si lo encuentra, los marca como null 
            if (this.collision(enemy)) {
                game.enemies[i] = null;
                this.destroyed = true
                game.score += 10
            }
        }
    }
    collision(enemy) {
        // console.log(this.posX <= enemy.posX + 35)
        //si la pos de la bala esta cerca de la pos del enemigo más su ancho/altura, colisionará
        return (
            this.posX >= enemy.posX &&
            this.posX <= enemy.posX + 35 &&
            this.posY >= enemy.posY &&
            this.posY <= enemy.posY + 35
        )
    }
}