//creating a function   
function isOddnumber(num) {
    //creating a if condition to find the reminder
    if (num % 2 === 0) {
        return "The number is even";
    }
    else {
        return "The number is odd";
    }
}
// running the number 4(num) in the loop and storing it result1
let result1 = isOddnumber(4);
console.log(result1);

// running the number 7(num) in the loop and storing it result2
let result2 = isOddnumber(7);
console.log(result2);