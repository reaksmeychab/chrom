class Car {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.speed = 0; // Speed in miles per hour
      this.engineStatus = 'off';
    }
  
    startEngine() {
      if (this.engineStatus === 'off') {
        this.engineStatus = 'on';
        console.log('Engine started');
      } else {
        console.log('Engine is already running');
      }
    }
  
    stopEngine() {
      if (this.engineStatus === 'on') {
        this.engineStatus = 'off';
        console.log('Engine stopped');
      } else {
        console.log('Engine is already off');
      }
    }
  
    accelerate(speedChange) {
      if (this.engineStatus === 'on') {
        this.speed += speedChange;
        console.log(`Accelerated to ${this.speed} mph`);
      } else {
        console.log('Cannot accelerate, engine is off');
      }
    }
  
    brake() {
      if (this.speed > 0) {
        this.speed = 0;
        console.log('Car stopped');
      } else {
        console.log('Car is already stopped');
      }
    }
  }
  
  // Usage
  const myCar = new Car('Toyota', 'Camry', 2022);
  console.log(myCar); // Car { make: 'Toyota', model: 'Camry', year: 2022, speed: 0, engineStatus: 'off' }
  
  myCar.startEngine(); // Engine started
  myCar.accelerate(50); // Accelerated to 50 mph
  myCar.brake(); // Car stopped
  myCar.stopEngine(); // Engine stopped
  