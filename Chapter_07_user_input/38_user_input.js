let num = prompt("Enter a number:");
num = Number(num);  // convert string to number

if (num % 2 === 0) {
    console.log(num + " is Even");
} else {
    console.log(num + " is Odd");
}

// reference error

// why it can't be run in VS

//Because prompt() is a browser API, not a Node.js / VS Code API.

//When you run JavaScript in VS Code, it usually runs with Node.js in the terminal.
/* prompt() works in a browser environment because the browser provides:

window
alert()
prompt()
document

But Node.js does not provide prompt() by default, so VS Code terminal can’t run it directly
. */