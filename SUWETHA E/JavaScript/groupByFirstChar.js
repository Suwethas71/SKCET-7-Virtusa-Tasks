const readline = require("readline");

function groupWordsByFirstCharacter(words) {
  const groupedMap = new Map();

  for (const word of words) {
    const trimmed = word.trim();
    if (trimmed.length === 0) continue;

    const firstChar = trimmed[0].toLowerCase();

    if (!groupedMap.has(firstChar)) {
      groupedMap.set(firstChar, []);
    }
    groupedMap.get(firstChar).push(trimmed);
  }

  return groupedMap;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter words separated by spaces: ", (input) => {
  const words = input.split(/\s+/);
  const result = groupWordsByFirstCharacter(words);

  console.log("\nGrouped words:");
  for (const [char, list] of result.entries()) {
    console.log(`'${char}' -> [ ${list.join(", ")} ]`);
  }

  rl.close();
});
