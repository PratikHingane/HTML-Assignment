import {Shape} from './shape.js'

export class Square implements Shape{
   static area() {
       throw new Error("Method not implemented.");
   }
    
   sidea:number;

   constructor(_sidea:number){
    this.sidea=_sidea;
   }
    
   //area implementation method
   area(): number {
        
       return this.sidea*this.sidea;
    }
    
    

}