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

    init() {
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.setDimensions();
        this.start();
    },

    start() {
        this.reset();
        this.interval = setInterval(() => {
            this.enemies = this.enemies.filter(enemy => enemy != null)
            this.player.shoots = this.player.shoots.filter(shoot => !shoot.destroyed)
            if (this.playerCollision()) {
                this.gameOver()
            }
            this.framesCounter++
            if (this.framesCounter % 800 === 0) {
                this.createEnemies()
            }
            this.clear();
            this.drawAll();
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
        this.player.shoots = [];
        this.scoreboard = ScoreBoard;
        this.scoreboard.init(this.ctx);
    },
    drawAll() {
        this.background.draw();
        this.player.draw();
        this.enemies.forEach(enemy => {
            enemy.draw();
        });

        this.player.shoots.forEach(shoot => {
            shoot.draw();
        });
        this.drawScore();
    },
    createEnemies() {
        for (let j = 0; j <= 1; j++) {
            for (let i = 0; i <= 4; i++) {
                this.enemies.push(new Enemies(this.ctx, this.canvasW + i * 80, this.canvasH + j * 100))
            }
        }

    },

    playerCollision() {
        // funcion para comprobar colisiones con el player
        return this.enemies.some(
            enemy => {

                return this.player.posX + this.player.width >= enemy.posX &&
                    this.player.posY + this.player.height >= enemy.posY &&
                    this.player.posX <= enemy.posX + enemy.width &&
                    this.player.posY <= enemy.posY + enemy.height
            }
        );
    },
    gameOver() {
        clearInterval(this.interval);
        alert(`GAME OVER!! Your Score was: ${this.score}`)
    },
    drawScore() {
        this.scoreboard.update(this.score);
    },
    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
}