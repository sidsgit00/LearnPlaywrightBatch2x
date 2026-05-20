var v = 10;
let l = 20;
const c = 3.14;

var browser = "chrome";
var browser = "firefox";// re-declaration is allowed in var but not in let and const
browser = "edge"; // re-assignment is allowed in var and let but not in const

var testCases = ["test1", "test2", "test3"];
for (var i = 0; i < testCases.length; i++) {
    console.log(testCases[i]);
}
console.log(i); // i is accessible outside the loop when declared with var

