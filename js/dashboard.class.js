export default class Dashboard{

    constructor(game){
        this.game = game;

        this.timeMeter = document.querySelector(".time-meter");
        this.distanceMeter = document.querySelector(".distance");

        this.startTime = this.then = Date.now();
        
        this.distanceTraveled = 0;

        this.distanceRemaining = this.game.raceDistance;
        this.elapsedTime = "";
    }


    update(){
        this.updateKMLeft();
    }

    updateTime(){

        let timeElapsed = Date.now() - this.startTime;
        let time = new Date(timeElapsed);

        let hours = time.getUTCHours() < 10 ? '0' + time.getUTCHours() : time.getUTCHours();
        let minutes = time.getUTCMinutes() < 10 ? '0' + time.getUTCMinutes() : time.getUTCMinutes();
        let seconds = time.getUTCSeconds() < 10 ? '0' + time.getUTCSeconds() : time.getUTCSeconds();
        let miliseconds = time.getUTCMilliseconds();
        let mili = Math.floor(miliseconds/100);
        mili = mili < 10 ? '0' + mili : mili;

        this.elapsedTime = `${hours}:${minutes}:${seconds}:${mili}`;

        this.timeMeter.innerHTML = `TIME ELAPSED: ${this.elapsedTime}`;

    }

    updateKMLeft(){

        this.now = Date.now();
        let deltaTime = this.now - this.then;

        if(deltaTime >= 1000){

            this.meterPerSecond = this.game.playerCar.speed * 1000 / (60 * 60);

            this.distanceTraveled += this.meterPerSecond;

            this.then = this.now;

            this.distanceRemaining = (this.game.raceDistance - (this.distanceTraveled/1000)).toFixed(1)

            this.distanceMeter.innerHTML = this.distanceRemaining + ' KMs';

        }
    }

}