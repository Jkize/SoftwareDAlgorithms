import { Comparable } from "./comparable";

export abstract class Item implements Comparable<Item>{

    public readonly name:string;
    public value:number;
    public weight:number;

    private readonly id:number;
    private static idCounter:number;

    constructor(name:string, value:number, weight:number){
        this.id = Item.idCounter+1;
        this.name = name;
        this.value = value;
        this.weight = weight;
    }

    static resetIdCounter():void{
        this.idCounter = 0;
    }

    abstract use():void;

    compareTo(other: Item): number {
        let cp =0;
        if(this.id !== other.value){
            cp = this.value>other.value?1:-1;
        }
        
        if(cp===0){
            return this.name.toLowerCase().localeCompare(other.name.toLowerCase());
        }
        return cp;
    }

    getId():number{
        return this.id;
    }

    toString(){
        return `${this.name} - Value: ${this.value}, Wright: ${this.weight} `;
    }
}
