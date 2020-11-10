{
    const IS_PART_TIME = 1;
    const IS_FULL_TIME = 2;
    const PART_TIME_HOURS = 4;
    const FULL_TIME_HOURS = 8;
    const WAGE_PER_HOUR = 20;
    const MONTHLY_WORKING_DAYS = 20;
    const MONTHLY_WORKING_HOURS = 160

    // calculates employee working hours
    function getEmpWorkingHours(empCheck) {
        switch (empCheck) {
            case IS_PART_TIME:
                return PART_TIME_HOURS;
            case IS_FULL_TIME:
                return FULL_TIME_HOURS;
            default:
                return 0;
        }
    }

    // calculates employee daily wage
    function calculateDailyWage(empHours) {
        return empHours * WAGE_PER_HOUR;
    }

    // calculates total employee wage
    let totalEmpWage = 0;
    function sum(dailyWage) {
        totalEmpWage += dailyWage;
    }

    // calculates total employee wage
    function totalWageCal(totalWage, dailyWage) {
        return totalWage + dailyWage;
    }

    let totalEmpHours = 0;
    let dayCount = 0;
    let empDailyWageArray = new Array();
    while (dayCount < MONTHLY_WORKING_DAYS && totalEmpHours <= MONTHLY_WORKING_HOURS) {
        dayCount++;
        let empCheck = Math.floor(Math.random() * 10) % 3;
        let empHours = getEmpWorkingHours(empCheck);
        totalEmpHours += empHours;
        empDailyWageArray.push(calculateDailyWage(empHours));
    }
    let empWage = calculateDailyWage(totalEmpHours);
    console.log("Total days: " + dayCount + " Total hours: " + totalEmpHours + " Employee wage: " + empWage);

    // calculates total wage using array for-each method
    empDailyWageArray.forEach(sum);
    console.log("Total employee wage using for-each: " + totalEmpWage);

    // calculates total wage using array reduce method
    console.log("Total employee wage using reduce: " + empDailyWageArray.reduce(totalWageCal, 0));
}