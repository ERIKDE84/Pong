import { detectCollision1, detectCollision2 } from  "./collisionDetection.js";
import { deflection } from "./deflection.js";

export default class Ball {
    constructor(game){
        this.image = document.getElementById("imgBall");
        this.size = 20;
        this.gameHeight = game.gameHeight;
        this.gameWidth = game.gameWidth; 
        this.game = game;
    }

    reset(){
        this.position = {x: this.gameWidth / 2, y: this.gameHeight / 2};
        this.speed = {x: 5, y: 0, totalSpeed: 7};
    }

    draw(ctx){
        ctx.drawImage(this.image, this.position.x, this.position.y, this.size, this.size);
    }

    update(){
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

        //collision detection with top and bottom
        if(this.position.y < 0 || this.position.y + this.size > this.gameHeight){
            this.speed.y = -this.speed.y;        
        }

        //collision detection between ball and paddle1
        if(detectCollision1(this, this.game.paddle1)){
            this.position.x = this.game.paddle1.position.x - this.size;
            deflection(this, this.game.paddle1);
            if(this.speed.x > 0) this.speed.x = -this.speed.x;
        }

        //collision detection between ball and paddle2
        if(detectCollision2(this, this.game.paddle2)){
            this.position.x = this.game.paddle2.position.x + this.size;
            deflection(this, this.game.paddle2);
            if(this.speed.x < 0) this.speed.x = -this.speed.x;
        }

        //score a goal for player 1
        if(this.position.x + this.size < 0){
            this.game.paddle1.reset();
            this.game.paddle2.reset();
            this.reset();
            this.game.scoreP1++;
        } 

        //score a goal for player 2
        if(this.position.x > this.gameWidth){
            this.game.paddle1.reset();
            this.game.paddle2.reset();
            this.reset();
            this.game.scoreP2++;
        } 
    }
}