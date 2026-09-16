function reverseWords(sentence: string): string {
    return sentence
        .split(" ")
        .map(word => word.split("").reverse().join(""))
        .join(" ");
}

const sentence = "Hello World From TypeScript";

console.log("Original:", sentence);
console.log("Reversed:", reverseWords(sentence));
