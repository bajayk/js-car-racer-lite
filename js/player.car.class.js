export default class PlayerCar{
    constructor(game){
        this.game = game;  
        this.context = this.game.context;
        this._positionX = 225;
        this._positionY = 650;
        this._speed = 0;
        this.maxSpeed = 120;  
        this.carWidth = 60;
        this.carLength = 124;      
        this.init();        
    }

    init(){
        this.car = new Image;
        this.car.src = "./images/player_car.png";
    }

    get width(){
        return this.carWidth;
    }

    get length(){
        return this.carLength;
    }

    get positionX(){
        return this._positionX;
    }

    set positionX(positionX){
        this._positionX = positionX
    }    

    get positionY(){
        return this._positionY;
    }

    set positionY(positionY){
        this._positionY = positionY
    }

    resetPosition(){
        this._positionX = 225;
        this._positionY = 650;
    }

    moveLeft(){
        this._positionX -= 75;   
        if(this._positionX <= 150) this._positionX = 150;     
    }

    moveRight(){
        this._positionX += 75;
        if(this._positionX >= 300) this._positionX = 300;
    }

    set speed(speed){
        if(speed >= this.maxSpeed){
            this._speed = this.maxSpeed;
        }else if(speed <= 0){
            this._speed = 0;
        }else{
            this._speed = speed;
        }

        document.querySelector(".speedo-meter .speed").innerHTML = this._speed;
    }

    get speed(){
        return this._speed;
    }

    update(){        
        this.context.drawImage(this.car, this._positionX, this._positionY);
    }
}