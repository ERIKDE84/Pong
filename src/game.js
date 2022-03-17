import Paddle from "./paddle.js";
import Input from "./input.js";
import Ball from "./ball.js";
import Score from "./score.js";
import {sleep} from "./sleep.js";

const GAMESTATE = {
    MENU: 0,
    RUNNING: 1,
    PAUSED: 2,
    WON_P1: 3,
    WON_P2: 4
};

export default class Game {
    constructor(gameWidth, gameHeight, ctx){
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.ball = new Ball(this);
        this.paddle1 = new Paddle(this, this.gameWidth - 30, this.gameHeight);
        this.paddle2 = new Paddle(this, 10, this.gameHeight);
        new Input(this, this.paddle1, this.paddle2);
        this.score = new Score(this);
        this.gamestate = GAMESTATE.MENU;
        this.pvp = true;
        this.scoreP1 = 0;
        this.scoreP2 = 0;
        this.ctx = ctx;
    }

    update(){
        if(this.gamestate === GAMESTATE.PAUSED ||
            this.gamestate === GAMESTATE.MENU) {
                return;
        }

        if(this.scoreP1 === 10){
            this.gamestate = GAMESTATE.WON_P1;
            return;
        }
        if(this.scoreP2 === 10){
            this.gamestate = GAMESTATE.WON_P2;
            return;
        }

        if(this.pvp === true){
            this.paddle2.update();
        } else {
            this.paddle2.followBall();
        }

        this.paddle1.update();
        this.ball.update();
    }

    draw(ctx){
        if(this.gamestate === GAMESTATE.MENU){
            ctx.rect(0,0,this.gameWidth, this.gameHeight);
            ctx.fillStyle = "rgba(0,0,0,1)";
            ctx.fill();
    
            ctx.fillStyle = "white";
            ctx.textAlign = "center";

            ctx.font = "50px Arial";
            ctx.fillText("MENU", this.gameWidth / 2, 100);
            return;
        }

        if(this.gamestate === GAMESTATE.PAUSED){
            this.paddle1.draw(ctx);
            this.paddle2.draw(ctx);
            this.ball.draw(ctx);
            this.score.drawScore(ctx);
            this.score.drawGameboard(ctx);

            ctx.rect(0,0,this.gameWidth, this.gameHeight);
            ctx.fillStyle = "rgba(0,0,0,0.5)";
            ctx.fill();

            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("PAUSED", this.gameWidth / 2, this.gameHeight / 2 + 10);
            return;
        }

        if(this.gamestate === GAMESTATE.WON_P1){
            this.paddle1.draw(ctx);
            this.paddle2.draw(ctx);
            this.ball.draw(ctx);
            this.score.drawScore(ctx);
            this.score.drawGameboard(ctx);

            ctx.rect(0,0,this.gameWidth, this.gameHeight);
            ctx.fillStyle = "rgba(0,0,0,0.5)";
            ctx.fill();
            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            if(this.pvp === true){
                ctx.fillText("PLAYER 1 WON!", this.gameWidth / 2, this.gameHeight / 2);
            }
            if(this.pvp === false){
                ctx.fillText("YOU'VE WON!", this.gameWidth / 2, this.gameHeight / 2);
            }
            return;
        }

        if(this.gamestate === GAMESTATE.WON_P2){
            this.paddle1.draw(ctx);
            this.paddle2.draw(ctx);
            this.ball.draw(ctx);
            this.score.drawScore(ctx);
            this.score.drawGameboard(ctx);

            ctx.rect(0,0,this.gameWidth, this.gameHeight);
            ctx.fillStyle = "rgba(0,0,0,0.5)";
            ctx.fill();
            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            if(this.pvp === true){
                ctx.fillText("PLAYER 2 WON!", this.gameWidth / 2, this.gameHeight / 2);
            }
            if(this.pvp === false){
                ctx.fillText("YOU'VE LOST", this.gameWidth / 2, this.gameHeight / 2);
            }
            return;
        }
        
        this.paddle1.draw(ctx);
        this.paddle2.draw(ctx);
        this.ball.draw(ctx);
        this.score.drawScore(ctx);
        this.score.drawGameboard(ctx);
    }

    togglePause(){
        if(this.gamestate === GAMESTATE.PAUSED){
            this.gamestate = GAMESTATE.RUNNING;
        } else if(this.gamestate === GAMESTATE.RUNNING){
            this.gamestate = GAMESTATE.PAUSED;
        }
    }

    start(){
        if(this.gamestate !== GAMESTATE.MENU) return;
        document.getElementById("P1").style.display = "none";
        document.getElementById("P2").style.display = "none";
        
        this.gamestate = GAMESTATE.RUNNING;
        
        for(let i=3; i>0; i--){
            this.ctx.font = "100px Arial";
            this.ctx.fillStyle = "white";
            this.ctx.textAlign = "center";
            this.ctx.fillText(i, this.gameWidth / 2, this.gameHeight / 2);
            console.log(i);
            sleep(1000);
        }
       
        this.ball.reset();
    }
}
