const fs = require("fs");

let str = fs.readFileSync(0, "utf8").trim();
let rev = str.split("").reverse().join("");

console.log(rev);
