export default class Score {
    constructor(game){
        this.game = game;
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
    }

    drawScore(ctx){
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.font = "100px Arial";
        ctx.fillText(this.game.scoreP2 + "   " + this.game.scoreP1, this.gameWidth / 2, 100);
    }

    drawGameboard(ctx){
        ctx.beginPath();
        ctx.moveTo(this.gameWidth / 2, 0);
        ctx.lineTo(this.gameWidth / 2, this.gameHeight / 2 - 75);
        ctx.moveTo(this.gameWidth / 2 + 75, this.gameHeight / 2)
        ctx.arc(this.gameWidth / 2, this.gameHeight / 2, 75, 0, 2*Math.PI);
        ctx.moveTo(this.gameWidth / 2, this.gameHeight / 2 + 75);
        ctx.lineTo(this.gameWidth / 2, this.gameHeight);
        ctx.lineWidth = 10;
        ctx.strokeStyle = '#fff';
        ctx.stroke();
    }
}