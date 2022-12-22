"use strict";
exports.__esModule = true;
exports.Cat = void 0;
var Cat = /** @class */ (function () {
    function Cat() {
        this.bodyTemp = 0;
    }
    Cat.prototype.setBodyTemp = function (temp) {
        this.bodyTemp = temp;
    };
    Cat.prototype.saySomething = function () {
        return "Cats sounds like --> Meoow..";
    };
    Cat.prototype.getBodyTemp = function () {
        return this.bodyTemp;
    };
    return Cat;
}());
exports.Cat = Cat;
