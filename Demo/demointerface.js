//declaration
//enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 1] = "ADMIN";
    Role[Role["MANAGER"] = 2] = "MANAGER";
    Role[Role["COORDINATOR"] = 3] = "COORDINATOR";
})(Role || (Role = {}));
//CLASS 
var PermenentEmployee = /** @class */ (function () {
    //constructor
    function PermenentEmployee(_code, _name) {
        //additional datatype fields
        this.role = '';
        this.isContract = false;
        this.empCode = _code;
        this.empName = _name;
    }
    //implementation
    PermenentEmployee.prototype.getSalary = function (empCode) {
        return 75000;
    };
    //custom methods
    PermenentEmployee.prototype.getWages = function () {
        console.log("hourly rate is " + 1000);
    };
    return PermenentEmployee;
}());
var emp = new PermenentEmployee(1001, "Patrick");
console.log(emp.empName);
console.log(emp.getSalary(1001));
console.log(emp.isContract);
