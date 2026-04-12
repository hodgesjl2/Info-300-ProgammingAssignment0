var readLineSync = require('readline-sync');

// get current average
var currentAverage = readLineSync.questionFloat("Enter your current average: ");

if (currentAverage < 0 || currentAverage > 100) {
    console.log("Invalid average");
    currentAverage = 0;
}

// loop for 3 scenarios
for (var i = 0; i < 3; i++) {

    var finalExam = readLineSync.questionFloat("Enter a final exam score: ");

    if (finalExam < 0 || finalExam > 100) {
        console.log("Invalid score");
        finalExam = 0;
    }

    var finalAverage = (currentAverage * 0.75) + (finalExam * 0.25);

    var letterGrade = "";

    if (finalAverage > 89.5) {
        letterGrade = "A";
    } else if (finalAverage > 79.5) {
        letterGrade = "B";
    } else if (finalAverage > 69.5) {
        letterGrade = "C";
    } else if (finalAverage > 59.5) {
        letterGrade = "D";
    } else {
        letterGrade = "F";
    }

    var result = "";

    if (finalAverage > currentAverage) {
        result = "Improved";
    } else if (finalAverage < currentAverage) {
        result = "Declined";
    } else {
        result = "Stayed the same";
    }

    console.log("\nFinal Exam Score: " + finalExam);
    console.log("Final Course Average: " + finalAverage);
    console.log("Letter Grade: " + letterGrade);
    console.log("Result: " + result);
}