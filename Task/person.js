var Person = /** @class */ (function () {
    function Person(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    Person.prototype.display = function () {
        console.log(this.name);
        console.log(this.age);
        this.hobbies.forEach(function (hobby) {
            console.log(hobby);
        });
    };
    return Person;
}());
var person = new Person("Pratik", 24, ["Music", "Games", "Coding"]);
person.display();
