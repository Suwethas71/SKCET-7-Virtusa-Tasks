function findDuplicates(text: string): string[] {
    const count = new Map<string, number>();

    for (const char of text) {
        count.set(char, (count.get(char) || 0) + 1);
    }

    const duplicates: string[] = [];

    for (const [char, value] of count) {
        if (value > 1) {
            duplicates.push(char);
        }
    }

    return duplicates;
}

const text = "programming";

console.log("String:", text);
console.log("Duplicate characters:", findDuplicates(text));
