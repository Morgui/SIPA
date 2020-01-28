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
        top: 38
    },

    init() {
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.width = window.innerWidth * 0.7;
        this.height = window.innerHeight * 0.93;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.canvasW = this.canvas.width / 3.2;
        this.canvasH = this.canvas.height / 10;

        this.start();
    },
    start() {
        this.reset();
        this.interval = setInterval(() => {
            this.drawAll();

        }, 1000 / this.fps)
    },
    reset() {
        this.background = new Background(this.ctx, this.width, this.height);
        this.player = new Player(this.ctx, this.width, this.height, this.keys);
        this.enemies = this.createEnemies(); //para llamar la función de crear bichitos
        this.shoots = new Shoots(this.ctx, this.width, this.height)
    },
    drawAll() {
        this.background.draw();
        this.player.draw();
        this.enemies.forEach(enemy => {
            enemy.draw(); //para pintar todos los bichitos que tengamos en el arr
        });
        this.shoots.draw();

    },
    moveAll() {
        this.player.move();
    },

    createEnemies() {
        let enemies = [];
        for (let j = 0; j <= 1; j++) {
            for (let i = 0; i <= 4; i++) {
                enemies.push(new Enemies(this.ctx, this.canvasW + i * 80, this.canvasH + j * 100))
            }
        }
        return enemies;
    }
}