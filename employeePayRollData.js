class EmployeePayRollData {
    // properties
    id;
    name;
    salary;
    gender;
    startDate;

    // constructor
    constructor(id, name, salary, gender, startDate) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.gender = gender;
        this.startDate = startDate;
    }

    // getter and setter
    get id() { return this.id; }
    set id(id) { this.id = id; }

    get name() { return this.name; }
    set name(name) { this.name = name; }

    get salary() { return this.salary; }
    set salary(salary) { this.salary = salary; }

    get gender() { return this.gender; }
    set gender(gender) { this.gender = gender; }

    get startDate() { return this.startDate; }
    set startDate(startDate) { this.startDate = startDate; }

    //methods
    toString() {
        const options = {
            year: 'numeric', month: 'long', day: 'numeric'
        };
        const empDate = this.startDate == undefined ? "undefined" : this.startDate.toLocaleDateString("en-IN", options);
        return "id = " + this.id + ", name = " + this.name + ", salary = " + this.salary + ", gender = " + this.gender + ", start-date = " + empDate;
    }
}

let employeePayRollData = new EmployeePayRollData(1, "Mark", 30000, 'M', new Date());
console.log(employeePayRollData.toString());
employeePayRollData.name = "John";
console.log(employeePayRollData.toString());