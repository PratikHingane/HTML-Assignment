import { Cat } from "./cat.js";
import { Dog } from "./Dog.js";
//create variable
let cat = new Cat();
let dog = new Dog();
console.log(cat.saySomething());
console.log(dog.saySomething());
cat.setBodyTemp(25);
dog.setBodyTemp(30);
console.log(cat.getBodyTemp());
console.log(dog.getBodyTemp());
