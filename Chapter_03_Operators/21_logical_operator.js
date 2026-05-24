// 21_logical_operator.js
// Important examples and key things to remember for JavaScript logical operators

// 1) Logical AND (&&)
// - returns the first falsy value, or the last value if all are truthy.
// - used for checking multiple conditions.
console.log(true && true);   // true
console.log(true && false); // false
console.log(5 && 0);               // 0 (first falsy)
console.log(5 && 10);             // 10 (both truthy, return last)

// Typical usage:
let isLoggedIn = true;
let hasPermission = true;
if (isLoggedIn && hasPermission) {
    console.log('Access granted');
}

// 2) Logical OR (||)
// - returns the first truthy value, or the last value if all are falsy.
// - commonly used for default values.
console.log('false || true:', false || true);  // true
console.log('0 || "hello":', 0 || 'hello');  // 'hello'
console.log('"" || 42:', '' || 42);          // 42
console.log('null || undefined:', null || undefined); // undefined (all falsy)

// Common pattern for defaults:
let userName = '';
let defaultName = 'Guest';
console.log('Name:', userName || defaultName); // 'Guest'

// 3) Logical NOT (!)
// - converts value to boolean and inverts it.
console.log('!true:', !true);    // false
console.log('!0:', !0);          // true
console.log('!"text":', !'text'); // false

// Double NOT (!!) is often used to convert any value to a boolean.
console.log('!!"hello":', !!'hello'); // true
console.log('!!0:', !!0);             // false

// 4) Short-circuit behavior
// - && stops at first falsy and does not evaluate the rest.
// - || stops at first truthy and does not evaluate the rest.
function sideEffect() {
    console.log('sideEffect called');
    return true;
}
console.log('false && sideEffect():', false && sideEffect()); // sideEffect not called
console.log('true || sideEffect():', true || sideEffect());   // sideEffect not called

// 5) Important things to remember
// - && and || do NOT always return boolean values.
//   They return one of the original operands based on truthiness.
// - truthy values: non-empty strings, non-zero numbers, objects, arrays, true.
// - falsy values: false, 0, -0, 0n, "", null, undefined, NaN.
// - Use !!value when you need an actual boolean conversion.
// - Prefer parentheses for readability when mixing && and ||.

// Example with mixed operators:
let age = 20;
let hasID = true;
let isMember = false;

// Condition: age >= 18 AND (hasID OR isMember)
let canEnter = age >= 18 && (hasID || isMember);
console.log('canEnter:', canEnter); // true

// 6) Common interview-style examples to remember
// - false && anything => false
// - true || anything => true
// - 0 || 'fallback' => 'fallback'
// - null && 'value' => null
// - 'text' && 123 => 123

// Important note:
// - Avoid using || for defaults when empty strings or zero are valid values.
//   Example: let count = 0 || 10; // result is 10, but 0 may be a valid value.
//   Use a nullish coalescing operator (??) instead in those cases.

// 7) Extra tip: nullish coalescing (??)
// - returns right-hand value only if left-hand is null or undefined.
// - useful when 0 or empty string are valid values.
let value = 0;
console.log('0 || 10 =>', value || 10);  // 10
console.log('0 ?? 10 =>', value ?? 10);  // 0
