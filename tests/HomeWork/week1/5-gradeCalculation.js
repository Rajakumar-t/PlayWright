const { log } = require("console");
const { loadavg } = require("os");
//creating a fuction
function studentScore(marks) {
    //creating a variable to store the result
    let grade;
    //creating a swith condition to match if hte case is true
    switch (true) {
        case marks >= 70:
            console.log("Student Grade = First Class");
            break;
        case marks >= 50:
            console.log("Student Grade = Second Class");
            break;
        case marks >= 35:
            console.log("Student Grade = Pass");
            break;
        case marks <= 35:
            console.log("Student Grade = Fail");
            break;
        default:
            grade = "Invalid Score";
    }
    //returning the resulut that stored in grade variable
    return grade
}
//function is called 
studentScore(10)
