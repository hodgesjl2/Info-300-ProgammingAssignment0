// Jamir Hodges

var readlineSync = require("readline-sync");

var input = readlineSync.question("Enter a string: ");
var text = input.toLowerCase();

var freq = {};
var firstRepeat = "";

for (var i = 0; i < text.length; i++) {
    var char = text[i];

    if (char >= 'a' && char <= 'z') {

        if (freq[char]) {
            freq[char] = freq[char] + 1;

            if (firstRepeat === "") {
                firstRepeat = char;
            }
        } else {
            freq[char] = 1;
        }
    }
}

console.log("Letter frequencies:");

for (var letter in freq) {
    console.log(letter + ": " + freq[letter]);
}

console.log("First repeated letter: " + firstRepeat);
