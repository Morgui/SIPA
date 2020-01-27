const game = {
    name: 'SIPA',
    description: 'Game "Space Invader por ahora"',
    author: 'Luz D. Delgado',
    license: undefined,
    version: '1.0',
    canvas: undefined,
    ctx: undefined,
    fps: 60,
    keys: {
        left: 37,
        right: 39,
        space: 32
    },

    init() {
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.width = window.innerWidth * 0.7;
        this.height = window.innerHeight * 0.93;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
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
        this.enemies = new Enemies(this.ctx, this.width, this.height)

    },
    drawAll() {
        this.background.draw();
        this.player.draw();
        this.enemies.draw();
    },
    moveAll() {
        this.player.move();
    }
}