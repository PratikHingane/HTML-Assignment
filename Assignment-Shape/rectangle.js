"use strict";
exports.__esModule = true;
exports.Rectangle = void 0;
var Rectangle = /** @class */ (function () {
    //constructor for rectangle
    function Rectangle(_sidea, _sideb) {
        this.sidea = _sidea;
        this.sideb = _sideb;
    }
    //area implementation of rectangle
    Rectangle.prototype.area = function () {
        return this.sidea * this.sideb;
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
