const { clear } = require("console");

//crating a function
function isNumberPositive(num) {

    //running a if condition to check the given number
    if (num === 0) {
        return "The given number =" + num + "  Is Neutral";
    }
    if (num >= 0) {
        return "The given number =" + num + "  Is Positive";
    }
    else {
        return "The given number =" + num + "  Is Negative";

    }

}
// checking the condition and storing in result1
let result1 = isNumberPositive(0);
console.log(result1);

// checking the condition and storing in result2
let result2 = isNumberPositive(5);
console.log(result2);

// checking the condition and storing in result3
let result3 = isNumberPositive(-1);
console.log(result3);

