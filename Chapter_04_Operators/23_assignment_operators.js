let x = 10;
console.log("x =", x); // 10

x = 20;
console.log("= (Assignment)", x); // 20

x = 10;
x += 5; // x = x + 5
console.log("+= (Add)", x); // 15

x = 10;
x -= 3; // x = x - 3
console.log("-= (Subtract)", x); // 7

x = 5;
x *= 4; // x = x * 4
console.log("*= (Multiply)", x); // 20

x = 20;
x /= 4; // x = x / 4
console.log("/= (Divide)", x); // 5

x = 23;
x %= 5; // x = x % 5
console.log("%= (Modulus)", x); // 3

x = 2;
x **= 3; // x = x ** 3
console.log("**= (Exponentiation)", x); // 8

x = 12;
x &= 10; // x = x & 10  // 12 in binary: 1100
// 10 in binary: 1010
// Bitwise AND: 1100 & 1010 = 1000 (8 in decimal)  
//compares each postion of the bits of the two numbers and returns a new number where each bit is 1 if both corresponding bits of the original numbers are 1, otherwise it is 0.
console.log("&= (Bitwise AND)", x); // 8 

x = 12;
x |= 10;
console.log("|= (Bitwise OR)", x); // 14

x = 12;
x ^= 10;
console.log("^= (Bitwise XOR)", x); // 6

x = 5;
x <<= 1;
console.log("<<= (Left Shift)", x); // 10

x = 10;
x >>= 1;
console.log(">>= (Right Shift)", x); // 5

x = -5;
x >>>= 1;
console.log(">>>= (Unsigned Right Shift)", x); // 2147483645

x = 5;
x &&= 10;
console.log("&&= (Logical AND - truthy)", x); // 10

x = 0;
x &&= 10;
console.log("&&= (Logical AND - falsy)", x); // 0

x = 0;
x ||= 20;
console.log("||= (Logical OR - falsy)", x); // 20

x = 5;
x ||= 20;
console.log("||= (Logical OR - truthy)", x); // 5

x = null;
x ??= 30;
console.log("??= (Nullish Coalescing - null)", x); // 30

x = 0;
x ??= 30;
console.log("??= (Nullish Coalescing - 0)", x); // 0

x = + 5; x += 5;
// x =+ 5 is equivalent to x = +5, which assigns the positive value of 5 to x.
// x += 5 is equivalent to x = x + 5, which adds 5 to the current value of x and assigns the result back to x.      

