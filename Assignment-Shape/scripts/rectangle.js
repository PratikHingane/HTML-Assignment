export class Rectangle {
    //constructor for rectangle
    constructor(_sidea, _sideb) {
        this.sidea = _sidea;
        this.sideb = _sideb;
    }
    //area implementation of rectangle
    area() {
        return this.sidea * this.sideb;
    }
}
