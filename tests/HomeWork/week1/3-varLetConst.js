
//declaring a gloable variable const
const browsername = "Chrome";

//creating a function
function getBrowserName(browsername) {

    //checking the condition to see if its Chrome
    if (browsername === "Chrome") {

        //rewriting the gloable variable with local 
        var browsername = "Edge";

    }
    //printing the local variable
    console.log("Inside Block, Browser Name =" + browsername);

}
//calling the function
getBrowserName("Chrome");
//printing the gloable variable
console.log("Global Browser = " + browsername);

