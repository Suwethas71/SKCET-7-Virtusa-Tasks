const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function findMax(arr) {
    if (arr.length === 0) {
        return "Array is empty";
    }
    return Math.max(...arr);
}

rl.question("Enter numbers (separated by spaces): ", (input) => {
    const trimmed = input.trim();
    if (trimmed === "") {
        console.log("Result:", findMax([]));
    } else {
        const numbers = trimmed.split(/\s+/).map(Number);
        console.log("Array:", numbers);
        console.log("Maximum Value:", findMax(numbers));
    }
    rl.close();
});
