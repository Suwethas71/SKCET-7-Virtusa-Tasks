const readline = require("readline");

function reverseUsingArrayMethods(str) {
  if (typeof str !== "string") {
    return "";
  }
  return str.split("").reverse().join("");
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a string: ", (text) => {
  const reversed = reverseUsingArrayMethods(text);
  console.log(`Reversed string: ${reversed}`);
  rl.close();
});
