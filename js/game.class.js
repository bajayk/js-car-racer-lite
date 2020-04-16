
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
        this.raceDistance = 1;
        this.traffic = [];      
        new Controller({road:this.road, playerCar:this.playerCar});

        setInterval(()=>this.populateTraffic(), 5000);

        this._paused = false;
        this._gameOver = false;
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

        if(this._gameOver) return;

        this.dashboard.updateTime();

        if(this._paused) return;

        this.road.update();
        this.dashboard.update();

        if(this.dashboard.distanceRemaining <= 0){
            this._gameOver = true;
            this.pause = true;
            let screenGameOver = document.querySelector(".game-over");
            screenGameOver.style.display = "block";
            this.recordTime();

            let screenTimeTaken = document.querySelector('.time-taken');
            screenTimeTaken.innerHTML = this.dashboard.elapsedTime;

            let screenMinTime = document.querySelector('.min-message');
            screenMinTime.innerHTML = "Minimum time recored before - " + this.getMinTimeTaken();

        }

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

    recordTime(){

        if(localStorage.getItem("score") === null){
            localStorage.setItem("score", JSON.stringify([]));
        }

        //console.log(localStorage.getItem("score"));

        let time = this.dashboard.elapsedTime;

        let scores = JSON.parse(localStorage.getItem("score"));

        scores.push(time);

        localStorage.setItem("score", JSON.stringify(scores));

    }

    getMinTimeTaken(){
        let scores = JSON.parse(localStorage.getItem("score"));

        console.log(scores);
        let min = scores.reduce((previousItem, currentItem) => {
            return previousItem < currentItem ? previousItem : currentItem;
        });

        console.log(min);
        return min;
    }

}