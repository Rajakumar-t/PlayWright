// Importing console functions (not necessary here, but harmless)
import { rejects } from "assert";
import { error, log } from "console";
import { promises } from "dns";
import { resolve } from "path";

// This function simulates fetching data from a database
function fetchDataFromDatabase() {
    const data = true; // Simulated data; change to true to simulate a successful fetch

    // Return a Promise to handle async operation (simulating server delay)
    return new Promise((resolve, reject) => {
        // Simulate a delay of 3 seconds
        setTimeout(() => {
            // If data is available (true), resolve the promise
            if (data) {
                resolve("Data fetched successfully!"); // Success message
            } else {
                // If data is not available (false), reject the promise
                reject("Data not found!"); // Error message
            }
        }, 3000); // Delay is 3000 milliseconds = 3 seconds
    });
}

// Call the function and handle the result using .then() and .catch()

fetchDataFromDatabase()
    .then(message => {
        // This runs if the promise was resolved (data was true)
        console.log(message); // Log the success message
    })
    .catch(error => {
        // This runs if the promise was rejected (data was false)
        console.error(error); // Log the error message
    });




    //this is a dummy code for my Reference
/* function fetData (){
    const data = trure 

    return new promise ((resolve,reject)=>{
        setTimeout(() => {
            if (data) {
                console.log("yes");
                
            } else {
                console.log("no");
                
            }
        }, timeout);
    })
}
fetData()
.then(message =>{console.log(message);
})
.catch(message =>{
    console.error(error);
    
}) */