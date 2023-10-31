import { Bow } from "../task/bow";
import { Sword } from "../task/sword";

 // Importa la clase Point desde el archivo correspondiente
 fdescribe('OOP Part 2 Weapon', () => {

   it('should create instance sword',()=>{
    let sword = new Sword(0.9,2,10,1);
    expect(sword.name).toEqual("sword");
    expect(sword).toBeTruthy();
   });

   it('should use sword EffectiveDurability and getEffectiveDamage Error',()=>{

    let sword = new Sword(1,0.1,10,1);
    expect(sword.use()).toEqual("You use the sword, dealing 0.05 points of damage.");
    expect(sword.getEffectiveDurability()).toEqual(0.05);

    expect(sword.use()).toEqual("You use the sword, dealing 0.05 points of damage.\nThe sword breaks")
    expect(sword.getEffectiveDurability()).toEqual(0);

    expect(() => sword.getEffectiveDamage()).toThrowError(
        new Error('The sword is broken')
      );    
    expect(sword.use()).toEqual("You can't use the sword, it is broken.");
   });

   it('should use sword (Polish and getEffectiveDamage)',()=>{

    let sword = new Sword(1,0.1,10,1);
    sword.polish();

    expect(sword.getEffectiveDamage()).toEqual(1.05);
    for(let i=0; i<5; i++){
        sword.polish();
    }
    expect(sword.getEffectiveDamage()).toEqual(1.25);
    sword.polish();
    expect(sword.getEffectiveDamage()).toEqual(1.25);
   });

   it('should create instance bow',()=>{
    let bow = new Bow(0.9,2,10,1);
    expect(bow.name).toEqual("bow");
    expect(bow).toBeTruthy();
   });

   it('should use bow (Polish and getEffectiveDurability',()=>{
    let bow = new Bow(0.9,0.1,10,1);
    bow.polish();
    expect(bow.getEffectiveDurability().toFixed(2)).toEqual("0.15")
   });
 
 });