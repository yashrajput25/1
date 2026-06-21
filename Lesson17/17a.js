class Car {

    #brand;
    #model;
    #speed;
    isTrunkOpen;

    constructor(brand, model){
        this.brand = brand;
        this.model = model;
        this.speed = 0;
        this.isTrunkOpen = false;

    }

    displayInfo(){
        console.log(`${this.model} ${this.brand} ${this.speed}`);
    }



    go(){

        if(this.isTrunkOpen){
            console.log("Cannot start the car as trunk is open");
            return;
        }

        if(this.speed == 200){
            console.log("Cannot exceed the 200 speed limit");
        }else{
            this.speed+=5;
        }
    }


    brake(){
        if(this.speed == 0){
            console.log("Cannot decrease the limit");
        }else{
            this.speed-=5;
        }
    }

    openTrunk(){
        if(this.speed > 0){
            console.log("Cannot open trunk while the car is moving");
            return;
        }
        this.isTrunkOpen = true;
    }
    closeTrunk(){
        this.isTrunkOpen = false;
    }
}


class RaceCar extends Car{
    accleration;

    constructor(brand , model, accleration){
        super(brand, model);
        this.accleration = accleration;
        this.isTrunkOpen = null;
    }

    go(){
        if(this.speed === 300){
            console.log(`Cannot exceed 300 speed limit for ${this.brand} ${this.model}`);
        }else{
            this.speed+=this.accleration;
        }
    }

    openTrunk(){
        console.log("Not applicable");
    }
    closeTrunk(){
        console.log("Not applicable");
    }
}

const car1 = new RaceCar('McLaren', 'F1', 20);
const car3 = new Car('Toyota', 'Corolla');
const car2 = new Car('Tesla', ' Model 3');

car1.displayInfo();
car1.openTrunk();
car1.go();
car1.go();
car1.go();
car1.displayInfo();
car1.openTrunk();
car1.go();
car1.go();
car1.go();
car1.go();

car1.brake();

car1.displayInfo();
