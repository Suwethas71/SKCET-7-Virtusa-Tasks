let str: string = prompt("Enter a sentence") || "";

let result = str.replace(/\s/g, "");

console.log(result);
