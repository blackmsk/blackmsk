namespace AbstractNamespace {
  abstract class Vehicle {
    constructor(protected wheelCount: number) {}
    abstract updateWheelCount(newWheelCount: number): void;
    showNumberOfWheels() {
      console.log(`moved ${this.wheelCount} miles`);
    }
  }
  class Motorcycle extends Vehicle {
    constructor() {
      super(2);
    }

    updateWheelCount(newWheelCount: number): void {
      this.wheelCount = newWheelCount;
      console.log(`Automobile has ${this.wheelCount}`);
    }
  }

  class Automobile extends Vehicle {
    constructor() {
      super(4);
    }
    updateWheelCount(newWheelCount: number): void {
      this.wheelCount = newWheelCount;
      console.log(`Automobile has ${this.wheelCount}`);
    }
    showNumberOfWheels(): void {
      console.log(`moved Automobile has ${this.wheelCount} miles`);
    }
  }

  const motorCycle = new Motorcycle();
  motorCycle.updateWheelCount(2);
  motorCycle.showNumberOfWheels();
  const automobile = new Automobile();
  automobile.updateWheelCount(5);
  motorCycle.showNumberOfWheels();
}
