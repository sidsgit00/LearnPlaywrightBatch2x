let x = 10;
let y = ++x; // preincrement: x is incremented first, then assigned
console.log(y);
console.log(x);

let a = 10;
let b = a++; // postincrement: a is assigned first, then incremented
console.log(b);
console.log(a);

//more example
let i = 5;
console.log(i++); // prints 5, then i becomes 6
console.log(++i); // i becomes 7, then prints 7
console.log(i--);   // prints 7, then i becomes 6
console.log(--i);   // i becomes 5, then prints 5       

//interview question
let m = 10;
console.log(++m + m);// 11 + 11 = 22

let z = 10;
console.log(z++ + z);// 10 + 11 = 21

let k = 10;
console.log(k++ + ++k);// 10 + 12 = 22

let p = 10;
console.log(++p + p++ + p);// 11 + 11 + 12 = 34 





