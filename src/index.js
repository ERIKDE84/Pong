import Game from "./game.js";
 
let ctx = document.getElementById("gameScreen").getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let game = new Game(GAME_WIDTH, GAME_HEIGHT);

function gameLoop(){

    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    game.update();
    game.draw(ctx);

    requestAnimationFrame(gameLoop);
}

gameLoop();