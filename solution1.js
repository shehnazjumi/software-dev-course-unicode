// ==========================================
// Exercise 1: Retrieve and Add Two Code Points
// ==========================================
let inputString = "Hi";
let sumCodePoints = inputString.charCodeAt(0) + inputString.charCodeAt(1);
console.log("sumCodePoints:", sumCodePoints); // Expected: 177

// ==========================================
// Exercise 2: Generate a String from Two Code Points
// ==========================================
let codePoint1 = 65;
let codePoint2 = 66;
let combinedString = String.fromCharCode(codePoint1) + String.fromCharCode(codePoint2);
console.log("combinedString:", combinedString); // Expected: "AB"

// ==========================================
// Exercise 3: Find the Character Difference
// ==========================================
let inputString3 = "Cat";
let idx1 = 0;
let idx2 = 2;
let codePointDifference = Math.abs(inputString3.charCodeAt(idx1) - inputString3.charCodeAt(idx2));
console.log("codePointDifference:", codePointDifference); // Expected: 16