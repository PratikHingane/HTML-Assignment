//create a class 
//global array
let Students=[]

class Student{
   
    
    //user defined default constructor
    constructor(){
        this.name=undefined;
        this.age=undefined;
        this.gender=undefined;
        this.slocation=undefined;
    }

    //add method
    addEventListener(name,age,gender,slocation){
        let newRecord ={
            name: name,
            age:age,
            gender:gender,
            slocation:slocation,
        }

        Students.push(newRecord);
        console.log(Students[0]);
    }
    //list all students
    list(){
        Students.forEach(_stud => {
           console.log("Name : "+_stud.name);
           console.log("Age : "+_stud.age);
           console.log("Gender : "+_stud.gender);
           console.log("Location : "+_stud.slocation);
        });
    }
    //edit method
    //delete method
}

student = new Student();
while(true){
    choice = parseInt(window.prompt("1. Add\n2. List"));

    switch(choice){
        case 1:
            sName = window.prompt("Enter Name : ");
            age =parseInt(window.prompt("Enter Age : "));
            gender = window.prompt("Enter Gender : ");
            location = window.prompt("Enter Location : ");
            student.add(sName,age,gender,slocation);
            break;

        case 2:
            student.list();
            console.log(student);
            break;

        default :
         alert("Invalid Input!!");
         break;
    }
}