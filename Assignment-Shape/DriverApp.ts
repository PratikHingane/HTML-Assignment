import { Rectangle } from "./rectangle.js";
import { Square } from "./square.js";
import {Main} from "./MainArea.js";

let square = new Square(10);
let rectangle = new Rectangle(15,10);
let mainArea =new Main();

console.log("Area of Square : "+mainArea.calculateArea(square));
console.log("Area of Rectangle : "+mainArea.calculateArea(rectangle));