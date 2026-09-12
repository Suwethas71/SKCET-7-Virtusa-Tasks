import * as readline from "readline";

export function sumOfDigits(num: number): number {
  let n = Math.abs(Math.floor(num));
  let sum = 0;

  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }

  return sum;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter an integer: ", (answer: string) => {
  const parsedNum = parseInt(answer, 10);
  if (isNaN(parsedNum)) {
    console.log("Please enter a valid numeric value.");
  } else {
    console.log(`Sum of digits of ${parsedNum} is: ${sumOfDigits(parsedNum)}`);
  }
  rl.close();
});
