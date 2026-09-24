const fs = require("fs");

let n = Number(fs.readFileSync(0, "utf8"));
let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
let symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

let roman = "";

for (let i = 0; i < values.length; i++) {
    while (n >= values[i]) {
        roman += symbols[i];
        n -= values[i];
    }
}

console.log(roman);
