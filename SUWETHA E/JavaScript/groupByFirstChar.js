const words = prompt("Enter words:").split(" ");
const map = {};

for (let word of words) {
    let ch = word[0].toLowerCase();

    if (!map[ch])
        map[ch] = [];

    map[ch].push(word);
}

console.log(map);
