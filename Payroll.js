var readLineSync = require('readline-sync');

var employees = [];

for (var i = 0; i < 3; i++) {

    var name = readLineSync.question("Enter name: ");
    var wage = readLineSync.questionFloat("Enter wage: ");
    var hours = readLineSync.questionFloat("Enter hours: ");

    var regularPay = 0;
    var overtimePay = 0;
    var totalPay = 0;

    // validation (same style as your example)
    if (wage <= 0) {
        console.log("Invalid wage");
        wage = 1;
    }

    if (hours < 0 || hours > 80) {
        console.log("Invalid hours");
        hours = 0;
    }

    // conditional logic (same style as grade example)
    if (hours <= 40) {
        regularPay = hours * wage;
    } else {
        regularPay = 40 * wage;
        overtimePay = (hours - 40) * wage * 1.5;
    }

    totalPay = regularPay + overtimePay;

    var employee = {
        name: name,
        hours: hours,
        regularPay: regularPay,
        overtimePay: overtimePay,
        totalPay: totalPay
    };

    employees.push(employee);
}

// output (same style as example)
console.log("\nPayroll Report");

var highest = employees[0];

for (var i = 0; i < employees.length; i++) {

    console.log("\nName: " + employees[i].name);
    console.log("Total Hours: " + employees[i].hours);
    console.log("Regular Pay: " + employees[i].regularPay);
    console.log("Overtime Pay: " + employees[i].overtimePay);
    console.log("Total Pay: " + employees[i].totalPay);

    if (employees[i].totalPay > highest.totalPay) {
        highest = employees[i];
    }
}

console.log("\nHighest Paid Employee: " + highest.name);
console.log("Total Pay: " + highest.totalPay);