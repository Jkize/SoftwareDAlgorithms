import { Weapon } from "./weapon";

export class Sword extends Weapon{


    constructor(baseDamage:number, baseDurability:number, value:number, weight:number){
     super("sword",baseDamage,baseDurability,value,weight);   
    }


    polish(): void {
        this.damageModifier+=Weapon.MODIFIER_CHANGE_RATE;
        const d25 = this.baseDamage*0.25;
        if(this.damageModifier> d25){
            this.damageModifier = d25;
        }
    }
}