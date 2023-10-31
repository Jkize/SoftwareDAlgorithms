import { Bow } from "../task/bow";
import { ItemWeightComparator } from "../task/item_weight_comparator";
import { Iventory } from "../task/iventory";
import { Sword } from "../task/sword";

 // Importa la clase Point desde el archivo correspondiente
 fdescribe('OOP Part 2 Iventory', () => {

   it('should create instance iventory',()=>{

    let iventory = new Iventory();
    iventory.addItem(new Sword(0.9,2,10,1))
    expect(iventory).toBeTruthy();
   });

   it('should inventory sort with/without same value',()=>{

    let iventory = new Iventory();
    
    let items = [new Sword(0.9,2,1,1), new Sword(0.9,2,2,2), new Bow(0.9,2,3,3)];
    
    iventory.addItem(new Bow(0.9,2,3,3));
    iventory.addItem(new Sword(0.9,2,2,2));
    iventory.addItem(new Sword(0.9,2,1,1));

    iventory.sort();
    expect(iventory.toString()).toEqual(items.join(', '));

    const bow = new Bow(1,1,1,1);
    iventory.addItem(bow);
    items.unshift(bow);

    iventory.sort();
    expect(iventory.toString()).toEqual(items.join(', '));
   });

   it('should inventory sort parameters',()=>{

    let iventory = new Iventory();
    
    let items = [new Sword(0.9,2,1,1), new Sword(0.9,2,2,4), new Bow(0.9,2,3,5)];
    
    iventory.addItem(new Sword(0.9,2,2,4));
    iventory.addItem(new Bow(0.9,2,3,5));
    iventory.addItem(new Sword(0.9,2,1,1));

    iventory.sort(new ItemWeightComparator());
    expect(iventory.toString()).toEqual(items.join(', '));

    const bow = new Bow(1,1,0,1);
    iventory.addItem(bow);
    items.unshift(bow);

    iventory.sort(new ItemWeightComparator());
    expect(iventory.toString()).toEqual(items.join(', '));

   });
  
 
 });