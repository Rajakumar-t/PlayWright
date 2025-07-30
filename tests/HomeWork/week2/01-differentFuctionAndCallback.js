import { setDefaultAutoSelectFamilyAttemptTimeout } from "net";

//  Creating a named function
function userProfile(name) {
    // creating a string dynamic variable
    let greeting = `Hello, ${name}!`;
    // printing the variable
    console.log(greeting);
}

//  Calling the function and passing the parameter
userProfile("Raj");

//  Creating an arrow function named double and passing a parameter a
let double = (a) => {
    // creating a variable 'result' and calculating double
    let result = a * 2;
    // printing the result
    console.log(result);
    // returning the result
    return result;
};

//  Calling the double function
double(5);

//  setTimeout with arrow function to delay a message
setTimeout(() => {
    console.log("This message is delayed by 2 seconds");
}, 2000);

//  Creating a function that accepts a callback
function getUserData(callback) {
    // Simulate delayed data fetching
    setTimeout(() => {
        console.log("“Call Back Function” after 3 seconds");
        //  Execute the callback after delay (if called)
        if (callback) {
            callback();
        }
    }, 3000);
}

//  Calling getUserData
getUserData();
