// Parent class
function Animal(name) {
    this.name = name;
  }
  
  // Method for parent class
  Animal.prototype.eat = function() {
    console.log(this.name + ' is eating.');
  };
  
  // Child class inheriting from parent
  function Dog(name, breed) {
    // Call the parent constructor
    Animal.call(this, name);
    this.breed = breed;
  }
  
  // Inherit methods from parent
  Dog.prototype = Object.create(Animal.prototype);
  Dog.prototype.constructor = Dog;
  
  // Method for child class
  Dog.prototype.bark = function() {
    console.log(this.name + ' is barking.');
  };
  
  // Create instances
  const animal = new Animal('Leo');
  const dog = new Dog('Buddy', 'Labrador');
  
  // Using inherited methods
  animal.eat(); // Output: Leo is eating.
  dog.eat(); // Output: Buddy is eating.
  dog.bark(); // Output: Buddy is barking.
  