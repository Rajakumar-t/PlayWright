// Step 1: Declare a global variable named 'browser'
let browser = "Chrome";

// Step 2: Define a function that simulates checking the browser version.
// This function accepts another function as a parameter (a callback).
function checkBrowserVersion(callback) {
    // Step 3: Use setTimeout to simulate an asynchronous operation (like fetching data from a server)
    setTimeout(() => {
        // Step 4: Call the callback function and pass the 'browser' variable to it
        // This is where 'version' will receive the value "Chrome"
        if (callback) {
            callback(browser);
        }
    }, 2000); // Wait 2 seconds before executing the callback
}

// Step 5: Define the callback function that will be passed to checkBrowserVersion
// It receives one argument (version), which will be "Chrome" from above
function displayBrowserVersion(version) {
    // Step 6: Log the message using template literals to include the version
    console.log(`Browser version using callback: ${version}`);
}

// Step 7: Call the function and pass the callback
checkBrowserVersion(displayBrowserVersion);

// Expected Output after 2 seconds:
// Browser version using callback: Chrome
