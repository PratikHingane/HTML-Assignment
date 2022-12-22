
import { Animals } from "./Animals.js";
import { IMammels } from "./IMammels.js";

export class MyAnimals implements IMammels ,Animals{
    

    bodyTemp:number=0;

    setBodyTemp(temp:number){
        this.bodyTemp=temp;
    }

    saySomething(): string {
        return "";
    }

    getBodyTemp(): number {
        return this.bodyTemp;
    }
    
}