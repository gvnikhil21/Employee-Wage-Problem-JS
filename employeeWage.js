{
    const IS_PART_TIME = 1;
    const IS_FULL_TIME = 2;
    const PART_TIME_HOURS = 4;
    const FULL_TIME_HOURS = 8;
    const WAGE_PER_HOUR = 20;
    const MONTHLY_WORKING_DAYS = 20;
    const MONTHLY_WORKING_HOURS = 160

    // calculates employee working hours
    const findEmpWorkingHours = (empCheck) => {
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
    const calDailyWage = (empHours) => {
        return empHours * WAGE_PER_HOUR;
    }

    // calculates total employee wage
    let totalEmpWage = 0;
    const sum = (dailyWage) => {
        totalEmpWage += dailyWage;
    }

    // calculates total employee wage
    const totalWageCal = (totalWage, dailyWage) => {
        return totalWage + dailyWage;
    }

    let totalEmpHours = 0;
    let dayCount = 0;
    let empDailyWageArray = new Array();
    let empDailyWageMap = new Map();
    let empDailyHoursMap = new Map();
    while (dayCount < MONTHLY_WORKING_DAYS && totalEmpHours <= MONTHLY_WORKING_HOURS) {
        dayCount++;
        let empCheck = Math.floor(Math.random() * 10) % 3;
        let empHours = findEmpWorkingHours(empCheck);
        totalEmpHours += empHours;
        let dailyWage = calDailyWage(empHours);
        empDailyWageArray.push(dailyWage);
        empDailyWageMap.set(dayCount, dailyWage);
        empDailyHoursMap.set(dayCount, empHours);
    }
    let empWage = calDailyWage(totalEmpHours);
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
    const checkFullTimeWage = (dailyWage) => {
        return dailyWage.includes("160");
    }
    let fullDayWageArray = mapDayWithWageArray.filter(checkFullTimeWage);
    console.log("Day with full time wage: ");
    console.log(fullDayWageArray);

    // finds the first day of full time wage
    console.log("First day of full time wage is: ");
    console.log(fullDayWageArray.find(checkFullTimeWage));

    // checks whether every element of full time wage array holds for full time wage
    console.log("Does all elements in full time wage array hold full time wage: " + fullDayWageArray.every(checkFullTimeWage));

    // checks for part time wage
    const checkPartTimeWage = (dailyWage) => {
        return dailyWage.includes("80");
    }
    console.log("Does any elements in daily wage array hold part time wage: " + mapDayWithWageArray.some(checkPartTimeWage));

    // finds no. of days the employee worked
    function daysWorked(noOfDays, dailyWage) {
        if (dailyWage > 0) return noOfDays + 1;
        return noOfDays;
    }
    console.log("Number of days employee worked: " + empDailyWageArray.reduce(daysWorked, 0));

    //calculates total wage and total hours using the values stored in map
    console.log("Total wage of employee using values stored in map: " + Array.from(empDailyWageMap.values()).reduce(totalWageCal, 0));
    const totalHoursCal = (totalHours, dailyHours) => {
        return totalHours + dailyHours;
    }
    console.log("Total hours of employee using values stored in map: " + Array.from(empDailyHoursMap.values()).reduce(totalHoursCal, 0));

    // shows full-time,part-time,no working days
    let nonWorkingDays = new Array();
    let partWorkingDays = new Array();
    let fullWorkingDays = new Array();
    empDailyHoursMap.forEach((value, key) => {
        if (value == 8) fullWorkingDays.push(key);
        else if (value == 4) partWorkingDays.push(key);
        else nonWorkingDays.push(key);
    });
    console.log(`Full working days: ${fullWorkingDays}`);
    console.log(`Part working days: ${partWorkingDays}`);
    console.log(`Non working days: ${nonWorkingDays}`);
}