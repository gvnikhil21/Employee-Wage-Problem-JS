let regexName = RegExp('^[A-Z][a-z]{3,}$');
let regexGender = RegExp('[M,F]');
class EmployeePayRollData {
    // properties
    id;
    salary;
    gender;
    startDate;

    // constructor
    constructor(...params) {
        if (!(params[0] > 0)) throw `Id is Invalid!`
        {
            this.id = params[0];
        }
        this.name = params[1];
        if (!(params[2] > 0)) throw `Salary is Invalid!`
        {
            this.salary = params[2];
        }
        if (!(regexGender.test(params[3]))) throw `Gender is Invalid!`
        {
            this.gender = params[3];
        }
        if (params[4] > new Date()) throw `StartDate is Invalid!`
        {
            this.startDate = params[4];
        }
    }

    get name() { return this._name; }
    set name(name) {
        if (regexName.test(name))
            this._name = name;
        else
            throw 'Name is Invalid!'
    }
    //methods
    toString() {
        const options = {
            year: 'numeric', month: 'long', day: 'numeric'
        };
        const empDate = this.startDate == undefined ? "undefined" : this.startDate.toLocaleDateString("en-IN", options);
        return "id = " + this.id + ", name = " + this.name + ", salary = " + this.salary + ", gender = " + this.gender + ", start-date = " + empDate;
    }
}
// incorrect name
try {
   let employeePayRollData = new EmployeePayRollData(1, "Mark", 30000, 'M', new Date());
    console.log(employeePayRollData.toString());
    employeePayRollData.name = "john";
    console.log(employeePayRollData.toString());
} catch (e) {
    console.error(e);
}

// correct name
try {
    employeePayRollData = new EmployeePayRollData(2, "Terissa", 30000, "F", new Date());
    console.log(employeePayRollData.toString());
} catch (e) {
    console.error(e);
}

// invalid id
try {
    employeePayRollData = new EmployeePayRollData(-5, "Terissa", 30000, "F", new Date());
    console.log(employeePayRollData.toString());
} catch (e) {
    console.error(e);
}

// invalid salary
try {
    employeePayRollData = new EmployeePayRollData(2, "Terissa", -30000, "F", new Date());
    console.log(employeePayRollData.toString());
} catch (e) {
    console.error(e);
}

// invalid gender
try {
    employeePayRollData = new EmployeePayRollData(2, "Terissa", 30000, "K", new Date());
    console.log(employeePayRollData.toString());
} catch (e) {
    console.error(e);
}

// date is invalid
try {
    employeePayRollData = new EmployeePayRollData(2, "Terissa", 30000, "F", new Date('2022-02-20'));
    console.log(employeePayRollData.toString());
} catch (e) {
    console.error(e);
}

// all valid entries
try {
    employeePayRollData = new EmployeePayRollData(3, "Yagami", 300000, "M", new Date());
    console.log(employeePayRollData.toString());
} catch (e) {
    console.error(e);
}
