// let - blocked scope
// let is a newer way to declare variables in JavaScript, introduced in ES6 (ECMAScript 2015).

// can be reassigned but not redeclared in the same scope

let name = 'Alice';
console.log('Original name:', name);

name = 'Bob'; //reassignment
console.log('Reassigned name:', name);

// let name = 'Charlie'; // This would cause a SyntaxError: Identifier 'name' has already been declared

//blocked scope example
function test() {
    let x = 10; // x is only accessible within this function
    console.log("Inside function, x:", x);
}
test();
// console.log(x); // This would cause a ReferenceError: x is not defined, because x is not accessible outside the function