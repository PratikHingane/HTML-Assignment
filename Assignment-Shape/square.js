"use strict";
exports.__esModule = true;
exports.Square = void 0;
var Square = /** @class */ (function () {
    function Square(_sidea) {
        this.sidea = _sidea;
    }
    Square.area = function () {
        throw new Error("Method not implemented.");
    };
    //area implementation method
    Square.prototype.area = function () {
        return this.sidea * this.sidea;
    };
    return Square;
}());
exports.Square = Square;
