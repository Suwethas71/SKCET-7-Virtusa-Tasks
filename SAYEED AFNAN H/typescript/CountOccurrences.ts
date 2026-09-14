export {};
declare const require: any;
declare const process: any;

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function countOccurrences(arr: number[], target: number): number {
    let count: number = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            count++;
        }
    }
    return count;
}

rl.question("Enter array elements (separated by spaces): ", (arrInput: string) => {
    rl.question("Enter element to count: ", (targetInput: string) => {
        const arr: number[] = arrInput.trim() === "" ? [] : arrInput.trim().split(/\s+/).map(Number);
        const target: number = Number(targetInput);

        const count: number = countOccurrences(arr, target);
        console.log(`Array: [${arr.join(", ")}]`);
        console.log(`Element ${target} occurs ${count} time(s).`);

        rl.close();
    });
});
