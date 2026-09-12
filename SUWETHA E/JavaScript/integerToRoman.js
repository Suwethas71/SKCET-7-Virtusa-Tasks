const readline = require("readline");

function intToRoman(num) {
  if (num <= 0 || num > 3999) {
    return "Number out of range (1 - 3999)";
  }

  const lookup = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];

  let roman = "";
  let remaining = num;

  for (const item of lookup) {
    while (remaining >= item.value) {
      roman += item.symbol;
      remaining -= item.value;
    }
  }

  return roman;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter an integer (1 to 3999): ", (answer) => {
  const val = parseInt(answer, 10);
  if (isNaN(val)) {
    console.log("Please enter a valid numeric integer.");
  } else {
    console.log(`Roman numeral for ${val}: ${intToRoman(val)}`);
  }
  rl.close();
});
