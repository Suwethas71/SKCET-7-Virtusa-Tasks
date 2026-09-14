let arr = [25, 10, 45, 5, 30];

let smallest = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
        smallest = arr[i];
    }
}

console.log("Smallest element:", smallest);