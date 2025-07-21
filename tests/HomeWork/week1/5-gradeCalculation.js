const { log } = require("console");
const { loadavg } = require("os");

function studentScore(marks) {
    let grade;
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
    return grade
}
studentScore(10)