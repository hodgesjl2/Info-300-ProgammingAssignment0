// Jamir Hodges

var readlineSync = require("readline-sync");

var n = readlineSync.questionInt("Enter a positive number up to 1000: ");
while (n <= 0 || n > 1000) {
    console.log("Invalid input");
    n = readlineSync.questionInt("Enter a positive number up to 1000: ");
}

var primes = [];

for (var num = 2; num <= n; num++) {
    var isPrime = true;

    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
        }
    }

    if (isPrime) {
        primes.push(num);
    }
}

console.log("Primes up to " + n + ": [" + primes.join(", ") + "]");

var largestGap = 0;
var totalGap = 0;
var first = 0;
var second = 0;

for (var j = 0; j < primes.length - 1; j++) {
    var gap = primes[j + 1] - primes[j];
    totalGap = totalGap + gap;

    if (gap > largestGap) {
        largestGap = gap;
        first = primes[j];
        second = primes[j + 1];
    }
}

var average = totalGap / (primes.length - 1);

console.log("The largest gap is " + largestGap + ", between " + first + " and " + second);
console.log("The average gap is " + average.toFixed(2));
