import { Point } from "./point";

export abstract class Shape{
    protected color:string
    protected filled:boolean;
    protected points:Point[];
    
    constructor(points:Point[]);
    constructor(points:Point[], color:string, filled:boolean);
    constructor(points:Point[], color?:string, filled?:boolean){

        if (!this.validShape(points)){
            throw new Error("The points don't form the corresponding figure")
        }

        this.points = points;
        if(color !==undefined && filled !== undefined){
            this.color = color;
            this.filled = filled;
        }else{
            this.color = 'green';
            this.filled = true;
        }
    }

    //Every child needs to valid their 
    abstract validShape(point:Point[]):boolean;

    abstract getType():string;

    toString():string{
        return `A Shape with color ${this.color} and  ${this.filled?'filled':'Not filled'}. Points: ${this.points.map((point)=>point.toString()).join(", ")}`;
    }

    getPerimeter():number{
       return this.points.reduce((sumT,point)=>sumT+point.distance(),0);
    }

    getColor(){
        return this.color;
    }

    getFilled(){
        return this.filled;
    }
}