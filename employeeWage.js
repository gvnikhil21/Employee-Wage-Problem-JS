{
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

    function calculateDailyWage(empHours) {
        return empHours * WAGE_PER_HOUR;
    }

    let totalEmpHours = 0;
    let dayCount = 0;
    let empDailyWageArray = new Array();
    while (dayCount < MONTHLY_WORKING_DAYS && totalEmpHours <= MONTHLY_WORKING_HOURS) {
        dayCount++;
        let empCheck = Math.floor(Math.random() * 10) % 3;
        let empHours = getEmpWorkingHours();
        totalEmpHours += empHours;
        empDailyWageArray.push(calculateDailyWage(empHours));
    }
    let empWage = calculateDailyWage(totalEmpHours);
    console.log("Total days: " + dayCount + " Total hours: " + totalEmpHours + " Employee wage: " + empWage);
}