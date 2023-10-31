import { Pizza } from "../task/pizza";


 // Importa la clase Point desde el archivo correspondiente
 fdescribe('OOP Part 2 Pizza', () => {

   it('should create instance pizza',()=>{
    let pizza = new Pizza(1,3,false,10);
    expect(pizza).toBeTruthy();
   });

   it('should create pizza consume',()=>{
    let pizza = new Pizza(1,3,false,3);
    expect(pizza.use()).toEqual("You consumed the pizza.")
    expect(pizza.use()).toEqual("You consumed the pizza.")
    expect(pizza.use()).toEqual("You consumed the pizza.")
    expect(pizza.use()).toEqual("There is nothing left of the pizza to consume.")
   });

   it('should create pizza consume spoiled',()=>{
    let pizza = new Pizza(1,3,true,2);
    expect(pizza.use()).toEqual("You consumed the pizza.\nYou feel sick.")
    expect(pizza.use()).toEqual("You consumed the pizza.\nYou feel sick.")
    expect(pizza.use()).toEqual("There is nothing left of the pizza to consume.")
   });

  
 
 });