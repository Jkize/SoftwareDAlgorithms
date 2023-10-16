 // Importa la clase Point desde el archivo correspondiente

import { Point } from "../task/point";
import { Triangle } from "../task/triangle";

 
 describe('OOP Part 1 Triangle',()=>{

  it('should create an invalid triangle',()=>{
    const points = [new Point(0, 0), new Point(1, 1)]; 
    expect(() => new Triangle(points)).toThrowError(
      "The points don't form the corresponding figure"
    );

  }
  );

  it('should create an equilateral isosceles triangle  with default color and filled', () => {
    const points = [new Point(), new Point(3,4), new Point(-3,4)];
    const triangle = new Triangle(points);
    expect( triangle.toString()).toBe(
    'Triangle[v1=(0, 0),v2=(3, 4),v3=(-3, 4)]'
    );
    expect(triangle.getType()).toBe('isosceles triangle');
    expect(triangle.getColor()).toBe('green');
    expect(triangle.getFilled()).toBe(true);
  });

  it('should create an equilateral equilateral triangle  with  color and filled', () => {
    const points = [new Point(), new Point(2,0), new Point(1,3)];
    const triangle = new Triangle(points,'red',false);
    expect( triangle.toString()).toBe(
    'Triangle[v1=(0, 0),v2=(2, 0),v3=(1, 3)]'
    );
    expect(triangle.getType()).toBe('isosceles triangle');
    expect(triangle.getColor()).toBe('red');
    expect(triangle.getFilled()).toBe(false);
  });

  it('should create an equilateral scalene triangle  with  color and filled', () => {
    const points = [new Point(), new Point(2,0), new Point(-10,3)];
    const triangle = new Triangle(points,'black',false);
    expect( triangle.toString()).toBe(
    'Triangle[v1=(0, 0),v2=(2, 0),v3=(-10, 3)]'
    );
    expect(triangle.getType()).toBe('scalene triangle');
    expect(triangle.getColor()).toBe('black');
    expect(triangle.getFilled()).toBe(false);
  });

 });
