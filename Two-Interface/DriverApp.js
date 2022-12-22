"use strict";
exports.__esModule = true;
var Numbers_1 = require("./Numbers");
//creating the object of Numbers class
var numbersObject = new Numbers_1.Numbers();
//calling display method of Second interface
numbersObject.display();
//calling the demo method of second inetrface
console.log(numbersObject.demo());
//calling getValue() method of first inetrface.
console.log(numbersObject.getValue());
