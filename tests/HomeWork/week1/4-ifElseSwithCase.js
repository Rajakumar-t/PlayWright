const test = require("node:test");

// crerating a function
function launchBrowser(browsername) {
    //creating a if condition
    if (browsername === "Chrome") {
        console.log("Browser name = " + browsername);
    }
    else {
        console.log("Browser Name =  Otherwise");
    }
}
//creating a another function 
function runTests(test) {
    //creating a switch condition
    switch (test) {
        case "smoke":
            console.log("Running Smoke Test");
            break;

        case "sanity":
            console.log("Running Sanity Test");
            break;

        case "regression":
            console.log("Running Regression Test");
            break;

        case "default":
            console.log("Running Smoke Test");
            break;
    }

}
//calling the function
launchBrowser("Chrome");
launchBrowser("Edge");
test("smoke");
test("sanity");
test("regression");
test("default");
