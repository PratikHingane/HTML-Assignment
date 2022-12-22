interface Ipayload{
    Masskg:number;
}

//class Astronaut
class Astronaut implements Ipayload{
   
   //instance variables
    Masskg: number;
    Name: string;

    constructor(_mass:number, _name:string){
        this.Masskg=_mass;
        this.Name=_name;
    }

}

//class Cargo
class Cargo implements Ipayload{
   
   // variables
    Masskg: number;
    matName: string;

    constructor(_mass:number, _mname:string){
        this.Masskg=_mass;
        this.matName=_mname;
    }
    
}

class Rocket{
    
    //variables
    Name:string;
    totalCapacityKg:number;
    cargoItems:Cargo[]=[];
    astronauts:Astronaut[]=[];

    //constructor
    constructor(_name:string,_totalkg:number){
        this.Name=_name;
        this.totalCapacityKg=_totalkg;
    }

    //implementation of sumMass method
    sumMass( items: Ipayload[] ): number{
        let sum:number=0;
        items.forEach(item =>{
            sum+=item.Masskg;
        })
        return sum;
    }


    currentMassKg(): number{
        

        return this.sumMass(this.astronauts)+this.sumMass(this.cargoItems);
    }

}