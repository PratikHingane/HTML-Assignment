export class Cat {
    constructor() {
        this.bodyTemp = 0;
    }
    setBodyTemp(temp) {
        this.bodyTemp = temp;
    }
    saySomething() {
        return "Cats sounds like --> Meoow..";
    }
    getBodyTemp() {
        return this.bodyTemp;
    }
}
