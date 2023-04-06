export class Shape {
  constructor() {
    if (new.target === Shape) {
      throw new TypeError("Cannot construct Shape instances directly.");
    }
  }

  setColor(color) {
    this.color = color;
  }

  render() {
    throw new Error("Method not implemented.");
  }
}

export class Triangle extends Shape {
  render() {
    return `<polygon points="100,50 50,150 150,150" style="fill:${this.color};" />`;
  }
}

export class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  render() {
    return `<circle cx="150" cy="150" r="${this.radius}" style="fill:${this.color};" />`;
  }
}

export class Square extends Shape {
  constructor(sideLength) {
    super();
    this.sideLength = sideLength;
  }

  render() {
    return `<rect x="50" y="50" width="${this.sideLength}" height="${this.sideLength}" style="fill:${this.color};" />`;
  }
}
