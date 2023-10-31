import { Item } from "./item";

export abstract class Consumable extends Item{
    public isConsumed:boolean;
    private isSpoiled:boolean;

    constructor(name:string, value:number, weight:number, isSpoiled:boolean){
        super(name,value,weight);
        this.isSpoiled = isSpoiled;
        this.isConsumed =false;
    }

    use(){
        if(this.isConsumed){
            return `There is nothing left of the ${this.name} to consume.`;
        }else{
            let message = `You consumed the ${this.name}.`
            return this.isSpoiled ? message+"\nYou feel sick." : message;
        }

    }
    
}