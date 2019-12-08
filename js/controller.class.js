export default class Controller{

    constructor(options){
        this.road = options.road;
        this.playerCar = options.playerCar;
        this.init();
    }

    init(){
        document.addEventListener("keydown", (e)=>{
            switch(e.keyCode){
                case 37: // left arrow key
                    this.playerCar.moveLeft();
                    break;
                case 38: // up arrow key
                    this.playerCar.speed += 1;
                    break;
                case 39: // right arrow key
                    this.playerCar.moveRight();
                    break;
                case 40: // down arrow key
                    this.playerCar.speed -= 5;
                    break;
                default:
                    break;
            }
        });
    }
    

}