let input = prompt("Enter numbers separated by spaces:");

let arr = input.split(" ").map(Number);

let uniqueValues = new Set(arr);

console.log([...uniqueValues]);