 // Importa la clase Point desde el archivo correspondiente

import { Point } from "../task/point";
 
describe('OOP Part 1 Point', () => {
  it('should create an instance with default values', () => {
    const point = new Point();
    expect(point.toString()).toBe('(0, 0)');
  });

  it('should create an instance with specific coordinates', () => {
    const point = new Point(3, 4);
    expect(point.toString()).toBe('(3, 4)');
  });

  it('should calculate distance between two points', () => {
    const point1 = new Point(-7,11);
    const point2 = new Point(5, 6);
    expect(point1.distance(point2)).toBe(13);
  });

  it('should calculate distance between a point and specific coordinates', () => {
    const point1 = new Point();
    expect(point1.distance(3, 4)).toBe(5);
  });

  it('should calculate distance itselft', () => {
    const point1 = new Point(0,10);
    expect(point1.distance()).toBe(10);
  });
});