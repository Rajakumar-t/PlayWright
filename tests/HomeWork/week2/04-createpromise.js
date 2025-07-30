import { error, log } from "console";
import { loadavg } from "os";

// creating a funstion that return prmomise
function conditionalPromise() {
    //declaring a variable number
    const num = -1;
    //returning a promise that resolves if num >0.5, otherwise reject
    return new Promise((resolve, reject) => {
        //using mathamatical logic if the number is greater or not
        if (num <= 0.5) {
            //will pass the message if its resolve
            console.log("Rsolved Succcesfully");

        } else {
            //will pass the message if it rejects
            console.log("rejected");

        }
    })
}
// Calling the conditionalPromise function and handling the result
conditionalPromise()
    .then(message => {
        // Calling the conditionalPromise function and handling the result
        console.log(message);
    })
    // This block runs if the Promise was rejected
    .catch(error => {
        console.error(error);
    })
