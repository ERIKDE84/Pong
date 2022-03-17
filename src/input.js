export default class InputHandler {
    constructor(game, paddle1, paddle2){
        document.addEventListener("keydown", event => {
            switch(event.key){
                case "ArrowUp":
                    paddle1.moveUp(); break;
                case "ArrowDown":
                    paddle1.moveDown(); break;
                case "w":
                    paddle2.moveUp(); break;
                case "s":
                    paddle2.moveDown(); break;
                case "Escape":
                    game.togglePause(); break;
            }
        })

        document.addEventListener("keyup", event => {
            switch(event.key){
                case "ArrowUp":
                    if(paddle1.speed < 0)
                        paddle1.stop(); 
                    break;
                case "ArrowDown":
                    if(paddle1.speed > 0)
                        paddle1.stop(); 
                    break;
                case "w":
                    if(paddle2.speed < 0)
                        paddle2.stop(); 
                    break;
                case "s":
                    if(paddle2.speed > 0)
                        paddle2.stop(); 
                    break;
            }
        })

        document.getElementById("P1").addEventListener("click", event => {
            game.pvp = false;
            game.start();
        });

        document.getElementById("P2").addEventListener("click", event => {
            game.start();
        });
    }
}