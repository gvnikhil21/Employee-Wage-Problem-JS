class EmployeePayRollData {
    // properties
    id;
    name;
    salary;

    // constructor
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    // getter and setter
    get id() { return this.id; }
    set id(id) { this.id = id; }

    get name() { return this.name; }
    set name(name) { this.name = name; }

    get salary() { return this.salary; }
    set salary(salary) { this.salary = salary; }

    //methods
    toString() {
        return `id:${this.id}, name:${this.name}, salary:${this.salary}`;
    }
}

let employeePayRollData = new EmployeePayRollData(1, "Mark", 30000);
console.log(employeePayRollData.toString());
employeePayRollData.name = "John";
console.log(employeePayRollData.toString());