// JS has no concept of character 
// JS has only string data type to represent text
//example
let char1 = 'A'; // string literal with single quotes
let char2 = "B"; // string literal with double quotes
let char3 = `C`; // string literal with backticks (template literals)

//singel quotes
//example
let singleQuoteString = 'Hello, World!';
let a = 'hello "india"'; // using double quotes inside single quotes
console.log(a);

//double quotes
//example
let doubleQuoteString = "Hello, World!";
let c = "it's a nice day"; // using single quote inside double quotes
console.log(c);

// JS prefers single quotes

// template literals 
//example
let name = 'Alice';
let greeting = `Hello, ${name}!`;

const env = "staging";
const id = 123;
const url = `https://${env}.example.com/user/${id}`;
console.log(url); // https://staging.example.com/user/123

