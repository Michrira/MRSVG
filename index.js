// Import required classes
const { Triangle, Circle, Square } = require("./shapes");

// Create new instances of each shape
const triangle = new Triangle();
const circle = new Circle(50);
const square = new Square(100);

// Set the color of each shape
triangle.setColor("red");
circle.setColor("green");
square.setColor("blue");

// Render each shape
console.log(triangle.render());
console.log(circle.render());
console.log(square.render());

const fs = require("fs");
const { Shape, Triangle, Circle, Square } = require("./shapes");

const triangle = new Triangle();
triangle.setColor("red");

const circle = new Circle(50);
circle.setColor("blue");

const square = new Square(100);
square.setColor("green");

const shapes = [triangle, circle, square];

const svgShapes = shapes.map((shape) => shape.render()).join("\n");

const svg = `
<svg width="300" height="300">
  ${svgShapes}
</svg>
`;

fs.writeFileSync("output.html", svg);
