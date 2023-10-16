import { Point } from "./point";
import { Shape } from "./shape";

export class Triangle extends Shape{
    
    constructor(points:Point[]);
    constructor(points:Point[], color:string, filled:boolean);
    constructor(points:Point[], color?:string, filled?:boolean){
       if(color === undefined && filled === undefined){
        super(points);
       }else{
           super(points,color!,filled!);
       }
    }
    
    validShape(point: Point[]): boolean {
        return point.length===3;
    }

    toString(): string {
        return `Triangle[${this.points.map((point,idx)=> `v${idx+1}=${point.toString()}`).join(",")}]`;
    }
    
    getType(){
        let sides = this.points.map((point,idx)=>point.distance(this.points[(idx+1)%3]));
       
        if (sides[0] === sides[1] && sides[1] === sides[2]) {
            return "equilateral triangle";
          } else if (sides[0] === sides[1] || sides[1] === sides[2] || sides[0] === sides[2]) {
            return "isosceles triangle";
          } else {
            return "scalene triangle";
          }
    }
    
}