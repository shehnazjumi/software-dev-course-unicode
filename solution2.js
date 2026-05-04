// Starter Code
// Task 1: Extract Code Points from Characters
let inputString1 = "Code";
let firstCodePoint = inputString1.charCodeAt(0); // Extracts code point for 'C'
let thirdCodePoint = inputString1.charCodeAt(2); // Extracts code point for 'd'

// Task 2: Create a Word from Code Points
let wordFromCodePoints = String.fromCharCode(74, 97, 118, 97, 83, 99, 114, 105, 112, 116);

// Task 3: Swap First and Last Characters
let inputString2 = "Launch";
let firstCode = inputString2.charCodeAt(0); // 'L'
let lastCode = inputString2.charCodeAt(inputString2.length - 1); // 'h'

// Create a new string by concatenating the new first character, the middle, and the new last character
let swappedString = String.fromCharCode(lastCode) + inputString2.slice(1, -1) + String.fromCharCode(firstCode);

// Log all results
console.log({
  firstCodePoint,
  thirdCodePoint,
  wordFromCodePoints,
  swappedString,
});