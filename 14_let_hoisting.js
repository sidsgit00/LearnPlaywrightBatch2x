//Temporal dead zone - variables declared with let and const are not accessible before their declaration



//TDZ start just after the block till variable declaration
{
    // TDZ for x starts here
    // console.log(x); // ReferenceError
    let x = 10;
    // TDZ ends here
    console.log(x); // 10
}



// Example with let
console.log('Value of y before declaration:', y); // ReferenceError: Cannot access 'y' before initialization
let y = 20;
console.log('Value of y after declaration:', y);
