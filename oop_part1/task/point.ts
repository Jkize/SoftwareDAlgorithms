export class Point{
    private x:number;
    private y:number;

    constructor();
    constructor(x:number,y:number);
    constructor(x?:number, y?:number){
         if(typeof x === 'number' && typeof y === 'number'){
            this.x = x;
            this.y = y;
        }else{
            this.x = 0;
            this.y=0;
        }
    }

    toString():string{
        return `(${this.x}, ${this.y})`;
    }

    distance():number;
    distance(point:Point):number;
    distance(x:number, y:number):number;
    distance(px?: number | Point, y?:number):number{
        let x2=0;
        let y2=0;
        if(px instanceof Point){
            x2=px.x;
            y2 = px.y;
        }else if(typeof px === 'number'){
            x2 = px;
            y2 = y!;
        }
        return Math.sqrt ( Math.pow(this.x -x2, 2 )+ Math.pow(this.y -y2, 2 )  );
    }

}