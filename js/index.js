import Game from './game.class.js';

let canvas = document.querySelector("#canvas");
let context = canvas.getContext("2d");

let game = new Game(context);

requestAnimationFrame(gameLoop);




function gameLoop(timestamp){    

    
    game.update();
   
    requestAnimationFrame(gameLoop);
}