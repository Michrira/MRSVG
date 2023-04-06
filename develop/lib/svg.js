export class SVG {
    constructor(shapes = []) {
      this.shapes = shapes;
    }
  
    addShape(shape) {
      this.shapes.push(shape);
    }
  
    render() {
      const svgShapes = this.shapes.map(shape => shape.render()).join('\n');
      return `<svg width="300" height="300">\n${svgShapes}\n</svg>`;
    }
  }
  