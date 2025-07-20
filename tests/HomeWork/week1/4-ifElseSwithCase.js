const test = require("node:test");

function launchBrowser(browsername) {
    if (browsername === "Chrome") {
        console.log("Browser name = " + browsername);
    }
    else {
        console.log("Browser Name =  Otherwise");
    }
}

function runTests(test) {
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
launchBrowser("Chrome");
launchBrowser("Edge");
test("smoke");
test("sanity");
test("regression");
test("default");
