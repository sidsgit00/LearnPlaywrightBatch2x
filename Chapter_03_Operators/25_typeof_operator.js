console.log(typeof 42); // "number"
console.log(typeof "Hello"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null);   // "object" (this is a quirk in JavaScript, null is considered an object)
console.log(typeof {}); // "object"
console.log(typeof []); // "object" (arrays are also considered objects)
console.log(typeof function () { }); // "function" (functions are a special type of object in JavaScript)

// Using typeof with variables
let num = 100;
let str = "JavaScript";
let bool = false;
console.log(typeof num); // "number"