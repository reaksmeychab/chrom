// Class representing a Car
class Car {
    constructor(make, model) {
      // Private properties
      let _make = make;
      let _model = model;
  
      // Public method to get make
      this.getMake = function() {
        return _make;
      };
  
      // Public method to get model
      this.getModel = function() {
        return _model;
      };
  
      // Public method to set make
      this.setMake = function(newMake) {
        _make = newMake;
      };
  
      // Public method to set model
      this.setModel = function(newModel) {
        _model = newModel;
      };
    }
  
    // Public method to display car details
    displayDetails() {
      console.log(`Car: ${this.getMake()} ${this.getModel()}`);
    }
  }
  
  // Create an instance of Car
  const myCar = new Car('Toyota', 'Camry');
  
  // Accessing and modifying properties using public methods
  console.log(myCar.getMake()); // Output: Toyota
  console.log(myCar.getModel()); // Output: Camry
  
  myCar.setMake('Honda');
  myCar.setMo
  