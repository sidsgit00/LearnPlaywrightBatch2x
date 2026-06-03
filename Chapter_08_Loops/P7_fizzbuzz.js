
for (let a = 1; a <= 100; a++) {
    if (a % 5 == 0 && a % 3 != 0) {
        console.log("buzz");
    }
    else if (a % 3 == 0 && a % 5 != 0) {
        console.log("fizz");
    }
    else if (a % 15 == 0) {
        console.log("fizzbuzz");
    }
    else {
        console.log(a);
    }
}