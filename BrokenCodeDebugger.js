// Jamir Hodges

var readlineSync = require("readline-sync");

var start = readlineSync.questionInt("Enter start number: ");
var end = readlineSync.questionInt("Enter end number: ");

var count = 0;

for (var i = start; i <= end; i++) {
    if (i % 2 == 0) {
        count += 1;
    }
}

console.log("Even numbers between " + start + " and " + end + ": " + count);
