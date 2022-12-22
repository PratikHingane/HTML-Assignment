import { IFirst } from "./IFirst.js";
import { ISecond } from "./ISecond.js";

export class Numbers implements IFirst,ISecond{
   
    getValue() {
        let num1 :number = 100;
        return num1;
    }
    display() {
        
        console.log("This is method implemented in Second Interface.");

    }
    demo() {
        let num1 :number = 800;
        return num1;
    }

}