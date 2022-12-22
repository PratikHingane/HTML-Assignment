export class Square {
    static area() {
        throw new Error("Method not implemented.");
    }
    constructor(_sidea) {
        this.sidea = _sidea;
    }
    //area implementation method
    area() {
        return this.sidea * this.sidea;
    }
}
