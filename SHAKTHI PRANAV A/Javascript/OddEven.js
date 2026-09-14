let arr = [10, 15, 22, 33, 40, 51];

let even = 0;
let odd = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        even++;
    } else {
        odd++;
    }
}

console.log("Even elements:", even);
console.log("Odd elements:", odd);