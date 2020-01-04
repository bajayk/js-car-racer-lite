
import Controller from './controller.class.js';
import PlayerCar from './player.car.class.js';
import TrafficCar from './traffic.car.class.js';
import Road from './road.class.js';
import { isCollide } from './utilities.js';
import Dashboard from './dashboard.class.js';

export default class Game{

    constructor(context){
        this.context = context;    
        this.playerCar = new PlayerCar(this);
        this.road = new Road(this);
        this.dashboard = new Dashboard(this);
        this.traffic = [];      
        new Controller({road:this.road, playerCar:this.playerCar});

        setInterval(()=>this.populateTraffic(), 5000);

        this._paused = false;
    }

    populateTraffic(){       
        if(this._paused) return; 
        let trafficCar = new TrafficCar(this);       
        this.traffic.push(trafficCar);
    }

    set pause(pause){
        this._paused = pause;
    }

    get pause(){
        return this._paused;
    }

    tryAgain(e){

        if(e.keyCode !== 32){
            return;
        }

        this.traffic = [];
        this.playerCar.resetPosition();
        this.playerCar.speed = 10;
        this.pause = false;
        let screenTryAgain = document.querySelector(".try-again");
        screenTryAgain.style.display = "none";
        document.onkeydown = null;
    }

    update(){ 
        this.dashboard.updateTime();

        if(this._paused) return;

        this.road.update();
        this.dashboard.update();
        this.playerCar.update();
       // this.trafficCar.update();
        this.traffic.forEach(car => {
            car.update();
        });

        if(isCollide(this.playerCar, this.traffic)){
            
            this.pause = true;
            let screenTryAgain = document.querySelector(".try-again");
            screenTryAgain.style.display = "block";
            document.onkeydown = e => this.tryAgain(e);
            
        }
    }

}