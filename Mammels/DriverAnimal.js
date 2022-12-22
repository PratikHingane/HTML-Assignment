"use strict";
exports.__esModule = true;
var cat_js_1 = require("./cat.js");
var Dog_js_1 = require("./Dog.js");
//create variable
var cat = new cat_js_1.Cat();
var dog = new Dog_js_1.Dog();
console.log(cat.saySomething());
console.log(dog.saySomething());
cat.setBodyTemp(25);
dog.setBodyTemp(30);
console.log(cat.getBodyTemp());
console.log(dog.getBodyTemp());
