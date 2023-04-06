import { SVG } from './svg';

describe('SVG', () => {
  let svg;

  beforeEach(() => {
    svg = new SVG(300, 300);
  });

  describe('constructor', () => {
    it('should create an instance of SVG', () => {
      expect(svg).toBeInstanceOf(SVG);
    });

    it('should set the width and height properties', () => {
      expect(svg.width).toBe(300);
      expect(svg.height).toBe(300);
    });
  });

  describe('render', () => {
    it('should return a string with the SVG tag and the correct dimensions', () => {
      const expected = '<svg width="300" height="300"></svg>';
      expect(svg.render()).toBe(expected);
    });
  });
});
