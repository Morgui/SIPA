const game = {
    name: 'SIPA',
    description: 'Game "Space Invader Por Ahora"',
    author: 'Luz D. Delgado Castañeda',
    license: undefined,
    version: '1.0',
    canvas: undefined,
    ctx: undefined,
    fps: 60,
    keys: {
        left: 37,
        right: 39,
        attack: 38
    },
    enemies: [],
    framesCounter: 0,
    score: 0,
    isRunning: false,
    randomVel: 0,

    init() {
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.setDimensions();
        this.start();
        this.isRunning = true;
    },

    start() {
        this.reset();
        this.interval = setInterval(() => {
            this.enemies = this.enemies.filter(enemy => enemy != null)
            this.player._shoots = this.player._shoots.filter(shoot => !shoot._destroyed)
            this.framesCounter++
            if (this.framesCounter % 500 === 0) {
                this.createEnemies()
            }
            this.clear();
            this.drawAll();
            if (this.playerCollision()) {
                this.gameOver()
            }
            if (this.score >= 200) {
                this.win()
            }
            this.audio.play()
        }, 1000 / this.fps)
    },

    setDimensions() {
        this.width = window.innerWidth * 0.7;
        this.height = window.innerHeight * 0.93;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.canvasW = this.canvas.width / 3.2;
        this.canvasH = this.canvas.height / 10;
    },

    reset() {
        this.background = new Background(this.ctx, this.width, this.height);
        this.player = new Player(this.ctx, this.width, this.height, this.keys);
        this.createEnemies();
        this.scoreboard = ScoreBoard;
        this.scoreboard.init(this.ctx);
        this.audio = new Audio("./music/final_space.mp3");
    },

    drawAll() {
        this.background.draw();
        this.player.draw();
        this.enemies.forEach(enemy => {
            enemy.draw();
        });

        this.player._shoots.forEach(shoot => {
            shoot.draw();
        });
        this.drawScore();
    },

    createEnemies() {
        for (let j = 0; j <= 1; j++) {
            this.randomVel = Math.floor(Math.random() * 6);
            for (let i = 0; i <= 4; i++) {

                this.enemies.push(new Enemies(this.ctx, this.canvasW + i * 80, -85 + this.canvasH + j * 100, this.randomVel))
            }
        }

    },

    playerCollision() {
        // funcion para comprobar colisiones con el player
        return this.enemies.some(
            enemy => {

                return this.player._posX + this.player._width >= enemy._posX &&
                    this.player._posY + this.player._height >= enemy._posY &&
                    this.player._posX <= enemy._posX + enemy._width &&
                    this.player._posY <= enemy._posY + enemy._height
            }
        );
    },

    win() {
        this.ctx.font = 'bold 56px serif';
        this.ctx.fillStyle = "#27718d"
        this.ctx.fillText("YOU WIN!!", this.canvasW, this.height / 2)

        clearInterval(this.interval);
    },

    gameOver() {

        this.ctx.font = 'bold 56px serif';
        this.ctx.fillStyle = "red"
        this.ctx.fillText("GAME OVER", this.canvasW, this.height / 2)

        clearInterval(this.interval);
    },

    drawScore() {
        this.scoreboard.update(this.score);
    },

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
}