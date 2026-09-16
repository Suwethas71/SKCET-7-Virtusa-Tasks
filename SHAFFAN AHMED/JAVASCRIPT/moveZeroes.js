function moveZeroes(arr) {
    let position = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[position] = arr[i];
            position++;
        }
    }

    while (position < arr.length) {
        arr[position] = 0;
        position++;
    }

    return arr;
}

const numbers = [0, 1, 0, 3, 12];

console.log("Original:", numbers);
console.log("After moving zeroes:", moveZeroes(numbers));
