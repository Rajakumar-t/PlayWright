// Step 1: Define the array of numbers
const nums = [2, 4, 5, 2, 1, 2];

// Step 2: Define the number to count in the array
const k = 2;

// Step 3: Initialize a counter to store how many times 'k' appears
let count = 0;

// Step 4:For Loop through each element in the array
for (let i = 0; i < nums.length; i++) {

    // Step 5: Check if the current element is equal to 'k'
    if (nums[i] == k) {

        // Step 6: If yes, increment the counter by 1
        count++;
    }
}

// Step 7: Print the final result to the console
console.log(`The number ${k} has appeared ${count} times in the array`);
