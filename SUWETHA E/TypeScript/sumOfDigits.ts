import * as fs from "fs";

let n = Number(fs.readFileSync(0, "utf8"));
let sum = 0;

while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
}

console.log(sum);
