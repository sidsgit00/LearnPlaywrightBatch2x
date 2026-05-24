let age = 18;
let canVote = age >= 18 ? "Yes" : "No";
console.log("Can vote:", canVote); // Yes

age = 16;
canVote = age >= 18 ? "Yes" : "No";
console.log("Can vote:", canVote); // No

// nested ternary operator example
let score = 85;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : "C";
console.log("Grade:", grade); // B