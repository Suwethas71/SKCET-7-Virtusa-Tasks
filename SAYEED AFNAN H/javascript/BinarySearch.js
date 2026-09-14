const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1;
}

rl.question("Enter sorted array elements (separated by spaces): ", (arrInput) => {
    const arr = arrInput.trim().split(/\s+/).map(Number);

    rl.question("Enter the target element to search: ", (targetInput) => {
        const target = Number(targetInput);
        const index = binarySearch(arr, target);

        if (index !== -1) {
            console.log(`Element ${target} found at index ${index}.`);
        } else {
            console.log(`Element ${target} not found in the array.`);
        }

        rl.close();
    });
});
