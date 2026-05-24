// === (strict equality) vs == (loose equality)

// always use === 
// use == only for 0 and undefined



//number = string // checks value only
console.log(5 == '5'); // true - loose equality does type coercion

// check value and data type both
console.log(5 === '5'); // false - strict equality does not do type coercion, checks both value and type

console.log(0 == ""); // true - loose equality converts empty string to 0
console.log(0 === ""); // false - strict equality checks type, number vs string

console.log("" == "0")// false - both are strings but different values
console.log("" === "0")// false - both are strings but different values 

console.log("" == 0) // true - loose equality converts empty string to 0
console.log("" === 0) // false - strict equality checks type, string vs number

console.log(false == "0") // true - loose equality converts "0" to false

console.log(0 == false) // true - loose equality converts false to 0

console.log(null == 0) // false - null is only loosely equal to undefined, not to any other value
console.log(null === 0) // false - different types

console.log(undefined == null) // true - loose equality considers undefined and null equal
console.log(undefined === null) // false - different types

console.log(NaN == NaN) // false - NaN is not equal to anything, including itself
console.log(NaN === NaN) // false - same reason as above    


console.log(5 != '5'); // false - loose inequality does type coercion // 5 is equal to 5 ..but we want not equal ..thats why false
console.log(5 !== '5'); // true - strict inequality checks both value and type

