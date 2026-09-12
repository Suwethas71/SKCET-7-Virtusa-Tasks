let min = Number(prompt("Enter minimum value:"));
let max = Number(prompt("Enter maximum value:"));

let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

console.log("Random number:", randomNumber);
