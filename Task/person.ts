class Person {

    public name:string;

    public age:number;

    public hobbies:Array<string>;



    constructor(name:string,age:number,hobbies:Array<string>){

        this.name = name;

        this.age = age;

        this.hobbies = hobbies;

    }
    display() {

        console.log(this.name);
        console.log(this.age);
        this.hobbies.forEach(hobby => {
    
            console.log(hobby);
         });
  

}

}

let person:Person = new Person("Pratik", 24,["Music","Games","Coding"]);

person.display();
