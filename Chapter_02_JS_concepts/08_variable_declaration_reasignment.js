// 08_variable_declaration_reasignment.js

// 1) Variable declaration
// Declaration means introducing a variable name to the program.
let age;          // 'age' is declared but not yet assigned a value

// 2) Assignment
// Assignment means giving a value to a declared variable.
age = 25;         // now 'age' holds the value 25
console.log('Declared and assigned age:', age);

// 3) Reassignment
// Reassignment means changing the value of an already declared variable.
age = 30;         // the value of 'age' is changed from 25 to 30
console.log('Reassigned age:', age);

// 4) Redeclaration
// Redeclaration means declaring the same variable name again.
// With 'let' and 'const', redeclaration in the same scope is not allowed.
// With 'var', redeclaration is allowed in the same scope.

var color = 'red';
console.log('Original color:', color);

var color = 'blue';           // redeclaration using var is allowed
console.log('Redeclared color with var:', color);

// Example with let and const that would cause errors if uncommented:
// let age = 40;              // SyntaxError: Identifier 'age' has already been declared
// const color = 'green';     // SyntaxError: Identifier 'color' has already been declared

// 5) const declaration and assignment behavior
const country = 'India';      // declaration + assignment in one step
console.log('Constant country:', country);

// country = 'USA';           // TypeError: Assignment to constant variable.
// const country = 'USA';     // SyntaxError: Identifier 'country' has already been declared

// Summary:
// - Declaration: create a variable name (e.g. let x; const y = 10; var z;)
// - Assignment: set a value to a declared variable (e.g. x = 5;)
// - Reassignment: change the value of an existing variable (e.g. x = 10;)
// - Redeclaration: declare the same variable name again in the same scope
//   (allowed for var, not allowed for let/const in the same scope)
