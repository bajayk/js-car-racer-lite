export default class Road{
    constructor(game){
        this.game = game;
        this.context = this.game.context;
        this.yOffset = -512;
        this.road = new Image;
        this.road.src = './images/road.png';        
    }

    update(){
        //console.log(yOffset);
        if(this.yOffset >= 0) this.yOffset = -512;           
        this.context.drawImage(this.road, 0, this.yOffset);
        this.context.drawImage(this.road, 0, this.yOffset+512);
        this.context.drawImage(this.road, 0, this.yOffset+1024);
        this.yOffset += this.game.playerCar.speed/5;    
        
    }
}