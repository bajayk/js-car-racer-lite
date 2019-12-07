
let canvas = document.querySelector("#canvas");
let context = canvas.getContext("2d");



let road = new Image;
road.src = "./images/road.png";
let roadPat;
road.onload = () => {
    roadPat = context.createPattern(road, 'repeat-y');
    requestAnimationFrame(gameLoop);
}

let car = new Image;
car.src = './images/player_car.png';

let yOffset = -512;


function gameLoop(){    
    //console.log(yOffset);
    if(yOffset >= 0) yOffset = -512;   
    
    context.drawImage(road, 0, yOffset);
    context.drawImage(road, 0, yOffset+512);
    context.drawImage(road, 0, yOffset+1024);
    yOffset += 10;
   
    context.drawImage(car, 225, 400);
    requestAnimationFrame(gameLoop);
}

