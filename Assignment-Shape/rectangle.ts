import {Shape} from './shape.js'

export class Rectangle implements Shape{
    
    sidea:number;
    sideb:number;

    //constructor for rectangle
    constructor(_sidea:number,_sideb:number){
        this.sidea=_sidea;
        this.sideb=_sideb;
    }
    
    //area implementation of rectangle
    area(): number {
        return this.sidea * this.sideb;
    }

}