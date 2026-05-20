// 17_literal_number_all.js
// All number types supported in JavaScript

// 1) Decimal (Base 10) - Most common integer and floating-point numbers
let decimal1 = 42;                // integer
let decimal2 = 3.14;              // floating-point
console.log('Decimal numbers:', decimal1, decimal2);

// 2) Hexadecimal (Base 16) - Prefix with 0x
let hex1 = 0xFF;                  // 255 in decimal
let hex2 = 0x10;                  // 16 in decimal
console.log('Hexadecimal numbers:', hex1, hex2);

// 3) Octal (Base 8) - Prefix with 0o
let octal1 = 0o10;                // 8 in decimal
let octal2 = 0o77;                // 63 in decimal
console.log('Octal numbers:', octal1, octal2);

// 4) Binary (Base 2) - Prefix with 0b
let binary1 = 0b1010;             // 10 in decimal
let binary2 = 0b1111;             // 15 in decimal
console.log('Binary numbers:', binary1, binary2);

// 5) Scientific Notation (Exponential)
let scientific1 = 1.5e2;          // 150 (1.5 * 10^2)
let scientific2 = 2e-3;           // 0.002 (2 * 10^-3)
let scientific3 = 1e10;           // 10000000000
console.log('Scientific notation:', scientific1, scientific2, scientific3);

// 6) Infinity - Represents the largest positive number beyond JavaScript limit
let positiveInfinity = Infinity;  // or 1/0
let negativeInfinity = -Infinity; // or -1/0
console.log('Infinity:', positiveInfinity, negativeInfinity);

// 7) NaN (Not a Number) - Represents an undefined or unrepresentable number
let nan1 = NaN;                   // explicitly assigned
let nan2 = 0 / 0;                 // mathematical operation resulting in NaN
let nan3 = parseInt('hello');     // parsing non-numeric string
console.log('NaN:', nan1, nan2, nan3);
console.log('typeof NaN:', typeof NaN);

// 8) BigInt - For very large integers beyond Number.MAX_SAFE_INTEGER
// Suffix with 'n' to create a BigInt
let bigInt1 = 123n;
let bigInt2 = 999999999999999999n;
let bigInt3 = BigInt('9007199254740992'); // Alternative way to create BigInt
console.log('BigInt numbers:', bigInt1, bigInt2, bigInt3);

// Important: Cannot mix BigInt and Number in operations
// let result = 10n + 5;  // TypeError: Cannot mix BigInt and other types

// 9) Negative numbers
let negativeDecimal = -42;
let negativeFloat = -3.14;
console.log('Negative numbers:', negativeDecimal, negativeFloat);

// Number Properties (for reference)
console.log('\n--- Number Properties ---');
console.log('Number.MAX_SAFE_INTEGER:', Number.MAX_SAFE_INTEGER);      // 9007199254740991
console.log('Number.MIN_SAFE_INTEGER:', Number.MIN_SAFE_INTEGER);      // -9007199254740991
console.log('Number.MAX_VALUE:', Number.MAX_VALUE);                    // largest possible number
console.log('Number.MIN_VALUE:', Number.MIN_VALUE);                    // smallest positive number
console.log('Number.POSITIVE_INFINITY:', Number.POSITIVE_INFINITY);
console.log('Number.NEGATIVE_INFINITY:', Number.NEGATIVE_INFINITY);
console.log('Number.NaN:', Number.NaN);

// Summary:
// Number types in JavaScript:
// 1. Decimal (integer and float) - standard numbers
// 2. Hexadecimal (0x prefix) - base 16
// 3. Octal (0o prefix) - base 8
// 4. Binary (0b prefix) - base 2
// 5. Scientific notation (e notation) - for very large/small numbers
// 6. Infinity - represents infinity
// 7. NaN - not a number value
// 8. BigInt (n suffix) - for very large integers
// All except BigInt are of type 'number'
