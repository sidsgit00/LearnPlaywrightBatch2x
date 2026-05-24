// var is function-scoped
var x = 1;
console.log('Global x:', x);
function test() {
    var x = 2; // local variable, different from global x
    console.log('Inside function, local x:', x); // 2
    if (true) {
        var x = 3;
        console.log('Inside block, x:', x); // 3
    }
    console.log('After block, x:', x); // 3, because var is function-scoped, not block-scoped
}
console.log('Before function call, global x:', x);
test();
console.log('after function call, global x:', x)