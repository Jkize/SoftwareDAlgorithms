import { Item } from "./item";

export interface ItemComparator{
    compare(first:Item, second:Item):number;
}