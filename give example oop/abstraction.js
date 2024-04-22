// Interface for a Shape
class Shape {
    constructor() {
      if (new.target === Shape) {
        throw new Error('Cannot instantiate abstract class.');
      }
    }
  
    // Abstract method for calculating area
    calculateArea() {
      throw new Error('Method not implemented.');
    }
  
    // Abstract method for calculating perimeter
    calculatePerimeter() {
      throw new Error('Method not implemented.');
    }
  }
  
  // Concrete implementation of Shape: Rectangle
  class Rectangle extends Shape {
    constructor(width, height) {
      super();
      this.width = width;
      this.height = height;
    }
  
    // Implementing abstract method for calculating area
    calculateArea() {
      return this.width * this.height;
    }
  
    // Implementing abstract method for calculating perimeter
    calculatePerimeter() {
      return 2 * (this.width + this.height);
    }
  }
  
  // Concrete implementation of Shape: Circle
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    // Implementing abstract method for calculating area
    calculateArea() {
      return Math.PI * this.radius * this.radius;
    }
  
    // Implementing abstract method for calculating perimeter
    calculatePerimeter() {
      return 2 * Math.PI * this.radius;
    }
  }
  
  // Create instances of Rectangle and Circle
  const rectangle = new Rectangle(5, 10);
  const circle = new Circle(7);
  
  // Using abstraction to calculate area and perimeter without knowing the implementation details
  console.log('Rectangle Area:', rectangle.calculateArea()); // Output: Rectangle Area: 50
  console.log('Rectangle Perimeter:', rectangle.calculatePerimeter()); // Output: Rectangle Perimeter: 30
  
  console.log('Circle Area:', circle.calculateArea()); // Output: Circle Area: 153.93804002589985
  console.log('Circle Circumference:', circle.calculatePerimeter()); // Output: Circle Circumference: 43.982297150257104
  