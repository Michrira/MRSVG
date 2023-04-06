const { Shape, Circle, Square, Triangle } = require('./shapes');

describe('Shape', () => {
  test('render method should throw an error when called', () => {
    const shape = new Shape();
    expect(() => shape.render()).toThrow('render method is not implemented');
  });

  test('setColor method should set the color of the shape', () => {
    const shape = new Shape();
    shape.setColor('red');
    expect(shape.color).toBe('red');
  });
});

describe('Circle', () => {
  test('render method should return a valid SVG circle element', () => {
    const circle = new Circle(50);
    expect(circle.render()).toBe('<circle cx="0" cy="0" r="50" fill="none" stroke="black"/>');
  });

  test('setColor method should set the color of the circle', () => {
    const circle = new Circle(50);
    circle.setColor('blue');
    expect(circle.color).toBe('blue');
  });
});

describe('Square', () => {
  test('render method should return a valid SVG rect element', () => {
    const square = new Square(100);
    expect(square.render()).toBe('<rect x="-50" y="-50" width="100" height="100" fill="none" stroke="black"/>');
  });

  test('setColor method should set the color of the square', () => {
    const square = new Square(100);
    square.setColor('green');
    expect(square.color).toBe('green');
  });
});

describe('Triangle', () => {
  test('render method should return a valid SVG polygon element', () => {
    const triangle = new Triangle();
    expect(triangle.render()).toBe('<polygon points="0,-50 43.3,25 -43.3,25" fill="none" stroke="black"/>');
  });

  test('setColor method should set the color of the triangle', () => {
    const triangle = new Triangle
