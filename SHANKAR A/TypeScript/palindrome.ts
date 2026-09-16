let str: string = "madam";

let reversed: string = str.split("").reverse().join("");

if (str === reversed) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}