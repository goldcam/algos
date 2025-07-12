class Vehicle {
    constructor(color, year) {
        this.color = color;
        this.year = year;
        this.running = false;
    }


    startMotot(){
        if(!this.running) {
            this.running = true;
            return { running: this.running };
        } else {
            return 'Vehicle running alredy';
        }        
    }

    stopMotor(){ 
        if(this.running){
            this.running = false;

            return {running:this.running};
        } else {
            return 'Vehicle not running';
        }
    }
    
}

class Car extends Vehicle {
    constructor(color, year, doors) {
        super(color, year);
        this.doors = doors;
        this.type = 'car';

    }

    getType(){
        return this.type;
    }

    getDoorNumb(){
        return this.doors
    }

}
class Mototcycle extends Vehicle {
    constructor(color, year, cylinders, ) {
        super(color,year);
        this.cylinders = cylinders;
    }

    getCylinders() {
        return this.cylinders;
    }



}


const car = new Car('red', '1985', 4);
const gsxr = new Mototcycle('blue', '2007', 4);


console.log({

    gsxrCylinders: gsxr.getCylinders(),
   stop1:  car.stopMotor(),
   start1: car.startMotot(),
   start2: car.startMotot(),
   stop2: car.stopMotor(),
   type: car.getType(),
   doors: car.getDoorNumb()
})

