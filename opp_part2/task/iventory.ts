import { Item } from "./item";
import { ItemComparator } from "./item_comparator";

export  class Iventory {

    private items:Item[];

    constructor(){
        this.items=[];
    }

    addItem(item:Item):void{
        this.items.push(item);
    }

    sort():void;
    sort(comparator:ItemComparator):void;
    sort(comparator?:ItemComparator):void{
        if(comparator){
            this.items.sort((a,b)=>comparator.compare(a,b));
        }else{
            this.items.sort((a,b)=>a.compareTo(b));
        }
    }

    toString(){
       return this.items.join(", ").toString();
    }
    
 
}