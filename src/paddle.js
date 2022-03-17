export default class Paddle {
    constructor(game, x, gameHeight){
        this.gameHeight = gameHeight;
        
        this.width = 20;
        this.height = 150;

        this.maxSpeed = 7;
        this.speed = 0;

        this.position = {
            x: x,
            y: gameHeight / 2 - this.height / 2
        }

        this.game = game;
    }

    reset(){
        this.position.y = this.gameHeight / 2 - this.height / 2;
    }

    update(){
        this.position.y += this.speed;

        if(this.position.y < 0) 
            this.position.y = 2;

        if(this.position.y + this.height > this.gameHeight) 
            this.position.y = this.gameHeight - this.height -2; 
    }

    draw(ctx){
        ctx.fillStyle = "#fff"
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    followBall(){
        if(this.position.y + this.height / 2 > this.game.ball.position.y + this.game.ball.size / 2){
            this.speed = -this.maxSpeed * 0.75;
        }

        if(this.position.y + this.height / 2 < this.game.ball.position.y + this.game.ball.size / 2){
            this.speed = this.maxSpeed * 0.75;
        }

        this.position.y += this.speed;

        if(this.position.y < 0) 
            this.position.y = 2;

        if(this.position.y + this.height > this.gameHeight) 
            this.position.y = this.gameHeight - this.height -2; 
    }

    moveUp(){
        this.speed = -this.maxSpeed;
    }

    moveDown(){
        this.speed = this.maxSpeed;
    }

    stop(){
        this.speed = 0;
    }
}