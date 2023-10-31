import { Bow } from "../task/bow";
import { ItemWeightComparator } from "../task/item_weight_comparator";
import { Iventory } from "../task/iventory";
import { Pizza } from "../task/pizza";
import { Sword } from "../task/sword";

 // Importa la clase Point desde el archivo correspondiente
 fdescribe('OOP Part 2 item weight comparator', () => {

   it('should create instance itemWeightComparator',()=>{

    let itemC = new ItemWeightComparator();
    expect(itemC).toBeTruthy();
   });

   it('should itemC comparator',()=>{

    let itemC = new ItemWeightComparator();

    expect(itemC.compare(new Bow(0.9,2,3,3),new Sword(0.9,2,2,2))).toEqual(1);

    expect(itemC.compare(new Bow(0.9,2,3,3),new Pizza(1,3,false,3))).toEqual(1);
    //Same weight, same value, different name
    expect(itemC.compare(new Bow(1,1,1,1),new Pizza(1,1,false,1))).toEqual(-1);

    
 
   });

 
 });