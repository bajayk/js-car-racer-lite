
import Controller from './controller.class.js';
import PlayerCar from './player.car.class.js';
import TrafficCar from './traffic.car.class.js';
import Road from './road.class.js';

export default class Game{

    constructor(context){
        this.context = context;    
        this.playerCar = new PlayerCar(this);
        this.road = new Road(this);
        this.traffic = [];      
        new Controller({road:this.road, playerCar:this.playerCar});

        setInterval(()=>this.populateTraffic(), 5000);
    }

    populateTraffic(){        
        let trafficCar = new TrafficCar(this);       
        this.traffic.push(trafficCar);
    }

    update(){
        this.road.update();
        this.playerCar.update();
       // this.trafficCar.update();
        this.traffic.forEach(car => {
            car.update();
        });
    }

}