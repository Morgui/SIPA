const ScoreBoard = {
  _ctx: undefined,

  init: function (ctx) {
    this._ctx = ctx
    this._ctx.font = "30px sans-serif"
  },

  update: function (score) {
    this._ctx.fillStyle = "white";
    this._ctx.fillText(Math.floor(score), 50, 50);
  }
};