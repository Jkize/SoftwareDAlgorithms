import { Item } from "./item";
import { formatPer } from "./util.function";

export abstract class Weapon extends Item{

    static MODIFIER_CHANGE_RATE:number = 0.05;
    protected  baseDamage:number;
    protected damageModifier:number;
    private baseDurability:number;
    protected durabilityModifier:number;
    private isBroke=false;

    constructor(name:string, baseDamage:number, baseDurability:number, value:number, weight:number){
        super(name,value,weight);
        this.baseDamage = baseDamage;
        this.baseDurability = baseDurability;
        this.damageModifier = 0;
        this.durabilityModifier = 0;
    }


    getEffectiveDamage(){
        if(this.isBroke){
            throw new Error(`The ${this.name} is broken`);
        }
        return this.baseDamage + this.damageModifier;
    }

    getEffectiveDurability():number;
    getEffectiveDurability(durabilityModifier: number):number;
    getEffectiveDurability(durabilityModifier?: number){
        if(durabilityModifier){
            return this.baseDurability + durabilityModifier;
        }
        return this.baseDurability + this.durabilityModifier;
    }

    use():string{

        if(this.isBroke){
            return `You can't use the ${this.name}, it is broken.`;
        }
        this.durabilityModifier-=Weapon.MODIFIER_CHANGE_RATE;
        let durability = this.getEffectiveDurability();
        
        let info = `You use the ${this.name}, dealing ${Weapon.MODIFIER_CHANGE_RATE} points of damage.`;
        if(durability<=0){
            info+=`\nThe ${this.name} breaks`;
        }
        
        this.isBroke = durability<=0;
        if(this.isBroke){
            //TO make sure that the getEffectiveDurability becomes 0, not less;
            this.durabilityModifier = -this.baseDurability;
        }
        return info;
    }


    toString(): string {
        return  `${this.name} − Value: ${this.value}, Weight: ${this.weight}, Damage: ${this.getEffectiveDamage()}, Durability: ${formatPer(this.getEffectiveDurability())}`;
    }

    abstract polish():void;

}
