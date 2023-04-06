class SVG {
    constructor(width, height) {
    this.width = width;
    this.height = height;
    this.shapes = [];
    }

    addShape(shape) {
    this.shapes.push(shape);
    }

    toString() {
    let result = `<svg width="${this.width}" height="${this.height}">\n`;
    for (const shape of this.shapes) {
        result += `  ${shape.toString()}\n`;
    }
    result += `</svg>`;
    return result;
    }
}

module.exports = SVG;
