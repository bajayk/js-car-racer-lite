
import Controller from './controller.class.js';
import PlayerCar from './player.car.class.js';
import Road from './road.class.js';

export default class Game{

    constructor(context){

        this.context = context;    
        this.playerCar = new PlayerCar(this);
        this.road = new Road(this);        
        new Controller({road:this.road, playerCar:this.playerCar});
    }

    update(){
        this.road.update();
        this.playerCar.update();
    }

}