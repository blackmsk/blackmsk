class Vehicle {
  constructor(private wheelCount: number){}
  showNumberOfWheels(){
    console.log(`moved ${this.wheelCount}`);
  }
}

class Motorcycle extends Vehicle {
  constructor() {
    super(2);
  }
}

class Automobile extends Vehicle {
  constructor() {
    super(4);
  }
}

const motorCycle = new Motorcycle();
motorCycle.showNumberOfWheels();
const automobile = new Automobile();
automobile.showNumberOfWheels();
