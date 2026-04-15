// Jamir Hodges

var readlineSync = require("readline-sync");

var n = readlineSync.questionInt("Enter the number of Fibonacci numbers: ");
while (n <= 0) {
    console.log("Invalid input");
    n = readlineSync.questionInt("Enter the number of Fibonacci numbers: ");
}

var fib = [];

if (n >= 1) {
    fib.push(0);
}
if (n >= 2) {
    fib.push(1);
}

for (var i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
}

console.log("Full sequence: [" + fib.join(", ") + "]");

var oddFib = [];

for (var j = 0; j < fib.length; j++) {
    if (fib[j] % 2 !== 0) {
        oddFib.push(fib[j]);
    }
}

console.log("Odd Fibonacci numbers: [" + oddFib.join(", ") + "]");
