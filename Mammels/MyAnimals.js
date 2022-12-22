"use strict";
exports.__esModule = true;
exports.MyAnimals = void 0;
var MyAnimals = /** @class */ (function () {
    function MyAnimals() {
        this.bodyTemp = 0;
    }
    MyAnimals.prototype.setBodyTemp = function (temp) {
        this.bodyTemp = temp;
    };
    MyAnimals.prototype.saySomething = function () {
        return "";
    };
    MyAnimals.prototype.getBodyTemp = function () {
        return this.bodyTemp;
    };
    return MyAnimals;
}());
exports.MyAnimals = MyAnimals;
