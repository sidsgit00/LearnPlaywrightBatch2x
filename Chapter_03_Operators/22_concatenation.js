// 22_concatenation.js
// Examples of string concatenation in JavaScript

// 1) Using the + operator
let firstName = 'John';
let lastName = 'Doe';
let fullName = firstName + ' ' + lastName;
console.log('Full name:', fullName); // Full name: John Doe

// 2) Concatenating strings and numbers
let message = 'You have ' + 5 + ' new messages.';
console.log(message); // You have 5 new messages.

// 3) Using template literals instead of + for readability
let age = 30;
let intro = `My name is ${fullName} and I am ${age} years old.`;
console.log(intro);

// Important note:
// - + concatenation converts non-string values to strings when one side is a string.
// - Template literals are generally easier to read for complex strings.
