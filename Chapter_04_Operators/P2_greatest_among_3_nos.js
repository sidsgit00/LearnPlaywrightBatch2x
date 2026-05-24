let x = 1;
let y = 3;
let z = 2;
let greatest = x > y && x > z ? x : y > z ? y : z; // nested ternary operator to find greatest among 3 numbers
let smallest = x < y && x < z ? x : y < z ? y : z; // nested ternary operator to find smallest among 3 numbers
console.log(smallest);
console.log(greatest);