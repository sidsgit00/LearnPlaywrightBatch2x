// line by line explanation of hoisting in JavaScript

// Hoisting is a JavaScript mechanism where variable and 
// function declarations are moved to the top of their
//  containing scope during the compilation phase. 
// This means that you can use variables and functions 
// before they are declared in the code.

// Example of variable hoisting with 'var'

console.log('Value of a before declaration:', a);
var a = 10; // 'a' is declared and assigned a value after it is used
console.log('Value of a after declaration:', a);
