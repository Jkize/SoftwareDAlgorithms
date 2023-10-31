import { Consumable } from "./consumable";

export class Pizza extends Consumable{

    public readonly numberOfSlices:number;
    private numberOfEatenSlices:number;

    constructor(value:number,weight:number,isSpoiled:boolean, numberOfSlices:number){

        super('pizza',value,weight,isSpoiled);
        this.numberOfEatenSlices=numberOfSlices;
        this.numberOfSlices = numberOfSlices;
    }

    use(): string {
        if(this.numberOfEatenSlices==0){
            this.isConsumed = true;
        }else{
            this.numberOfEatenSlices-=1;
        }
        return super.use();
    }

    getNumberOfEatenSlices():number{
        return this.numberOfEatenSlices;
    }
}