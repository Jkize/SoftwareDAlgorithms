import { Item } from "./item";
import { ItemComparator } from "./item_comparator";

export class ItemWeightComparator implements ItemComparator{
    compare(first: Item, second: Item): number {
        
        if(first.weight === second.weight){
            return first.compareTo(second);
        }else{
            return first.weight>second.weight? 1 : -1;
        }
    }
    
}