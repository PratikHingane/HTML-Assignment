import { Numbers } from "./Numbers.js";
//creating the object of Numbers class
let numbersObject = new Numbers();
//calling display method of Second interface
numbersObject.display();
//calling the demo method of second inetrface
console.log(numbersObject.demo());
//calling getValue() method of first inetrface.
console.log(numbersObject.getValue());
