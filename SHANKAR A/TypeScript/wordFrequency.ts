let paragraph: string = "hello world hello typescript world";

let words: string[] = paragraph.split(" ");

let wordMap: Map<string, number> = new Map();

for (let word of words) {
    wordMap.set(word, (wordMap.get(word) || 0) + 1);
}

console.log(wordMap);