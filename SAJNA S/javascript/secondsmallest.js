let input = prompt("Enter array elements separated by spaces:");

let arr = input.split(" ").map(Number);

// Remove duplicates and sort
let uniqueArr = [...new Set(arr)];
uniqueArr.sort((a, b) => a - b);

if (uniqueArr.length < 2) {
    console.log("Second-smallest element does not exist");
} else {
    console.log("Second-smallest element:", uniqueArr[1]);
}
