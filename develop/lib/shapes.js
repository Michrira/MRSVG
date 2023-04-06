class Shape {
  constructor(name, sides = []) {
    this.name = name;
    this.sides = sides;
  }

  perimeter() {
    return this.sides.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }
}

class Square extends Shape {
  constructor(sideLength) {
    super("square", [sideLength, sideLength, sideLength, sideLength]);
    this.sideLength = sideLength;
  }

  area() {
    return this.sideLength ** 2;
  }
}

class Triangle extends Shape {
  constructor(sideA, sideB, sideC) {
    super("triangle", [sideA, sideB, sideC]);
  }

  area() {
    const s = this.perimeter() / 2;
    return Math.sqrt(s * (s - this.sides[0]) * (s - this.sides[1]) * (s - this.sides[2]));
  }
}

module.exports = {
  Shape,
  Square,
  Triangle
};
