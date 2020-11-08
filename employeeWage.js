const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const MONTHLY_WORKING_DAYS = 20;
const MONTHLY_WORKING_HOURS = 160

function getEmpWorkingHours() {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}
let empHours = 0;
let empCheck = 0;
let dayCount = 0;
while (dayCount < MONTHLY_WORKING_DAYS && empHours <= MONTHLY_WORKING_HOURS) {
    dayCount++;
    empCheck = Math.floor(Math.random() * 10) % 3;
    empHours += getEmpWorkingHours();
}
if (empHours > MONTHLY_WORKING_HOURS)
    empHours = MONTHLY_WORKING_HOURS;
let empWage = empHours * WAGE_PER_HOUR;
console.log("Total days: " + dayCount + " Total hours: " + empHours + " Employee wage: " + empWage);