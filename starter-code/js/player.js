class Player {
    constructor(ctx, gameW, gameH, keys) {
        this.ctx = ctx
        this.posX = window.innerWidth / 3
        this.posY = window.innerHeight / 1.45
        this.posY0 = 0

        this.gameWidth = gameW;
        this.gameHeight = gameH;
        this.image = new Image()
        this.image.src = "img/player.png"

        this.width = 50
        this.height = 60
        this.velY = 3

        this.keys = keys
        this.setListeners();
    }

    draw() {
        // console.log(this.image, this.posX, this.posY, this.width, this.height),
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
    }

    setListeners() {
        document.onkeydown = e => {
            e.keyCode == 37 && this.posX > this.posY0 ? this.move("left") : null
            e.keyCode == 39 && this.posX < this.gameWidth - this.width ? this.move("right") : null
        }
    }

    // setListeners() {
    //     document.addEventListener("keydown", e => {
    //         switch (e.keyCode) {
    //             case this.keys.left:
    //                 this.posX > this.posY0 ? this.move("left");
    //             case this.keys.right:
    //                 this.posX < this.gameWidth - this.width ? this.move("right");
    //         }
    //     });

    // }

    move(mov) {
        mov === "right" ? this.posX += this.velY : null
        mov === "left" ? this.posX -= this.velY : null

        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
    }
}