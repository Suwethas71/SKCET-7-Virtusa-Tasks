import * as readline from "readline";

export function removeAllSpaces(input: string): string {
  return input.replace(/\s+/g, "");
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a sentence with spaces: ", (text: string) => {
  const formatted = removeAllSpaces(text);
  console.log(`Result without spaces: "${formatted}"`);
  rl.close();
});
