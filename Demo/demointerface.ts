//declaration

interface IEmployee{
    empCode:number;
    empName:string;
    getSalary:(empCode:number)=> number;

}

//enum
enum Role{
    ADMIN=1, MANAGER=2, COORDINATOR=3
}

//CLASS 
class PermenentEmployee implements IEmployee{
   
   //instance variables
    empCode: number;
    empName: string;
    //additional datatype fields
    role: any='';
    isContract:boolean=false;

    //constructor
    constructor(_code:number, _name:string){

        this.empCode=_code;
        this.empName=_name;
    }
    //implementation
    getSalary (empCode: number) :number{
        return 75000;
    }

    //custom methods
    getWages(){

        console.log("hourly rate is "+1000);
    }

    
}

let emp= new PermenentEmployee(1001,"Patrick");
console.log(emp.empName);
console.log(emp.getSalary(1001));
console.log(emp.isContract);