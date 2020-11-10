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

    // shows day alongwith daily wage earned on that day
    let dayNo = 0;
    function mapDayWithWage(dailyWage) {
        dayNo++;
        return "Day: " + dayNo + " => DailyWage: " + dailyWage;
    }
    let mapDayWithWageArray = empDailyWageArray.map(mapDayWithWage);
    console.log("Day with Daily Wage Map: ");
    console.log(mapDayWithWageArray);

    // shows days on which full time wage was earned
    function fullTimeWage(dailyWage) {
        return dailyWage.includes("160");
    }
    let fullDayWageArray = mapDayWithWageArray.filter(fullTimeWage);
    console.log("Day with full time wage: ");
    console.log(fullDayWageArray);

    // finds the first day of full time wage
    console.log("First day of full time wage is: ");
    console.log(fullDayWageArray.find(fullTimeWage));

    // checks whether every element of full time wage array holds for full time wage
    console.log("\nDoes all elements in full time wage array hold full time wage: " + fullDayWageArray.every(fullTimeWage));

    // checks for part time wage
    function partTimeWage(dailyWage) {
        return dailyWage.includes("80");
    }
    console.log("\nDoes any elements in daily wage array hold part time wage: " + mapDayWithWageArray.some(partTimeWage));

    // finds no. of days the employee worked
    function daysWorked(noOfDays, dailyWage) {
        if (dailyWage > 0) return noOfDays+1;
        return noOfDays;
    }
    console.log("\nNumber of days employee worked: " + empDailyWageArray.reduce(daysWorked, 0));
}