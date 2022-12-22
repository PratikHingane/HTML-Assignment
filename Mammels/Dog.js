"use strict";
exports.__esModule = true;
exports.Dog = void 0;
var Dog = /** @class */ (function () {
    function Dog() {
        this.bodyTemp = 0;
    }
    Dog.prototype.setBodyTemp = function (temp) {
        this.bodyTemp = temp;
    };
    Dog.prototype.saySomething = function () {
        return "Dog says Bow Wow..";
    };
    Dog.prototype.getBodyTemp = function () {
        return this.bodyTemp;
    };
    return Dog;
}());
exports.Dog = Dog;
