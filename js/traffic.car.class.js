export default class TrafficCar{
    constructor(game){
        this.game = game;
        this.context = this.game.context;
        this.car = new Image;
        this.car.src = "./images/player_cars.png";
        this.carNo = Math.round(Math.random() * 4);
        this.positionY = Math.random() * 500 * -1;
        this.speed = (Math.random() * 7) + 3;
        this.lane = Math.floor(Math.random() * 3);
        this.lanePosX = [150, 225, 300, 150];
    }   

    update(){        
        this.positionY += (this.game.playerCar.speed/5 + this.speed);
        this.context.drawImage(this.car, this.carNo * 60, 0, 60, 124, this.lanePosX[this.lane], this.positionY, 60, 124);
        if(this.positionY >= 900){
            this.game.traffic.splice(this.game.traffic.indexOf(this), 1);
        }
    }
}