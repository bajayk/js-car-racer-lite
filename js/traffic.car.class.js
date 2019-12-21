export default class TrafficCar{
    constructor(game){
        this.game = game;
        this.context = this.game.context;
        this.car = new Image;
        this.car.src = "./images/player_cars.png";
        this.carNo = Math.round(Math.random() * 4);
        this._positionY = Math.random() * 500 * -1;
        this.speed = (Math.random() * 7) + 3;
        this.lane = Math.floor(Math.random() * 3);
        this.lanePosX = [150, 225, 300, 150];
        this.carWidth = 60;
        this.carLength = 124;
    }   

    get width(){
        return this.carWidth;
    }

    get length(){
        return this.carLength;
    }

    get positionX(){
        return this.lanePosX[this.lane];
    }

    get positionY(){
        return this._positionY;
    }

    update(){        
        this._positionY += (this.game.playerCar.speed/5 + this.speed);
        this.context.drawImage(this.car, 
                                this.carNo * this.carWidth, 
                                0, 
                                this.carWidth, 
                                this.carLength, 
                                this.lanePosX[this.lane], 
                                this._positionY, 
                                this.carWidth, 
                                this.carLength
                               );

        if(this._positionY >= 900){
            this.game.traffic.splice(this.game.traffic.indexOf(this), 1);
        }
    }
}