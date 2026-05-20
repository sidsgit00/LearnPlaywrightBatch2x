var x = 1; //global variable
var x = 3; // redeclaration of global variable, allowed in JavaScript
function test() {
    var x = 2; //local variable
    console.log(x); // 2
}
test();

console.log(x); // 1